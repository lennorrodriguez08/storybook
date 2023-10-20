import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortDown, faCircleUser, faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Navbar = () => {

    const [isMenuActive, setIsMenuActive] = useState(false)

    // Onclick function to toggle on off the menu icon in mobile breakpoint
    const onClickMenu = e => {
        
        if (e.target.parentElement.classList.contains('menu-icon') || e.target.parentElement.parentElement.classList.contains('menu-icon')) {
            setIsMenuActive(true)
        }  

        if (e.target.parentElement.classList.contains('open-menu-icon') || e.target.parentElement.parentElement.classList.contains('open-menu-icon')) {
            setIsMenuActive(false)
        } 
    }

    return (
        <nav>
            <div className="container p-4 mx-auto">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="font-bold font-roboto-slab text-2xl text-sky-400">Storybook</h1>
                    </div>
                    <div className={ isMenuActive ? 'menu-icon open-menu-icon p-1.5 hidden max-sm:block text-xl leading-3 hover:cursor-pointer' : 'menu-icon p-1.5 hidden max-sm:block text-xl leading-3 hover:cursor-pointer' } onClick={onClickMenu}>
                        <FontAwesomeIcon className={ isMenuActive ? 'menu-icon open-menu-icon' : 'menu-icon' } icon={faBars} />
                    </div>
                    <div className={ !isMenuActive ? 'nav-list bg-white max-sm:hidden max-sm:absolute max-sm:top-[55px] max-sm:right-0 max-sm:bottom-0 max-sm:w-full' : 'nav-list bg-white max-sm:absolute max-sm:top-[55px] max-sm:right-0 max-sm:bottom-0 max-sm:w-full' }>
                        <ul className="flex max-sm:flex-col max-sm:px-4">
                            <li className="group relative">
                                <NavLink className='p-1.5 min-w-[130px] max-sm:min-w-[initial] rounded-md block hover:bg-sky-100'>
                                    <div className="flex gap-x-2 justify-center max-sm:justify-start">
                                        <span>Stories</span>
                                        <FontAwesomeIcon icon={faSortDown} />
                                    </div>
                                </NavLink>
                                <ul className="hidden absolute max-sm:relative group-hover:block text-center max-sm:text-left">
                                    <li>
                                        <NavLink to='/' className='p-1.5 min-w-[130px] max-sm:min-w-[initial] rounded-md block hover:bg-sky-100'>
                                            All Stories
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/' className='p-1.5 min-w-[130px] max-sm:min-w-[initial] rounded-md block hover:bg-sky-100'>
                                            Most Loved
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/' className='p-1.5 min-w-[130px] max-sm:min-w-[initial] rounded-md block hover:bg-sky-100'>
                                            Most Commented
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to='/' className='p-1.5 rounded-md block hover:bg-sky-100'>
                                    Storytellers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/' className='p-1.5 rounded-md block hover:bg-sky-100'>
                                    About Storybook
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/sign-in' className='p-1.5 rounded-md block hover:bg-sky-100'>
                                    <div className="flex gap-x-2 items-center">
                                        <span>Sign In</span>
                                        <FontAwesomeIcon icon={faCircleUser} />
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar