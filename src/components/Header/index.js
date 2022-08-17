import { FiShoppingCart, FiUser, FiMenu } from 'react-icons/fi'
import { menu } from './menu.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const menuBerger = () => {
        setMobileMenu(!mobileMenu)
    }

    return (
        <header className="bg-[#fefcf9] sticky top-0 left-0 z-50">
            <div className=" container mx-auto px-4 ">
                <div className=" flex-wrap flex items-center justify-between py-3 md:py-5">
                    <div className="">
                        <a href="./"><h4 className="font-bold text-3xl">Parabot</h4></a>
                    </div>
                    <div className="hidden  md:block  md:space-x-12 text-lg font-semibold">
                        <ul className="flex gap-6">
                            {menu?.map((item, index) => (
                                <li key={index}>
                                    <Link to={item?.link}>{item?.title}</Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className=" flex items-center space-x-5">
                        <Link to="./"><FiShoppingCart size="22" /></Link>
                        <Link to="/login"><FiUser size="22" /></Link>
                        <p onClick={() => menuBerger()} className="block  md:hidden" ><FiMenu size="24" /></p>
                    </div>
                </div>

                {
                mobileMenu &&
                    <div className="md:hidden flex justify-center text-lg font-semibold">
                        <ul className="flex flex-col gap-1">
                            {menu?.map((item, index) => (
                                <li key={index}>
                                    <a href={item?.link}>{item?.title}</a>
                                </li>
                            ))}

                        </ul>
                    </div>
                }

            </div>
        </header>
    )
}

export default Nav;