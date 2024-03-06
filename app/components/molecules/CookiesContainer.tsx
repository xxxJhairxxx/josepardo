import React, { useEffect, useState } from 'react'
import { useLanguageContext } from '@/context/language.context'

const CookiesContainer = () => {
  const [hideContainer, setHideContainer] = useState<any>(false)
  const [loading, setLoading] = useState(true)

  const [activateModalDocument, setActivateModalDocument] =
    useState<Boolean>(false)

  const closeContainer = () => {
    setHideContainer(true)
    localStorage.setItem('hide_ck', 'true')
  }

  useEffect(() => {
    const hideCk = localStorage.getItem('hide_ck')
    setHideContainer(hideCk === 'true')
    setLoading(false)
  }, [hideContainer])

  const { multilang } = useLanguageContext()

  if (loading) {
    return <></>
  }

  if (!hideContainer) {
    return (
      <div className={`cookiesContainer ${hideContainer ? 'alt' : ''}`}>
        <div className='cookiesContainer-cont'>
          <p>
            {multilang.section_cookies.text}
            <span onClick={() => setActivateModalDocument(true)}>
              {multilang.section_cookies.label_info}
            </span>
          </p>
          <button className='cookiesContainer-btn' onClick={closeContainer}>
            {multilang.section_cookies.label_accept}
          </button>
        </div>
      </div>
    )
  }

  return null
}

export default CookiesContainer
