export interface TYPE_FIELD_PROPS {
    name: RegExp
    last_name: RegExp
    carrera: RegExp
    phone: RegExp
    email: RegExp
    captcha: RegExp
  }
  
  // Expresiones regulares para validaciones de formulario
  
  export const TYPE_FIELD: TYPE_FIELD_PROPS = {
    name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,30}$/,
    last_name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,30}$/,
    carrera: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/,
    phone: /^(\(\d{3}\)\s?|\d{3}-)?\d{3}-\d{4}$/,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    captcha: /^[\w]+$/i,
  }
  
  export interface InitialFormState {
    name: string
    last_name: string
    carrera: string
    phone: string
    email: string
    captcha: string
  }
  
  export interface InitialFormErrors {
    name: string
    last_name: string
    carrera: string
    phone: string
    email: string
    captcha: string
  }
  
  // Estado inicial del formulario
  
  export const initialFormState: InitialFormState = {
    name: '',
    last_name: '',
    carrera: '',
    phone: '',
    email: '',
    captcha: '',
  }
  
  // Campos del formulario que no pueden estar vacíos
  
  export const initialFormErrors: InitialFormErrors = {
    name: '',
    last_name: '',
    carrera: '',
    phone: '',
    email: '',
    captcha: '',
  }
  