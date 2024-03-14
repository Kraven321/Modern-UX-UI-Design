"use client"
import Image from "next/image"
import Logo from '../../public/assets/Logo.svg'
import User from '../../public/assets/User.svg'
import Menu from '../../public/assets/Menu.svg'
import { useEffect, useState } from "react"

const navLinks = [
  {name:"Features"},
  {name:"Pricing"},
  {name:"Enterprise"},
  {name:"Careers"},
]
const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      // Verifica se o clique não foi dentro do menu
      if (menuOpen && !event.target.closest(".menu-container")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex itemc-center">
        <Image alt="logo" src={Logo} priority/>

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p className="text-[#36485c] font-medium" key={index}>{item.name}</p>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485c] pr-[56px]">Open an account</p>
        <div className="flex items-center gap-x-2">
          <Image alt="user profile" src={User} priority/>
          <span className="hidden font-medium text-[#36485c] lg:block">Sign In</span>
        </div>

        <Image src={Menu} alt="menu" priority className="lg:hidden" onClick={toggleMenu}/>

        {menuOpen && (
        <div className="absolute top-[70px] right-[20px] bg-white p-4 shadow-lg rounded-lg">
          <ul>
            {navLinks.map((item, index) => (
              <li key={index}>
                <a href="#" className="text-[#36485c] font-medium block py-2 hover:text-blue-500">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </nav>
  )
}

export default Navbar
