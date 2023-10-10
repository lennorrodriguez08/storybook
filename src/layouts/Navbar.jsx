import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortDown, faCircleUser } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        <nav>
            <div className="container p-4 mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="font-bold text-2xl">Storybook</h1>
                    </div>
                    <div>
                        <ul className="flex">
                            <li className="p-3">
                                <NavLink>
                                    <div className="flex gap-x-2">
                                        <span className="font-roboto-condensed">Stories</span>
                                        <FontAwesomeIcon icon={faSortDown} />
                                    </div>
                                </NavLink>
                                <ul className="md:block hidden">
                                    <li>
                                        <NavLink to='/'>All Stories</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/'>Most Loved</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/'>Most Commented</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="p-3">
                                <NavLink to='/'>Storytellers</NavLink>
                            </li>
                            <li className="p-3">
                                <NavLink to='/'>About Storybook</NavLink>
                            </li>
                            <li className="p-3">
                                <NavLink to='/'>
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