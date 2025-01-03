import type { Schema, Attribute } from '@strapi/strapi';

export interface AdmisionAdminDestacados extends Schema.Component {
  collectionName: 'components_admision_admin_destacados';
  info: {
    displayName: 'AdminDestacados';
    description: '';
  };
  attributes: {
    CardBenefits: Attribute.Component<'admision.card-destacado', true>;
    titulo: Attribute.String;
    subtitulo: Attribute.String;
  };
}

export interface AdmisionAdmisionBanner extends Schema.Component {
  collectionName: 'components_admision_admision_banners';
  info: {
    displayName: 'AdmisionBanner';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    subtitulo: Attribute.String;
    texto: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface AdmisionAdmisionBlog extends Schema.Component {
  collectionName: 'components_admision_admision_blogs';
  info: {
    displayName: 'AdmisionBlog';
  };
  attributes: {
    titulo: Attribute.String;
    subtitulo: Attribute.String;
  };
}

export interface AdmisionAdmisionConvenios extends Schema.Component {
  collectionName: 'components_admision_admision_convenios';
  info: {
    displayName: 'AdmisionConvenios';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface AdmisionAdmisionEspecialidades extends Schema.Component {
  collectionName: 'components_admision_admision_especialidades';
  info: {
    displayName: 'AdmisionEspecialidades';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    subtitulo: Attribute.String;
    texto: Attribute.Text;
  };
}

export interface AdmisionAdmisionEstudiaConNosotros extends Schema.Component {
  collectionName: 'components_admision_admision_estudia';
  info: {
    displayName: 'AdmisionEstudiaConNosotros';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    subtitulo: Attribute.String;
    image: Attribute.Media;
    Modalidad: Attribute.Component<'admision.razones', true>;
    texto: Attribute.RichText;
  };
}

export interface AdmisionAdmisionForm extends Schema.Component {
  collectionName: 'components_admision_admision_forms';
  info: {
    displayName: 'AdmisionForm';
    description: '';
  };
  attributes: {
    nombre: Attribute.Component<'admision.input-admision'>;
    apellido: Attribute.Component<'admision.input-admision'>;
    carrera: Attribute.Component<'admision.input-admision'>;
    celular: Attribute.Component<'admision.input-admision'>;
    messages: Attribute.JSON;
    titulo: Attribute.String;
    subtitulo: Attribute.String;
    email: Attribute.Component<'email.email'>;
  };
}

export interface AdmisionAdmisionTestimonios extends Schema.Component {
  collectionName: 'components_admision_admision_testimonios';
  info: {
    displayName: 'AdmisionTestimonios';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    subtitulo: Attribute.String;
    Cardtestimonios: Attribute.Component<'admision.cardtestimonios', true>;
  };
}

export interface AdmisionCardDestacado extends Schema.Component {
  collectionName: 'components_admision_card_destacados';
  info: {
    displayName: 'CardDestacado';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    titulo: Attribute.String;
  };
}

export interface AdmisionCardtestimonios extends Schema.Component {
  collectionName: 'components_admision_cardtestimonios';
  info: {
    displayName: 'Cardtestimonios';
    description: '';
  };
  attributes: {
    imagen: Attribute.Media;
    comentario: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 210;
      }>;
    nombre: Attribute.String;
    ocupacion: Attribute.String;
  };
}

export interface AdmisionGaleriaDeImagenes extends Schema.Component {
  collectionName: 'components_admision_galeria_de_imagenes';
  info: {
    displayName: 'Galeria de Imagenes';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    subtitulo: Attribute.String;
  };
}

export interface AdmisionInputAdmision extends Schema.Component {
  collectionName: 'components_admision_input_admisions';
  info: {
    displayName: 'input admision';
  };
  attributes: {
    name: Attribute.String;
    label: Attribute.String;
  };
}

export interface AdmisionRazones extends Schema.Component {
  collectionName: 'components_admision_razones';
  info: {
    displayName: 'Razones';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    descripcion: Attribute.Text;
    logo: Attribute.Media;
  };
}

export interface CardEspecialidadCardEspecialidad extends Schema.Component {
  collectionName: 'components_card_especialidad_card_especialidads';
  info: {
    displayName: 'CardEspecialidad';
  };
  attributes: {};
}

export interface EmailEmail extends Schema.Component {
  collectionName: 'components_email_emails';
  info: {
    displayName: 'email';
  };
  attributes: {
    name: Attribute.String;
    label: Attribute.String;
  };
}

export interface ErrorMessagesMensajesDeError extends Schema.Component {
  collectionName: 'components_error_messages_mensajes_de_errors';
  info: {
    displayName: 'Mensajes de Error';
  };
  attributes: {};
}

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
    copyright: Attribute.String;
    lbl_siguenos: Attribute.String;
  };
}

export interface GeneralAnuncios extends Schema.Component {
  collectionName: 'components_general_anuncios';
  info: {
    displayName: 'Anuncios';
    description: '';
  };
  attributes: {
    imagen: Attribute.Media;
  };
}

export interface GeneralWhatsapp extends Schema.Component {
  collectionName: 'components_general_whatsapps';
  info: {
    displayName: 'Whatsapp';
    description: '';
  };
  attributes: {
    enlace_invitacion: Attribute.String;
    whatsap_numero: Attribute.String;
    mensaje_wsp: Attribute.Text;
    placeholder: Attribute.String;
    title_chat: Attribute.String;
  };
}

export interface InformacionInformacion extends Schema.Component {
  collectionName: 'components_informacion_informacions';
  info: {
    displayName: 'informacion';
    description: '';
  };
  attributes: {
    direccion: Attribute.String;
    telefono: Attribute.String;
    correo: Attribute.String;
    horario: Attribute.String;
    logo: Attribute.Media;
    redes_sociales: Attribute.Component<'social-networks.redes-sociales', true>;
  };
}

export interface LabelsLabels extends Schema.Component {
  collectionName: 'components_labels_labels';
  info: {
    displayName: 'labels';
    description: '';
  };
  attributes: {
    lbl_enviar: Attribute.String;
    lbl_leer_mas: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social'>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SocialNetworksRedesSociales extends Schema.Component {
  collectionName: 'components_social_networks_redes_sociales';
  info: {
    displayName: 'Redes Sociales';
  };
  attributes: {
    tipo: Attribute.Enumeration<
      ['facebook', 'instagram', 'youtube', 'twitter', 'x', 'tiktok']
    >;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'admision.admin-destacados': AdmisionAdminDestacados;
      'admision.admision-banner': AdmisionAdmisionBanner;
      'admision.admision-blog': AdmisionAdmisionBlog;
      'admision.admision-convenios': AdmisionAdmisionConvenios;
      'admision.admision-especialidades': AdmisionAdmisionEspecialidades;
      'admision.admision-estudia-con-nosotros': AdmisionAdmisionEstudiaConNosotros;
      'admision.admision-form': AdmisionAdmisionForm;
      'admision.admision-testimonios': AdmisionAdmisionTestimonios;
      'admision.card-destacado': AdmisionCardDestacado;
      'admision.cardtestimonios': AdmisionCardtestimonios;
      'admision.galeria-de-imagenes': AdmisionGaleriaDeImagenes;
      'admision.input-admision': AdmisionInputAdmision;
      'admision.razones': AdmisionRazones;
      'card-especialidad.card-especialidad': CardEspecialidadCardEspecialidad;
      'email.email': EmailEmail;
      'error-messages.mensajes-de-error': ErrorMessagesMensajesDeError;
      'footer.footer': FooterFooter;
      'general.anuncios': GeneralAnuncios;
      'general.whatsapp': GeneralWhatsapp;
      'informacion.informacion': InformacionInformacion;
      'labels.labels': LabelsLabels;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'social-networks.redes-sociales': SocialNetworksRedesSociales;
    }
  }
}
