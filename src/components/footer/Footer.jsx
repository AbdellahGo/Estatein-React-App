import React, { useContext, useRef } from 'react'
import { container, padding_x } from '../../classes'
import { message, send, desktopLogo } from '../../assets'
import { footerData } from '../../demoData/data'
import { useNavigate } from 'react-router-dom'
const Footer = ({ setAlert }) => {
  const { pagesLinks, copyright: { text1, text2, socialMedia }, links } = footerData
  const navigate = useNavigate()
  const emailInput = useRef()
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  const handleNavigate = (page) => {
    navigate(`${page}`)
  }
  const handleSubmit = (e) => {
    const checkEmail = emailRegex.test(emailInput.current.value)
    e.preventDefault()
    if (checkEmail) {
      setAlert(true)
      setTimeout(() => setAlert(false), 1000)
      emailInput.current.value = ''
    }
  }

  return (
    <>
      <footer className='footer text-white xxl:py-[100px] xl:py-80 py-50'>
        <div className={`${container} ${padding_x}`}>
          <div className='flex lg:flex-row flex-col md:gap-80 gap-50'>
            <div className='flex flex-col xxl:gap-30 lg:gap-24 gap-20 xxl:w-[538px] lg:w-[326px] sm:w-[357px] w-full'>
              <img src={desktopLogo} alt="desktopLogo" className='xxl:w-[160px] w-[113px] xxl:h-48 h-34' />
              <form className='xxl:w-[423px] lg:w-[305px] sm:w-[357px] w-full'>
                <div className='flex items-center xxl:gap-10 gap-6 xxl:rounded-12 rounded-8 border-1 border-grey-15 bg-grey-08 xxl:py-18 py-14 xxl:px-24 px-20'>
                  <label htmlFor="#email">
                    <img src={message} alt="message icon" className='xxl:w-24 w-20 xxl:h-24 h-20' />
                  </label>
                  <input ref={emailInput} type="email" id="email" placeholder='Enter Your Email' className='text-grey-60 flex-1 outline-none bg-grey-08 xxl:text-18 text-14 font-medium' />
                  <button type='submit' onClick={handleSubmit}>
                    <img src={send} alt="send icon" className='xxl:w-30 w-24 xl:h-30 h-24' />
                  </button>
                </div>
              </form>
            </div>
            <div className='flex flex-wrap xxl:gap-[90px] xl:gap-[84px] lg:gap-x-[107px] md:gap-x-[46px] sm:gap-x-[10%] lg:gap-y-[30px] gap-y-[20px] text-white'>
              {links.map((_, i) => (
                <div key={i} className={`md:w-fit sm:w-[45%] w-full Mmd:pt-20 ${i > 1 ? 'Mmd:border-t-1 border-grey-15' : ''} ${i > 0 ? 'Msm:border-t-1 border-grey-15' : ''} `}>
                  <h3 className='xxl:text-20 lg:text-18 text-16 text-grey-60 font-medium'>{pagesLinks[i].page}</h3>
                  <div className='flex flex-col xxl:gap-20 gap-16 xxl:mt-30 mt-24'>
                    {links[i].map(({ id, content, link }) => (
                      <a key={id} href={`#${link}`} className='xxl:text-18 lg:text-16 text-14 font-medium block'
                        onClick={() => handleNavigate(pagesLinks[i].pageLink)}>{content}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <div className='text-white bg-grey-10'>
        <div className={`${container} ${padding_x} flex lg:flex-row flex-col-reverse justify-between Mlg:gap-20 items-center xxl:py-16 md:py-12 py-20`}>
          <div className='flex lg:flex-row Mlg:justify-center xxl:gap-38 lg:gap-20 gap-10 lg:py-10'>
            <p className='xxl:text-18 text-14 font-medium'>{text1}</p>
            <p className='xxl:text-18 text-14 font-medium'>{text2}</p>
          </div>
          <div className='flex Mlg:justify-center xxl:py-10 xxl:gap-10 gap-8'>
            {socialMedia.map(({ id, icon, socialLink }) => (
              <a key={id} href={socialLink} target='_blank' className='block xxl:p-14 lg:p-10 p-20 bg-grey-08 rounded-full'>
                <img src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer