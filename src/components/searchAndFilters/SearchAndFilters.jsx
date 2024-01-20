import { container, padding_x } from '../../classes'
import { search } from '../../assets'
import { searchAndFiltersData } from '../../demoData/data'
import { useRef, useState } from 'react'
import { useGetAutoCompleteQuery } from '../../redux/RTKApis/propertiesApi'
import SuggestedSearches from '../suggestedSearches/SuggestedSearches'
const SearchAndFilters = ({ handleChange, setSelectedSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const { filtersIcons, filtersList, filtersType } = searchAndFiltersData
    const { data, isLoading } = useGetAutoCompleteQuery(searchTerm)
    const inputText = useRef(null)
    if (isLoading) return 'loading'

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputText.current.value) {
            setSelectedSearch(inputText.current.value)
            inputText.current.value = ''
            setSearchTerm('')
        }
    }

    return (
        <div className={`search-and-filters lg:mt-[-52px] ${container} ${padding_x}`} id='search_and_Filter'>
            <form className='xxl:px-[148px] lg:px-[90px]' onSubmit={handleSubmit}>
                <div className='relative flex items-center Msm:flex-wrap lg:gap-50 gap-20 xxl:p-20 lg:p-16 p-10 border-1 border-grey-15 rounded-12 grey-box-shadow bg-grey-08'>
                    <input ref={inputText} type="text" placeholder='Search For A Property'
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='block text-grey-40 bg-grey-08 xxl:text-24 lg:text-20 text-16 font-medium flex-1 Msm:p-10 outline-none' />
                    <button type='submit'
                        className='flex items-center xl:w-[17%] lg:w-[25%]  bg-purple-60 xxl:rounded-10 rounded-8 Msm:mx-auto
                            xxl:px-24 xxl:py-18 px-20 py-14 text-white gap-8'>
                        <img src={search} alt="" />
                        <span className='md:block hidden xxl:text-18 text-14 font-medium'>Find Property</span>
                    </button>
                    {data?.suggestions.length > 0 && <SuggestedSearches inputText={inputText} setSearchTerm={setSearchTerm} setSelectedSearch={setSelectedSearch} suggestedSearchesList={data?.suggestions} />}
                </div>
            </form>
            <div className='xxl:mt-10 rounded-12 md:p-10 p-20 bg-grey-10 grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20'>
                {filtersList.map((filter, i) => (
                    <div key={i} className='xxl:rounded-12 lg:rounded-8 xxl:p-20 py-12 px-14 border-1 border-grey-15 bg-grey-08 flex'>
                        <img src={filtersIcons[i]} alt="icon" className='xxl:w-24 w-20 xxl:mr-10 mr-8' />
                        <select onChange={(ev) => handleChange(ev, i)}
                            className='xxl:pl-10 pl-8 border-l-1 outline-none border-grey-15 bg-grey-08 w-[90%] xxl:text-18 text-14 font-medium text-grey-60'>
                            <option value={i === 0 ? 'Oxford' : ''}>{filtersType[i]}</option>
                            {filter.map(({ id, text, value }) => (
                                <option key={id} value={value}>
                                    {text}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchAndFilters





{/* 

type:
Detached house
Farmhouse
Flat
End terrace house
Maisonette
Terraced house
Semi-detached house
Cottage
Detached bungalow

status:
for_sale
for_rent

city: 
Manchester
Liverpool
Wakefield
Oxford
Birmingham
Leeds

price range:
$100,000 - $300,000
$300,000 - $600,000
$600,000 - $800,000
$800,000 - $1,000,000
$1,000,000 - $2,000,000

size range:
100 - 300
300 - 450
450 - 650
650 - 880


One of the following and separated by comma for multiple values : 
flats
farms_land
terraced
semi_detached
detached
bungalow
park_home
offices
retail
industrial
hospitality
land

*/}