import { Locations, MetaSEO, Picture } from './shared'

export interface Homep {
  data: HomeData
}

export interface HomeData {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  home_banner: HomeBanner
  home_characteristics: HomeCharacteristicsSection[]
  home_programs_debts: HomePrograms
  home_video_middle: HomeVideoMiddle
  home_debt_negotiation: HomeDebtNegotiation
  home_get_debts: HomeGetDebts
  home_articles: HomeArticles
  localizations: Locations[]
  seo: MetaSEO
}

//Home Banner//
export interface HomeBanner {
  id: number
  title: string
  img_desktop: Picture
  img_tablet: Picture
  img_mobile: Picture
}

//Home Characteristics//
export interface HomeCharacteristicsSection {
  id: number
  name: string
  img: Picture
}
//Home Programs//
export interface HomePrograms {
  id: number
  title: string
  link_video: string
  text: string
  list_programs: string
}

//Home VideoMiddle//
export interface HomeVideoMiddle {
  id: number
  link_video: string
}

//Home DebtNegotiation//
export interface HomeDebtNegotiation {
  id: number
  title: string
  text: string
  img: Picture
}

//Home GetDebts//
export interface HomeGetDebts {
  id: number
  title: string
  text: string
  link_video: string
}

//Home Articles//
export interface HomeArticles {
  id: number
  title: string
  text_bottom: string
}
