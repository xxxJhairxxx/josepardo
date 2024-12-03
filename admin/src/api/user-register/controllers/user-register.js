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


        
        const { titulo,Banner, subtitulo,Footer, text, boton,enlace_whatsap_comunity } = await strapi
          .service("api::user-register.user-register")
          .find({
            ...sanitizedQueryParams
          });

        const emailTemplate = {
          subject: "Únete a nuestra comunidad - José Pardo",
          text: "",
          html: `
          <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>New email template 2024-11-26</title> <!--[if (mso 16)]><style type="text/css"> a {text-decoration: none;}  </style><![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]><noscript> <xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> </noscript>
<![endif]--><!--[if !mso]><!-- --><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"><!--<![endif]--><style type="text/css">.rollover:hover .rollover-first { max-height:0px!important; display:none!important;}.rollover:hover .rollover-second { max-height:none!important; display:block!important;}.rollover span { font-size:0px;}u + .body img ~ div div { display:none;}#outlook a { padding:0;}span.MsoHyperlink,span.MsoHyperlinkFollowed { color:inherit; mso-style-priority:99;}a.es-button { mso-style-priority:100!important; text-decoration:none!important;}a[x-apple-data-detectors],#MessageViewBody a { color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important;}
.es-desk-hidden { display:none; float:left; overflow:hidden; width:0; max-height:0; line-height:0; mso-hide:all;}@media only screen and (max-width:600px) {.es-m-p40t { padding-top:40px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-p-default { } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } .es-header-body p { } .es-content-body p { } .es-footer-body p { } .es-infoblock p { } h1 { font-size:50px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left }
 h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:50px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body a { font-size:12px!important }
 .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important }
 .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important; display:block } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:20px!important; padding:10px 20px 10px 20px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important }
 .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .h-auto { height:auto!important } .es-text-8020 .es-text-mobile-size-72, .es-text-8020 .es-text-mobile-size-72 * { font-size:72px!important; line-height:150%!important } .es-text-8020 .es-text-mobile-size-48, .es-text-8020 .es-text-mobile-size-48 * { font-size:48px!important; line-height:150%!important } .es-text-5322 .es-text-mobile-size-13, .es-text-5322 .es-text-mobile-size-13 * { font-size:13px!important; line-height:150%!important } }@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
</style>
 </head> <body class="body" style="width:100%;height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"><div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#314B70"><!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#314B70"></v:fill> </v:background><![endif]--><table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#314B70"><tr><td valign="top" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important"><tr>
<td align="center" style="padding:0;Margin:0"><table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" background="https://elvgftn.stripocdn.email/content/guids/CABINET_dd9759b09de82ede623cff0b42f718ca19c0a4f85f6337f81c705fd693708d47/images/simonleezftw1kvehgunsplash_1_1.png" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#07021F;background-repeat:no-repeat;width:600px;background-image:url(https://elvgftn.stripocdn.email/content/guids/CABINET_dd9759b09de82ede623cff0b42f718ca19c0a4f85f6337f81c705fd693708d47/images/simonleezftw1kvehgunsplash_1_1.png);background-position:center bottom" role="none"><tr>
<td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px"><table width="100%" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td align="left" style="padding:0;Margin:0;width:560px"><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td align="center" class="es-text-5322" style="padding:0;Margin:0;padding-bottom:25px;letter-spacing:5px"><p class="es-text-mobile-size-13" style="Margin:0;mso-line-height-rule:exactly;font-family:Manrope, sans-serif;line-height:19.5px;letter-spacing:0;color:#FFFFFF;font-size:13px">${subtitulo}</p> </td></tr><tr>
<td align="center" style="padding:0;Margin:0;font-size:0"><img src="https://elvgftn.stripocdn.email/content/guids/3539ddb0-f929-4a65-ab49-513b483120e7/images/logo.png" alt="" width="100" class="adapt-img" height="96" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"></td></tr></table></td></tr></table></td></tr> <tr><td align="left" class="es-m-p40t" data-custom-paddings="true" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:10px;padding-bottom:10px"><table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td align="center" valign="top" style="padding:0;Margin:0;width:560px"><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr>
<td align="center" class="es-text-8020" style="padding:0;Margin:0;padding-bottom:25px;padding-right:25px;padding-left:40px"><h1 class="es-text-mobile-size-72" style="Margin:0;font-family:Righteous, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:72px;font-style:normal;font-weight:bold;line-height:86.4px;color:#FFFFFF"></h1> <h1 style="Margin:0;font-family:Righteous, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:60px;font-style:normal;font-weight:bold;line-height:72px;color:#FFFFFF"><span class="es-text-mobile-size-48" style="font-size:48px">${titulo}</span></h1><h1 class="es-text-mobile-size-72" style="Margin:0;font-family:Righteous, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:72px;font-style:normal;font-weight:bold;line-height:86.4px;color:#FFFFFF"></h1></td></tr><tr>
<td align="center" class="es-m-p0r es-m-p0l" style="padding:0;Margin:0;padding-right:50px;padding-bottom:40px;padding-left:50px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Manrope, sans-serif;line-height:27px;letter-spacing:0;color:#FFFFFF;font-size:18px">${text}</p></td></tr> <tr><td align="center" style="padding:0;Margin:0;padding-top:20px;padding-bottom:40px"><!--[if mso]><a href="${enlace_whatsap_comunity}" target="_blank" hidden> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="${enlace_whatsap_comunity}" style="height:46px; v-text-anchor:middle; width:179px" arcsize="50%" stroke="f" fillcolor="#f1c232"> <w:anchorlock></w:anchorlock> <center style='color:#03355e; font-family:Righteous, sans-serif; font-size:14px; font-weight:400; line-height:14px; mso-text-raise:1px'>${boton}</center>
 </v:roundrect></a><![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#2CB543;background:#f1c232;border-width:0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a href="${enlace_whatsap_comunity}" target="_blank" class="es-button es-button-1675432559559" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#03355e;font-size:14px;padding:15px 40px;display:inline-block;background:#f1c232;border-radius:30px;font-family:Righteous, sans-serif;font-weight:normal;font-style:normal;line-height:16.8px;width:auto;text-align:center;letter-spacing:5px;mso-padding-alt:0;mso-border-alt:10px solid #f1c232">${boton}</a> </span><!--<![endif]--></td></tr></table></td></tr></table></td></tr> <tr>
<td align="left" background="https://elvgftn.stripocdn.email/content/guids/CABINET_beef27fd72bf04f5ec347afb3c9242a7a6cb9763af3e70ce8481235882b7a5b6/images/rectangle_5445.png" class="esdev-adapt-off" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:30px;background-image:url(https://elvgftn.stripocdn.email/content/guids/CABINET_beef27fd72bf04f5ec347afb3c9242a7a6cb9763af3e70ce8481235882b7a5b6/images/rectangle_5445.png);background-repeat:no-repeat;background-position:center center" data-custom-paddings="true"><table cellpadding="0" cellspacing="0" class="esdev-mso-table" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px"><tr>
<td valign="top" class="esdev-mso-td" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"><tr><td align="left" style="padding:0;Margin:0;width:172px"><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr>
<td align="right" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="${enlace_whatsap_comunity}" style="mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:18px"><img src="https://elvgftn.stripocdn.email/content/guids/3539ddb0-f929-4a65-ab49-513b483120e7/images/whatsapp3diconfreepng.png" alt="" width="103" class="adapt-img" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" height="103"></a> </td></tr></table></td></tr></table></td><td class="es-m-w0" style="padding:0;Margin:0;width:20px"></td><td valign="top" class="esdev-mso-td" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" align="right" class="es-right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"><tr>
<td align="left" style="padding:0;Margin:0;width:368px"><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Manrope, sans-serif;line-height:27px;letter-spacing:0;color:#FFFFFF;font-size:18px">${Banner.text}</p> <p style="Margin:0;mso-line-height-rule:exactly;font-family:Manrope, sans-serif;line-height:27px;letter-spacing:0;color:#FFFFFF;font-size:18px"><a target="_blank" href="${enlace_whatsap_comunity}" style="mso-line-height-rule:exactly;text-decoration:underline;color:#fdfefd;font-size:18px">${Banner.enlace_texto}</a></p></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table>
 <table cellpadding="0" cellspacing="0" align="center" class="es-footer" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top"><tr><td align="center" style="padding:0;Margin:0"><table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-footer-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#07021F;width:600px"><tr><td align="left" data-custom-paddings="true" style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:40px;padding-top:40px"><table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr>
<td align="left" style="padding:0;Margin:0;width:560px"><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td align="center" style="padding:0;Margin:0;font-size:0"><table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr>
<td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><a target="_blank" href="https://www.facebook.com/JosePardo.Oficial" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://elvgftn.stripocdn.email/content/assets/img/social-icons/logo-gray/facebook-logo-gray.png" alt="Fb" title="Facebook" height="24" width="24" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"></a> </td>
<td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><a target="_blank" href="https://www.tiktok.com/@instituto_jose_pardo" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://elvgftn.stripocdn.email/content/assets/img/social-icons/logo-gray/tiktok-logo-gray.png" alt="Tt" title="TikTok" height="24" width="24" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"></a></td>
 <td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><a target="_blank" href="https://www.instagram.com/instituto_jose_pardo/" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://elvgftn.stripocdn.email/content/assets/img/social-icons/logo-gray/instagram-logo-gray.png" alt="Ig" title="Instagram" height="24" width="24" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"></a></td>
 <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://www.youtube.com/@institutojosepardo4903" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://elvgftn.stripocdn.email/content/assets/img/social-icons/logo-gray/youtube-logo-gray.png" alt="Yt" title="Youtube" height="24" width="24" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"></a></td></tr></table></td></tr><tr><td align="center" style="padding:20px;Margin:0;font-size:0"><table border="0" width="65%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td></tr></table></td></tr> <tr>
<td align="center" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" class="es-menu es-table-not-adapt" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr class="links"><td align="right" valign="top" width="100.00%" style="Margin:0;border:0;padding-top:10px;padding-bottom:10px;padding-right:15px;padding-left:15px"><a target="_blank" href="https://www.google.com/maps/place/INSTITUTO+SUPERIOR+TECNOLOGICO+-+JOSE+PARDO/@-12.0592896,-77.0266029,19z/data=!4m6!3m5!1s0x9105c8bc404487c7:0x8d8c80dab45b5cfd!8m2!3d-12.0593795!4d-77.0260396!16s%2Fg%2F1211j6d2?entry=tts" style="mso-line-height-rule:exactly;text-decoration:none;font-family:Manrope, sans-serif;display:block;color:#CCCCCC;font-size:12px;font-weight:normal">Av. Grau 620 Lima 13 La Victoria, Peru</a></td></tr></table></td></tr> <tr>
<td align="center" style="Margin:0;padding-bottom:25px;padding-top:10px;padding-right:80px;padding-left:80px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Manrope, sans-serif;line-height:18px;letter-spacing:0;color:#CCCCCC;font-size:12px">${Footer.text}</p></td></tr><tr><td align="center" class="es-infoblock made_with" style="padding:0;Margin:0;font-size:0"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=confirm_email_1&utm_content=your_experience_is_very_important" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://elvgftn.stripocdn.email/content/guids/3539ddb0-f929-4a65-ab49-513b483120e7/images/component_1_3_0b199b3630_1.png" alt="" width="160" class="adapt-img" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" height="44"></a></td></tr></table> </td></tr></table></td></tr>
</table></td></tr></table></td></tr></table></div></body></html>
`
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
