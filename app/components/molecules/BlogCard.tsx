import { useLanguageContext } from '@/context/language.context'
import { Picture } from '@/interfaces'
import Link from 'next/link'
import Markdown from 'react-markdown'
import Image from 'next/image'

interface blogProps {
  title: string
  description: string
  slug: string
  url: string
  img_thumb: Picture
}

const BlogCard = ({ title, description, slug, url, img_thumb }: blogProps) => {
  const truncateDescription = (text: string | undefined, maxLength: number) => {
    return text
      ? text.slice(0, maxLength) + (text.length > maxLength ? '...' : '')
      : ''
  }
  const {
    multilang: { label_read },
    toggle,
  } = useLanguageContext()

  return (
    <Link
      href={`${toggle ? '/en/' : '/es/'}${url}/${slug}`}
      className='blogCard'
    >
      <div className='blogCard-content'>
        <h3>
          {title.split('/')[0]} <br /> {title.split('/')[1]}
        </h3>
        <Markdown>{truncateDescription(description, 160)}</Markdown>
        <span>{label_read}</span>
      </div>
      <figure>
        <Image width={450} height={450} alt={title} src={img_thumb.url} />
      </figure>
    </Link>
  )
}

export default BlogCard
