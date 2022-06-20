import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"

import classes from "./Navbar.module.scss";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  })

  function toggleMenu() {
    setOpenMenu((prevMenu) => !prevMenu)
  }

  useEffect(() => {
    const handleSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleSize)

    return () => window.removeEventListener('resize', handleSize)
  }, [])

  useEffect(() => {
    if(size.width > 768) {
      setOpenMenu(true)
    }
  }, [size.width, openMenu])

  return (
    <nav className={classes.header__nav}>
      <Link to="/"><span>Food</span><span>DX</span></Link>

      <div className={`${classes.header__navmenu} ${openMenu && size.width < 768 ? classes.isMenu : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <a href="#explore">Explore Foods</a>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        <button className={`${classes.btn} ${classes.header__btn}`}>
          1800 789 123
        </button>
      </div>

      <div className={classes.header__navtoggle}>
        {
          openMenu ? <BiMenuAltRight onClick={toggleMenu}/> : <AiOutlineClose onClick={toggleMenu} />
        }
      </div>
    </nav>
  )
}

export default Navbar