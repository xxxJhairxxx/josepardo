"use strict";

/**
 * user-register controller
 */

const nodemailer = require("nodemailer");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::user-register.user-register",
  ({ strapi }) => ({
    async create(ctx) {
      try {
        const FormData = ctx.request.body;

        console.log(FormData);

        const sanitizedQueryParams = await this.sanitizeQuery(ctx);

        const { results } = await strapi
          .service("api::user-register.user-register")
          .find({
            ...sanitizedQueryParams
          });

        const sanitizedResults = await this.sanitizeOutput(results, ctx);

        // Revisamos si hay algún usuario con el mismo email y carrera
        for (const item of sanitizedResults) {

          if (
            item.email === FormData.data.email &&
            item.carrera_interes === FormData.data.carrera_interes
          ) {

            console.log("Un usuario con este correo y carrera ya existe");
            return ctx.send({
              message: "Un usuario con este correo y carrera ya existe.",
            });
          }
        }

        // Si no hay coincidencia, se crea un nuevo usuario
        const newUser = await strapi
          .service("api::user-register.user-register")
          .create({ data: FormData.data });


        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT),
          secure: true,
          auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
          },
        });


        
        const emailStrapi = await strapi
          .service("api::template-email.template-email")
          .find({
            ...sanitizedQueryParams
          });

        const emailTemplate = {
          subject: "Únete a nuestra comunidad - José Pardo",
          text: "",
          html: emailStrapi.html
        };

        await transporter.sendMail({
          from: process.env.SMTP_EMAIL,
          to: FormData.data.email,
          subject: emailTemplate.subject,
          html: emailTemplate.html
        });

        return ctx.send({
          message: "Thank you for your message. It has been sent.",
          data: newUser,
        });
      } catch (error) {
        console.log(error);
        ctx.throw(500, "There was an error processing your request.");
      }
    },
  })
);
