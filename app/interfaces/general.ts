import { Picture } from "./shared"

export interface General {
  data: GeneralData
}

export interface GeneralData {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  telefono: string
  direccion: string
  correo: string
  horario: string
  redes_sociales: SocialNetworks[]
  logo: Picture[]
}
export interface Logo {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: null
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: string
  updatedAt: string
}

export interface SocialNetworks {
  id: number
  tipo: string
  url: string
}
