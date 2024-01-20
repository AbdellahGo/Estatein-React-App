import { useEffect, useRef, useState } from "react"
import { container, margin_top, margin_top2, padding_x, paragraph_classes } from "../../classes"
import { propertiesFormData } from "../../demoData/data"
import SectionHeader from "../sectionHeader/SectionHeader"

const PropertiesForm = ({ setSent }) => {
  const [noEmptyInputs, setNoEmptyInputs] = useState(0)
  const [selectedContact, setSelectedContact] = useState(1)
  const [isEmpty, setIsEmpty] = useState(false)
  const [isAgree, setIsAgree] = useState(false)
  const [checkBox, setCheckBox] = useState(false)
  const inputs = useRef([])
  const { title, description, inputsList, preferredContact } = propertiesFormData
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
    <div className={`properties-form ${margin_top} ${container} ${padding_x} text-white`} id='#make_it_happen'>
      <SectionHeader title={title} description={description} />
      <form className={`${margin_top2} flex flex-col xxl:gap-50 lg:gap-30 gap-20 border-1 border-grey-15 rounded-12 xxl:p-[100px] lg:p-50 p-20`}>
        {isEmpty && (
          <p className='bg-grey-10 p-10 rounded-8 border-1 border-grey-15 xxl:text-20 text-16 font-semibold'>Please fill out the fields to submit</p>
        )}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xxl:gap-50 lg:gap-30 gap-20">
          {inputsList[0].map(({ id, label, text, type }) => (
            <div key={id} className='flex flex-col xxl:gap-16 gap-14'>
              <label htmlFor={id} className='xxl:text-20 text-16 font-semibold'>{label}</label>
              <input ref={(el) => inputs.current[id - 1] = el} type={type} placeholder={text} className='border-1 border-grey-15 rounded-8 bg-grey-10 
                    xxl:py-24 py-16 px-20 xxl:text-18 text-14 text-grey-40 font-medium outline-none'/>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xxl:gap-50 lg:gap-30 gap-20">
          {inputsList[1].map(({ id, label, options }) => (
            <div key={id} className='flex flex-col xxl:gap-16 gap-14'>
              <label htmlFor={id} className='xxl:text-20 text-16 font-semibold'>{label}</label>
              <select id={id} className='border-1 border-grey-15 rounded-8 bg-grey-10 xxl:py-24 py-16 px-20 xxl:text-18 text-14 text-grey-40 font-medium h-full outline-none'>
                {options.map(({ id, value, text }) => (
                  <option key={id} value={value}>{text}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="flex lg:flex-row flex-col xxl:gap-50 lg:gap-30 gap-20">
          <div className="lg:w-[50%] w-full flex flex-col xxl:gap-16 gap-14">
            <label htmlFor={inputsList[2].id} className='xxl:text-20 text-16 font-semibold'>{inputsList[2].label}</label>
            <select id={inputsList[2].id} className="border-1 border-grey-15 rounded-8 bg-grey-10 xxl:py-24 py-16 px-20 xxl:text-18 text-14 text-grey-40 font-medium h-full outline-none">
              {inputsList[2].options.map(({ id, text, value }) => (
                <option key={id} value={value}>{text}</option>
              ))}
            </select>
          </div>
          <div className="lg:w-[50%] w-full flex flex-col xxl:gap-16 gap-14">
            <h3 className="xxl:text-20 text-16 font-semibold">{preferredContact.label}</h3>
            <div className="grid sm:grid-cols-2 grid-cols-1 xl:gap-16 gap-14">
              {preferredContact.contact.map(({ id, text, icon }) => (
                <div onClick={() => setSelectedContact(id)} key={id} className="cursor-pointer flex gap-12 items-center border-1 border-grey-15 rounded-8 xxl:py-22 py-16 xxl:px-24 px-20">
                  <img src={icon} alt="icon" />
                  <p className={`${paragraph_classes} flex-1`}>{text}</p>
                  <div className={`${selectedContact === id ? 'bg-purple-60' : 'border-1 border-purple-60'} w-16 h-16 rounded-full`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="textarea" className='font-semibold xxl:text-20 text-16'>{inputsList[3].label}</label>
          <textarea ref={(el) => inputs.current[4] = el} id="textarea" placeholder={inputsList[3].text}
            className='outline-none mt-16 rounded-8 bg-grey-10 border-1 border-grey-15 xxl:py-24
                            py-16 px-20 xxl:text-18 text-14 font-medium text-grey-40 xxl:h-[170px] lg:h-[120px] h-[90px]'/>
        </div>
        <div className="flex lg:gap-50 gap-20 justify-between items-center sm:flex-row flex-col">
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

export default PropertiesForm