import classes from "./Header.module.scss"
import { Navbar } from "../../components/index"
import Hero from "../Hero/Hero"

function Header() {
  return (
    <header className={classes.header}>
      <div className={`${classes.header__container} ${classes.container}`}>
        <Navbar />
        <Hero />
      </div>
    </header>
  )
}

export default Header