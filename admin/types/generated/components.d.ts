import type { Schema, Attribute } from '@strapi/strapi';

export interface AdmisionAdminDestacados extends Schema.Component {
  collectionName: 'components_admision_admin_destacados';
  info: {
    displayName: 'AdminDestacados';
  };
  attributes: {
    CardDestacado: Attribute.Component<'admision.card-destacado', true>;
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
  };
  attributes: {
    titulo: Attribute.String;
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
    texto: Attribute.Text;
    image: Attribute.Media;
    Razones: Attribute.Component<'admision.razones', true>;
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
  };
}

export interface AdmisionAdmisionTestimonios extends Schema.Component {
  collectionName: 'components_admision_admision_testimonios';
  info: {
    displayName: 'AdmisionTestimonios';
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
  };
  attributes: {
    logo: Attribute.Media;
    numero: Attribute.String;
    titulo: Attribute.String;
  };
}

export interface AdmisionCardtestimonios extends Schema.Component {
  collectionName: 'components_admision_cardtestimonios';
  info: {
    displayName: 'Cardtestimonios';
  };
  attributes: {
    imagen: Attribute.Media;
    comentario: Attribute.Text;
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
      'informacion.informacion': InformacionInformacion;
      'labels.labels': LabelsLabels;
      'social-networks.redes-sociales': SocialNetworksRedesSociales;
    }
  }
}
