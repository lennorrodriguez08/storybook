import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortDown, faCircleUser, faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {

    const navList = document.querySelector('.nav-list')

    const onClickMenu = e => {
        
        if (e.target.parentElement.classList.contains('menu-icon') || e.target.parentElement.parentElement.classList.contains('menu-icon')) {
            navList.classList.toggle('max-sm:hidden')
        }
    }

    return (
        <nav>
            <div className="container p-4 mx-auto">
                <div className="flex justify-between items-start relative">
                    <div>
                        <h1 className="font-bold text-2xl text-sky-400">Storybook</h1>
                    </div>
                    <div className="menu-icon p-1.5 hidden max-sm:block text-xl leading-3 hover:cursor-pointer" onClick={onClickMenu}>
                        <FontAwesomeIcon className="menu-icon" icon={faBars} />
                    </div>
                    <div className="nav-list max-sm:hidden max-sm:absolute max-sm:top-10 max-sm:w-full">
                        <ul className="flex max-sm:flex-col">
                            <li className="group">
                                <NavLink className='p-1.5 min-w-[130px] max-sm:min-w-[initial] rounded-md block hover:bg-sky-100'>
                                    <div className="flex gap-x-2 justify-center max-sm:justify-start">
                                        <span className="font-roboto-condensed">Stories</span>
                                        <FontAwesomeIcon icon={faSortDown} />
                                    </div>
                                </NavLink>
                                <ul className="hidden group-hover:block text-center max-sm:text-left">
                                    <li>
                                        <NavLink to='/' className='p-1.5 rounded-md block hover:bg-sky-100'>
                                            All Stories
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/' className='p-1.5 rounded-md block hover:bg-sky-100'>
                                            Most Loved
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/' className='p-1.5 rounded-md block hover:bg-sky-100'>
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
                                <NavLink to='/' className='p-1.5 rounded-md block hover:bg-sky-100'>
                                    <div className="flex gap-x-2 items-center">
                                        <span className="font-roboto-condensed">Login</span>
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