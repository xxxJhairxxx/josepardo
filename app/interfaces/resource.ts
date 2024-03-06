import { MetaSEO } from '.'

export interface Resource {
  data: ResourceData
}

export interface ResourceData {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
  page_url: PagesUrlData
  seo: MetaSEO
}
