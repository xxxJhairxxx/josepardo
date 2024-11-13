const axios = require("axios");
const { schemaValidation } = require("./validateForm");

module.exports = (plugin) => {
  plugin.controllers.submitController = () => ({
    async index(ctx) {

      let verification = {};
      let formName =
        strapi.config.get("plugin.ezforms.enableFormName") &&
        !!ctx.request.body.formName
          ? ctx.request.body.formName
          : "Form";

      const result = schemaValidation.validate(ctx.request.body.formData, {
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

	//   const { data } = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
	// 	params: {
	// 	  secret: process.env.RECAPTCHA_SECRET_KEY,
	// 	  response: ctx.request.body.formData.captcha,  // Aquí va el valor de la respuesta de reCAPTCHA del frontend
	// 	},
	//   });
	  
    //   if (!data.success) {
    //     return ctx.badRequest("Captcha fail validation.");
    //   }

	  
     // sends notifications
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
      const { name, last_name, phone, carrera,email} = data;

      const body = `
     <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="es-ES">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			font-size: 75%;
			line-height: 0;
		}

		@media (max-width:765px) {
			.desktop_hide table.icons-outer {
				display: inline-table !important;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style><!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
</head>

<body class="body" style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-bottom: 1px solid #1c3483; border-left: 1px solid #1c3483; border-radius: 0; border-right: 1px solid #1c3483; border-top: 3px solid #1c3483; color: #000000; width: 745px; margin: 0 auto;" width="745">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 25px; padding-left: 35px; padding-right: 35px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="text_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="font-family: sans-serif">
																	<div class style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #1c3483; line-height: 1.5;">
																		<p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;"><strong><span style="word-break: break-word; font-size: 24px;">Nuevo alumno registrado</span></strong></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="text_block block-2" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="font-family: sans-serif">
																	<div class style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #000; line-height: 1.5;">
																		<p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;">Datos del Alumno:<br><br><strong>Nombre:&nbsp; </strong>${name}</p>
																		<p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;"><strong>Apellido:&nbsp; </strong>${last_name}</p>
																		<p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;"><strong>Carrera:&nbsp; &nbsp;</strong>${carrera}</p>
																		<p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;"><strong>Celular:&nbsp; &nbsp; </strong>${phone}</p>
																		<p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;"><strong>Email:&nbsp; &nbsp; &nbsp; </strong>${email}</p>
																		<p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 18px;">&nbsp;</p>
																		<p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;">Para consultar la lista de Alumnos ve a este <span style="word-break: break-word; color: #1e40af;"><strong><a href="https://strapi.adminpardo.fun/admin" target="_blank" style="text-decoration:underline;color:#1e40af;" rel="noopener">enlace</a></strong></span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1c3483; border-bottom: 3px solid transparent; border-left: 3px solid transparent; border-radius: 0; border-right: 3px solid transparent; border-top: 3px solid transparent; color: #000000; width: 745px; margin: 0 auto;" width="745">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 30px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center" style="line-height:10px">
																	<div style="max-width: 186px;"><img src="https://josepardo.edu.pe/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdau2qsvtr%2Fimage%2Fupload%2Fv1709672778%2FComponent_1_3_0b199b3630.png&w=1200&q=75" style="display: block; height: auto; border: 0; width: 100%;" width="186" alt title height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-top:10px;">
																<div style="color:#fff;direction:ltr;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;font-size:13px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:19.5px;">
																	<p style="margin: 0;"><a target="_blank" href="https://maps.app.goo.gl/CTQGbct4D4Zjcaue9" style="text-decoration: underline; color: #fff;" rel="noopener">Av. Grau 620 Lima 13 La Victoria, Peru</a><a href="https://goo.gl/maps/fALkhoQtfETCnD7y6" target="_blank" style="text-decoration: none; color: #fff;" rel="noopener"></a></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#fff;direction:ltr;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;font-size:13px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:19.5px;">
																	<p style="margin: 0;"><a rel="noreferrer" href="mailto:admisionpardo@jpardo.edu.pe" style="text-decoration: underline; color: #fff;">admisionpardo@jpardo.edu.pe</a></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-top:5px;">
																<div style="color:#fff;direction:ltr;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;font-size:13px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:19.5px;">
																	<p style="margin: 0;"><a rel="noreferrer" href="tel:(01) 3304428" style="text-decoration: underline; color: #fff;">(01) 3304428</a></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-top:5px;">
																<div style="color:#fff;direction:ltr;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
																	<p style="margin: 0;"><strong>www.josepardo.edu.pe</strong></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 745px; margin: 0 auto;" width="745">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; line-height: 0;">
														<tr>
															<td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																<table class="icons-outer" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-table;">
																	<tr></tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
      `;

      return body;
    },
  });

  return plugin;
};
