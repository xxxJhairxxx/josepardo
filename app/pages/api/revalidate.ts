// import axios from 'axios'
// import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ): Promise<void> {
//   // Check for secret to confirm this is a valid request

//   //   console.log(process.env.SECRET_REVALIDATE_KEY,"hello")
//   //    if (req.headers.authorization !== process.env.SECRET_REVALIDATE_KEY) {
//   //       return res.status(401).json({ message: "Invalid token",token:process.env.SECRET_REVALIDATE_KEY });
//   //    }

//   try {
//     const responseEs = await axios.get(
//       `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/page-urls?locale=es&fields=url`
//     )
//     const menuEs = responseEs.data.data

//     await Promise.all([
//       res.revalidate('/'),
//       res.revalidate('/contact'),
//       res.revalidate('/gallery'),
//       res.revalidate('/faq'),
//       res.revalidate('/create-painting'),
//     ])

//     await res.revalidate('/')

//     return res.json({ revalidated: true })
//   } catch (err) {
//     return res.status(500).json({ message: 'Error revalidating' })
//   }
// }
