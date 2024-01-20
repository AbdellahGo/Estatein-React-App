import React, { useEffect, useRef, useState } from 'react'
import { container, margin_top, padding_x, paragraph_classes } from '../../classes'
import SectionHeader from '../sectionHeader/SectionHeader'
import { propertyContactFormData } from '../../demoData/data'
import { whiteLocation } from '../../assets'

const PropertyContactForm = ({ selectedProperty, setSent }) => {
    const [noEmptyInputs, setNoEmptyInputs] = useState(0)
    const [isEmpty, setIsEmpty] = useState(false)
    const [isAgree, setIsAgree] = useState(false)
    const [checkBox, setCheckBox] = useState(false)
    const { title, description, inputsList } = propertyContactFormData
    const inputs = useRef([])

    const handleSendMessage = (e) => {
        e.preventDefault()
        setNoEmptyInputs(0)
        const inputsList = inputs.current
        for (let i = 0; i < inputsList.length; i++) {
            if (inputsList[i].value) {
                setNoEmptyInputs((prev) => prev = prev + 1)
            } else {
                setIsEmpty(true)
                break
            }
        }
    }
    useEffect(() => {
        const inputsList = inputs.current
        if (noEmptyInputs === inputsList.length) {
            setIsEmpty(false);
            setSent(true);
            setTimeout(() => {
                setSent(false);
                inputsList.forEach((input) => (input.value = ''));
            }, 1000);
        }
    }, [noEmptyInputs])




    return (
        <div className={`property-contact-form ${margin_top} ${container} ${padding_x} text-white`}>
            <div className='flex md:flex-row flex-col xxl:gap-[100px] lg:gap-80 gap-40'>
                <div className='md:w-[35%] w-full'>
                    <SectionHeader title={title} description={description} />
                </div>
                <form className='md:w-[65%] w-full xxl:p-50 lg:p-40 p-20 border-1 border-grey-15 rounded-12'>
                    {isEmpty && (
                        <p className='lg:mb-30 mb-20 bg-grey-10 p-10 rounded-8 border-1 border-grey-15 xxl:text-20 text-16 font-semibold'>Please fill out the fields to submit</p>
                    )}
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-30 gap-20'>
                        {inputsList.map(({ id, type, label, placeholder }) => (
                            <div key={id} className='flex flex-col xxl:gap-16 gap-14'>
                                <label htmlFor={id} className='xxl:text-20 text-16 font-semibold'>{label}</label>
                                <input ref={(el) => inputs.current[id - 1] = el} type={type} placeholder={placeholder} className='border-1 border-grey-15 rounded-8 bg-grey-10 
                                xxl:py-24 py-16 px-20 xxl:text-18 text-14 text-grey-40 font-medium outline-none'/>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col xxl:gap-16 gap-14 lg:mt-30 mt-20'>
                        <label htmlFor='property' className='xxl:text-20 text-16 font-semibold'>Selected Property</label>
                        <div className='flex justify-between items-center border-1 border-grey-15 rounded-8 bg-grey-10 xxl:py-24 py-16 px-20'>
                            <input readOnly type='text' placeholder={selectedProperty} className='bg-grey-10 xxl:text-18 flex-1 text-14 text-grey-40 font-medium outline-none' />
                            <img src={whiteLocation} alt="whiteLocation icon" />
                        </div>
                    </div>
                    <div className='flex flex-col lg:mt-30 mt-20 xxl:gap-16 gap-14'>
                        <label htmlFor="textarea" className='font-semibold xxl:text-20 text-16'>Message</label>
                        <textarea ref={(el) => inputs.current[4] = el} id="textarea" placeholder='Enter your Message here..'
                            className='outline-none mt-16 rounded-8 bg-grey-10 border-1 border-grey-15 xxl:py-24
                            py-16 px-20 xxl:text-18 text-14 font-medium text-grey-40 xxl:h-[170px] lg:h-[120px] h-[90px]'/>
                    </div>
                    <div className='flex lg:gap-50 gap-20 lg:mt-30 mt-20 justify-between items-center sm:flex-row flex-col'>
                        <div className='flex gap-10'>
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
        </div>
    )
}

export default PropertyContactForm