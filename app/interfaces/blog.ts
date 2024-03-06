import { MetaSEO, Picture } from './shared'

export interface Blog {
  data: BlogData[]
}

export interface BlogData {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
  slug: string
  description: string
  description_two: string
  description_three: string
  text_head: string
  title_head: string
  id_slug: string
  validator_styles: string
  banner_prin: BlogBannerPrin
  img_thumb: Picture
  banner_two: BlogBannerTwo
  table_consolidation_negociation_head: BlogTableHead[]
  table_consolidation_negociation: BlogTable[]
  section_video: BlogVideo
  seo: MetaSEO
  rootPage: RootPage
  filter: string
}

export interface RootPage {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  label: string
  url: string
  sitemap: string
  locale: string
  localizations: any
}

//Blog Banner Prin//
export interface BlogBannerPrin {
  id: number
  title: string
  text_head: string
}

//Blog Banner Two//
export interface BlogBannerTwo {
  id: number
  title: string
  text: string
  img_desktop: Picture
  img_tablet: Picture
  img_mobile: Picture
}

//Blog Table//

export interface BlogTableHead {
  id: number
  title: string
}
export interface BlogTable {
  id: number
  characteristic: string
  consolidation: string
  negociation: string
}

//Blog Video//
export interface BlogVideo {
  id: number
  link_video: string
}
