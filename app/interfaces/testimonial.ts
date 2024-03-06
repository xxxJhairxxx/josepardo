import { MetaSEO, Picture } from './shared'

export interface Testimonial {
  data: TestimonialData
}

export interface TestimonialData {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  testimonial_characteristics: TestimonialCharacteristics[]
  testimonial_banner_prin: TestimonialBanner
  testimonial_history: TestimonialHistory
  testimonial_reviews: TestimonialReviews
  page_url: PagesUrlData
  testimonial_video: TestimonialVideo
  seo: MetaSEO
}

//Testimonial Banner//
export interface TestimonialBanner {
  id: number
  title: string
  text: string
  img: Picture
  testimonial_characteristics: TestimonialCharacteristics[]
}

export interface TestimonialVideo {
  id: number
  title: string
  link_video: string
}

//Testimonial Characteristics//
export interface TestimonialCharacteristics {
  id: number
  title: string
  number: string
}

//Testimonial History//
export interface TestimonialHistory {
  id: number
  title_one: string
  title_two: string
  text: string
  img_desktop: Picture
  img_tablet: Picture
  img_mobile: Picture
}

//Testimonial Reviews//
export interface TestimonialReviews {
  id: number
  title: string
  list: TestimonialReviewsList[]
}
export interface TestimonialReviewsList {
  id: number
  name: string
  text: string
}
