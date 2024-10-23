import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openNav = () => {
        setIsOpen(!isOpen)
    }
const navItems = [
    {title:"Home", link:"/"},
    {title:"About", link:"/about"},
    {title:"Servises", link:"/services"},
    {title:"Contact", link:"/contact"}
]




  return (
    <nav className='bg-white shadow-lg '>
        <div className='container px-6'>
           <div className='flex justify-between items-center h-16'>
           <div>Logo</div>
            <ul className='md:flex justify-between gap-4 items-center hidden'>
                {navItems.map(function (item, index){
                    return (<li key={index}><a href={item.link}>{item.title}</a></li>)
                })}

            </ul>
           {isOpen? <button onClick={() => openNav()} className='md:hidden '><IoCloseSharp className='h-6 w-6 text-yellow-900'/></button> : <button onClick={() => openNav()} className='md:hidden '><GiHamburgerMenu className='h-6 w-6 text-yellow-900'/></button>}
           </div>
        </div>
        {isOpen && (<ul className='md:hidden py-4 flex flex-col gap-4 pl-6'>{navItems.map(function (item, index){
            return(<li key={index}><a href={item.link}>{item.title}</a></li>)
        })}</ul>)}
    </nav>
  )
}
export default Header