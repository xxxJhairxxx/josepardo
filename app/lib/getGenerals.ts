import { General } from '@/interfaces/general'
import { baseApi } from './baseApi'

export const getGenerals = async () => {
  try {
    const [
      { data: general }
    ] = await Promise.all([
      baseApi.get<General>('/general?populate=deep')
    ])

    return {
      general: general.data,
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}
