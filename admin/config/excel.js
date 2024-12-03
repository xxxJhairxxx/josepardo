module.exports = {
    config: {
     "api::user-register.user-register": {
        columns: [
          "nombres",
          "apellidos",
          "carrera_interes",
          "celular",
          "email"
        ],
        relation: {
          solution: {
            column: ["carrera_interes"],
          },
        },
        locale: "false",
      },
    },
  };