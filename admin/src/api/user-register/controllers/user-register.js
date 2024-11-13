"use strict";

/**
 * user-register controller
 */

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
