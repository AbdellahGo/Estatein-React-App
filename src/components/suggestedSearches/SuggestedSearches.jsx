import React from 'react'

const SuggestedSearches = ({ suggestedSearchesList, setSelectedSearch, setSearchTerm, inputText }) => {

  const handleClick = (value) => {
    setSelectedSearch(value)
    setSearchTerm('')
    inputText.current.value = ''
  }

  return (
    <div className='suggested-searches absolute flex flex-col gap-10 z-40 h-[200px] overflow-y-scroll bg-grey-08 w-full left-0 p-20 mt-10 rounded-12 top-full text-white'>
      {suggestedSearchesList.map(({ value }, i) => (
        <p key={i}
        onClick={() => handleClick(value)}
          className='text-start hover:bg-grey-10 cursor-pointer xxl:text-18 text-14 font-medium p-10 border-1 rounded-8 border-grey-15'>{value}</p>
      ))}
    </div>
  )
}

export default SuggestedSearches