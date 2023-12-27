import React, { useState } from 'react'
import Button from '../button/Button'
import { paragraph_classes } from '../../classes'

const FAQList = ({ faqContainer, content }) => {
  const [isReadMore, setIsReadMore] = useState(null)
  return (
    <div ref={faqContainer}
      className="faq-list grid lg:grid-cols-3 md:grid-cols-2 xxl:gap-30 md:gap-20 gap-30">
      {content.map(({ id, title, desc }) => (
        <div key={id} className='xxl:p-50 xl:p-40 p-30 flex justify-between flex-col xxl:gap-30 xl:gap-24 gap-20 xxl:rounded-12 rounded-10 border-1 border-grey-15 bg-grey-08 text-white'>
          <h2 className='xxl:text-24 md:text-20 text-18 text-white'>{title}</h2>
          <p className={`${paragraph_classes}`}>{isReadMore === id ? desc : `${desc.substring(0, 90)}...`}</p>
          <button onClick={() => setIsReadMore(isReadMore === id ? null : id)}
                    className={`block xxl:py-18 py-14 px-20 xxl:rounded-10 rounded-8 xxl:text-18 text-14 font-medium bg-grey-08 border-grey-15 border-1 w-fit`}>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default FAQList