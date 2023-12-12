import { Link, NavLink } from 'react-router-dom'
import { container, padding_x } from '../../classes'
import { xMark, bigGroupLines, desktopLogo, laptopLogo, mobileLogo, menu } from '../../assets'
import { pagesLinks } from '../../demoData/data'
import { useEffect, useRef, useState } from 'react'
// todo
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [logo, setLogo] = useState(desktopLogo);
  const handleMediaChange = () => {
    const isDesktop = window.matchMedia('(min-width: 1920px)').matches;
    const isMobile = window.matchMedia('(max-width: 767.98px)').matches;
    if (isMobile) {
      setLogo(mobileLogo);
    } else if (isDesktop) {
      setLogo(desktopLogo);
    } else {
      setLogo(laptopLogo);
    }
  };


  useEffect(() => {
    window.addEventListener('resize', handleMediaChange);
    handleMediaChange();

    return () => window.removeEventListener('resize', handleMediaChange);
  }, []);

  return (
    <nav className={`${container} fixed left-[50%] translate-x-[-50%] w-full z-[1000]`}>
      <div className='banner bg-grey-10'>
        <div className={`xxl:py-18 md:py-14 Mmd:flex justify-center items-center pt-40 pb-20 ${padding_x} text-center  relative`}
          style={{ background: `url(${bigGroupLines})` }}>
          <p className='xxl:text-18 md:text-14 text-12 text-white font-medium'>✨Discover Your Dream Property with Estatein
            <NavLink to='/properties' className='underline xxl:ml-10 ml-6'>Learn More</NavLink>
          </p>
          <div className='md:absolute md:top-[50%] md:right-[36px] md:translate-y-[-50%] Mmd:ml-[23px] p-4 rounded-full xxl:w-[32px] w-[26px] xxl:h-[32px] h-[26px]'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.10)' }}>
            <img src={xMark} alt="xMark icon" className='w-full h-full' />
          </div>
        </div>
      </div>
      <div className={`navigation-bar border-y-1 border-y-grey-15 ${padding_x} xxl:py-20 md:py-14 py-20 bg-grey-10
        flex justify-between items-center`}>
        <NavLink to='/'>
          <img src={logo} alt="logo" />
        </NavLink>
        <div className={`move-to-top-anime hidden bg-grey-10 Mmd:border-1 Mmd:border-grey-15 md:flex 
          xxl:w-[62%] xl:w-[62%] lg:w-[68%] md:w-[75%] Mmd:w-[350px] Mmd:h-[350px] 
          Mmd:px-20 Mmd:py-20 justify-between items-center md:flex-row flex-col  Mmd:absolute top-[115%] right-20 Mmd:rounded-10`}
          style={toggleMenu ? { display: 'flex' } : {}}>
          <ul className='flex md:flex-row flex-col Mmd:w-full xxl:gap-30 md:gap-24 gap-10 items-center text-white'>
            {pagesLinks.map(({ id, text, link }) => (
              <li key={id} className='Mmd:w-full'>
                <NavLink to={link} className='block Mmd:text-center Mmd:p-16 font-medium xxl:text-18 text-14 
                  xxl:rounded-10 md:rounded-8 rounded-10' onClick={() => setToggleMenu((prev) => prev === false)}>{text}</NavLink>
              </li>
            ))}
          </ul>
          <Link to='/contact' className='text-white border-1 border-grey-15 bg-grey-08 Mmd:block Mmd:w-full text-center
            rounded-10 xxl:px-24 md:px-20 p-16 xxl:py-14 md:py-12 font-medium xxl:text-18 text-14'
            onClick={() => setToggleMenu((prev) => prev === false)}>
            Contact Us</Link>
        </div>
        <div className='md:hidden block menu cursor-pointer' onClick={() => setToggleMenu((prev) => !prev)}>
          <img src={menu} alt="menu icon" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar