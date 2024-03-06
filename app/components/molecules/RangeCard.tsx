import Markdown from 'react-markdown'
import Button from '../atoms/Button'
import Range from '../atoms/Range'
import { useLanguageContext } from '@/context/language.context'
import { useGenerals } from '@/context/generals.context'

interface RangeProps {
  green?: boolean
  className?: string
}

const RangeCard = ({ green = false, className = '' }: RangeProps) => {
  const {
    multilang: {
      section_choose_debt: { title, text, list_text },
      section_live_debts: { label },
    },
    toggle,
  } = useLanguageContext()
  const {
    general: { phone },
  } = useGenerals()

  const titleSplit = title.split('*')

  return (
    <article className={`rangeCard ${green && 'rangeCardGreen'} ${className}`}>
      <div className='rangeCard-section-one'>
        <header>
          {' '}
          <h1>
            {titleSplit[0]} <strong>{titleSplit[1]}</strong>
          </h1>
        </header>
        <main>
          <Markdown>{green ? list_text : text}</Markdown>
        </main>
      </div>
      <div className='rangeCard-section-two'>
        <main>
          <Range className={green ? 'rangeGreen' : ''} />
          <Button url={toggle ? '/en/rate' : '/es/califica'}>{label}</Button>
        </main>
        <footer>
          <p className='rangeCard_textFooter'>
            {titleSplit[2]}{' '}
            <span>
              <a href={`tel:${phone}`}>{phone}</a>
            </span>
          </p>
        </footer>
      </div>
    </article>
  )
}

export default RangeCard
