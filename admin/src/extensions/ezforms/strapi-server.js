const axios = require("axios");
const { schema } = require("./validateForm");

module.exports = (plugin) => {
  plugin.controllers.submitController = () => ({
    async index(ctx) {
      let verification = {};
      let formName =
        strapi.config.get("plugin.ezforms.enableFormName") &&
        !!ctx.request.body.formName
          ? ctx.request.body.formName
          : "Form";

      const result = schema.validate(ctx.request.body.formData, {
        abortEarly: false,
      });

      if (result.error) {
        const invalidArgs = result.error.details.map(({ path, message }) => ({
          path: path[0],
          message,
        }));

        return ctx.badRequest(
          "One or more fields have an error. Please check and try again.",
          invalidArgs
        );
      }

      // const { data } = await axios.post(
      //   `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${ctx.request.body.formData.captcha}`
      // );

      // if (!data.success) {
      //   return ctx.badRequest("Captcha fail validation.");
      // }
      //sends notifications
      for (const provider of strapi.config.get(
        "plugin.ezforms.notificationProviders"
      )) {
        if (provider.enabled) {
          try {
            await strapi
              .plugin("ezforms")
              .service(provider.name)
              .send(provider.config, formName, ctx.request.body.formData);
          } catch (e) {
            strapi.log.error(e);
            return ctx.internalServerError("A Whoopsie Happened", e);
          }
        }
      }

      // Adds to DB
      let parsedScore = verification.score || -1;
      delete ctx.request.body.formData.captcha;
      try {
        await strapi.query("plugin::ezforms.submission").create({
          data: {
            score: parsedScore,
            formName: formName,
            data: ctx.request.body.formData,
          },
        });
      } catch (e) {
        strapi.log.error(e);
        return ctx.internalServerError("A Whoopsie Happened", e);
      }

      return {
        message: "Thank you for your message. It has been sent.",
      };
    },
  });

  plugin.services.formatData = () => ({
    formatData(data) {
      const { name, last_name, phone, email, message } = data;

      const body = `
      <br>
      From: ${name} ${last_name ? last_name : ""} / ${email} <br>
      Subject: Contact Form / Tapia Tennis Court  <br>
      <br>
      Contact Info--- <br>
      Phone: ${phone} <br>
      Email: ${email} <br>
      ${message ? `Message: ${message} <br>` : ""}
      <br>
      --
      This e-mail was send from a contact form on Tapia Tennis Court
      `;

      return body;
    },
  });

  return plugin;
};
