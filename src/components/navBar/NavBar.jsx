import { Link, NavLink } from 'react-router-dom'
import { container, padding_x } from '../../classes'
import { xMark, bigGroupLines, desktopLogo, laptopLogo, mobileLogo, menu } from '../../assets'
import { pagesLinks } from '../../demoData/data'
import { useEffect, useRef, useState } from 'react'

const NavBar = ({ setNavBarHeight }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [banner, setBanner] = useState(true)
  const [logo, setLogo] = useState(desktopLogo);
  const menuEl = useRef(null)
  const navBar = useRef(null)

  // ? Remove animation classes on screens larger than the mobile screen
  const removeAnimationClasses = () => {
    menuEl.current.classList.remove('move-to-left-anime')
    menuEl.current.classList.remove('move-to-right-anime')
  }
  // ? closing the Menu When the links is clicked
  const closeMenuWhenClickLink = () => {
    const BiggerScreens = window.matchMedia('(min-width: 768px)').matches;
    if (!BiggerScreens) {
      setToggleMenu((prev) => prev === false)
    }
  }
  // ? change logo Menu When the screen size change
  const handleMediaChange = () => {
    const isDesktop = window.matchMedia('(min-width: 1440px)').matches;
    const isLaptop = window.matchMedia('(min-width: 768px)').matches;
    const isMobile = window.matchMedia('(max-width: 767.98px)').matches;
    const navBarHeight = navBar.current.offsetHeight
    setNavBarHeight(navBarHeight)
    if (isMobile) {
      setLogo(mobileLogo);
    } else if (isDesktop) {
      setLogo(desktopLogo);
      removeAnimationClasses()
      setToggleMenu(false)
    } else if (isLaptop) {
      removeAnimationClasses()
      setLogo(laptopLogo);
      setToggleMenu(false)
    }
  };


  useEffect(() => {
    window.addEventListener('resize', handleMediaChange);
    handleMediaChange();
    return () => window.removeEventListener('resize', handleMediaChange);
  }, []);

  // ? Update navBar height when Banner state is False
  useEffect(() => {
    handleMediaChange();
  }, [banner])

  return (
    <nav ref={navBar} className={`fixed left-[50%] translate-x-[-50%] w-full z-[1000] border-y-1 border-y-grey-15 bg-grey-10`}>
      <div className={`banner ${banner ? 'block' : 'hidden'} bg-grey-10`}>
        <div className={`xxl:py-18 md:py-14 Mmd:flex sm:flex-row Msm:flex-col gap-10 justify-center items-center pt-40 pb-20 ${padding_x} text-center  relative`}
          style={{ background: `url(${bigGroupLines})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <p className='xxl:text-18 md:text-14 text-12 text-white font-medium'>✨Discover Your Dream Property with Estatein
            <NavLink to='/services' className='underline xxl:ml-10 ml-6'>Learn More</NavLink>
          </p>
          <div className='md:absolute md:top-[50%] md:right-[36px] md:translate-y-[-50%] Mmd:ml-[23px] p-4 rounded-full xxl:w-[32px] w-[26px] xxl:h-[32px] h-[26px]'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.10)' }} onClick={() => setBanner((prev) => prev === false)}>
            <img src={xMark} alt="xMark icon" className='w-full h-full' />
          </div>
        </div>
      </div>
      <div className={`${container}`}>
        <div className={`navigation-bar ${padding_x} xxl:py-20 md:py-14 py-20 bg-grey-10
          flex justify-between items-center`}>
          <NavLink to='/'>
            <img src={logo} alt="logo" />
          </NavLink>
          <div ref={menuEl} className={`menu ${toggleMenu ? 'move-to-left-anime' : 'move-to-right-anime'} flex bg-grey-10 Mmd:border-1 Mmd:border-grey-15 
            xxl:w-[62%] xl:w-[62%] lg:w-[68%] md:w-[75%] sm:w-[350px] Msm:w-[240px] Mmd:h-[350px] 
            Mmd:px-20 Mmd:py-20 justify-between items-center md:flex-row flex-col  Mmd:absolute ${banner ? 'top-[125%]' : 'top-[155%]'} right-20 Mmd:rounded-10`}
            style={toggleMenu ? { display: 'flex' } : {}}>
            <ul className='flex md:flex-row flex-col Mmd:w-full xxl:gap-30 md:gap-24 gap-10 items-center text-white'>
              {pagesLinks.map(({ id, text, link }) => (
                <li key={id} className='Mmd:w-full'>
                  <NavLink to={link} className='block Mmd:text-center Mmd:p-16 font-medium xxl:text-18 text-14
                    xxl:rounded-10 md:rounded-8 rounded-10' onClick={closeMenuWhenClickLink}>{text}</NavLink>
                </li>
              ))}
            </ul>
            <Link to='/contact' className='text-white border-1 border-grey-15 bg-grey-08 Mmd:block Mmd:w-full text-center
            rounded-10 xxl:px-24 lg:px-20 p-16 xxl:py-14 lg:py-12 font-medium xxl:text-18 text-14'
              onClick={closeMenuWhenClickLink}>
              Contact Us</Link>
          </div>
          <div className='md:hidden block menu-toggle cursor-pointer' onClick={() => setToggleMenu((prev) => !prev)}>
            <img src={menu} alt="menu icon" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar