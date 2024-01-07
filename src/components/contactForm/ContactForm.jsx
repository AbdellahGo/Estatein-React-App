import React, { useRef, useState } from 'react'
import { contactFormData } from '../../demoData/data'
import SectionHeader from '../sectionHeader/SectionHeader'
import { container, margin_top, margin_top2, padding_x, paragraph_classes } from '../../classes'

const ContactForm = ({ setConnect }) => {
    const [isEmpty, setIsEmpty] = useState(false)
    const [isAgree, setIsAgree] = useState(false)
    const [checkBox, setCheckBox] = useState(false)
    const { title, description, inputsList1, inputsList2 } = contactFormData
    const inputs = useRef([])

    const handleSendMessage = (e) => {
        e.preventDefault()
        const inputsList = inputs.current
        for (let i = 0; i < inputsList.length; i++) {
            if (!inputsList[i].value) {
                setIsEmpty(true)
            } else {
                setIsEmpty(false)
                setConnect(true)
                setTimeout(() => setConnect(false), 1000)
                inputsList[i].value = ''
            }
        }

    }

    return (
        <div className={`contact-form ${margin_top} ${container} ${padding_x} text-white`} id='contact_form'>
            <SectionHeader title={title} description={description} />
            <form className={`${margin_top2} flex flex-col xxl:gap-50 lg:gap-30 gap-20 xxl:p-[100px] lg:p-80 p-20 border-1 border-grey-15 rounded-12`}>
                {isEmpty && (
                    <p className='bg-grey-10 p-10 rounded-8 border-1 border-grey-15 xxl:text-20 text-16 font-semibold'>Please fill out the fields to submit</p>
                )}
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xxl:gap-50 lg:gap-30 gap-20'>
                    {inputsList1.map(({ id, type, label, placeholder }) => (
                        <div key={id} className='flex flex-col xxl:gap-16 gap-14'>
                            <label htmlFor={id} className='xxl:text-20 text-16 font-semibold'>{label}</label>
                            <input ref={(el) => inputs.current[id - 1] = el} type={type} placeholder={placeholder} className='border-1 border-grey-15 rounded-8 bg-grey-10 
                                xxl:py-24 py-16 px-20 xxl:text-18 text-14 text-grey-40 font-medium outline-none'/>
                        </div>
                    ))}
                </div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xxl:gap-50 lg:gap-30 gap-20'>
                    {inputsList2.map(({ id, type, label, placeholder, options }) => (
                        <div key={id} className='flex flex-col xxl:gap-16 gap-14'>
                            <label htmlFor={id} className='xxl:text-20 text-16 font-semibold'>{label}</label>
                            {id === 4 ? (
                                <input ref={(el) => inputs.current[id - 1] = el} type={type} placeholder={placeholder} className='border-1 border-grey-15 rounded-8 bg-grey-10 
                                xxl:py-24 py-16 px-20 xxl:text-18 text-14 text-grey-40 font-medium outline-none'/>
                            ) : (
                                <select className='border-1 border-grey-15 rounded-8 bg-grey-10 xxl:py-24 py-16 px-20 xxl:text-18 text-14 text-grey-40 font-medium h-full outline-none'>
                                    {options.map(({ id, value, text }) => (
                                        <option key={id} value={value}>{text}</option>
                                    ))}
                                </select>
                            )}
                        </div>
                    ))}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="textarea" className='font-semibold xxl:text-20 text-16'>Message</label>
                    <textarea ref={(el) => inputs.current[4] = el} id="textarea" placeholder='Enter your Message here..'
                        className='outline-none mt-16 rounded-8 bg-grey-10 border-1 border-grey-15 xxl:py-24
                            py-16 px-20 xxl:text-18 text-14 font-medium text-grey-40 xxl:h-[170px] lg:h-[120px] h-[90px]'/>
                </div>
                <div className='flex lg:gap-50 gap-20 justify-between items-center sm:flex-row flex-col'>
                    <div className='flex gap-10 '>
                        <div className={`${checkBox ? 'p-[5px]' : 'p-0'} w-28 h-28 border-1 border-grey-15 rounded-[4px] cursor-pointer`}
                            onClick={() => setIsAgree(prev => !prev)}>
                            <span className={`block ${checkBox ? 'bg-purple-60' : 'bg-grey-10'} w-full h-full`}
                                onClick={() => setCheckBox((prev) => !prev)} />
                        </div>
                        <p className={`${paragraph_classes}`}>I agree with <span className='underline'>Terms of Use</span> and <span className='underline'>Privacy Policy</span></p>
                    </div>
                    <button disabled={isAgree ? false : true} type='submit' className='Msm:w-full xxl:py-18 py-14 xxl:px-[46px] px-[34px] bg-purple-60 xxl:text-18 text-14 font-medium rounded-8'
                        onClick={handleSendMessage}>Send Your Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm