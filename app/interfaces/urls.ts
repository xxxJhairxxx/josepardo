interface PagesUrl {
  data: PagesUrlData[]
}

interface PagesUrlData {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  label: string
  url: string
  sitemap: boolean
}
