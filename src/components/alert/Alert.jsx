import React from 'react'
import { container } from '../../classes'
import { bigGroupLines } from '../../assets'

const Alert = ({ content, navBarHeight }) => {
    return (
        <div className={`${container}  p-20 xxl:text-24 md:text-18 text-14 font-semibold bg-grey-10 border-grey-15 border-1 rounded-10 text-white fixed left-[50%] translate-x-[-50%] text-center z-[1000]`}
            style={{ top: `${navBarHeight + 30}px`, backgroundImage: `url(${bigGroupLines})`, backgroundRepeat: 'no-repeat' }}>
            {content}
        </div>
    )
}

export default Alert