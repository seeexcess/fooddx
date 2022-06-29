import { FaCodepen } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

import classes from "./Footer.module.scss"

function Footer() {
  return (
    <section className={classes.footer}>
      <div className={`${classes.footer__container} ${classes.container}`}>
        <ul className={classes.footer__links}>
          <li><a href="#explore">Explore Our Foods</a></li>
          <li><a href="#ingredients">Ingredients</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        <div className={classes.footer__socials}>
          <a href="https://codepen.io/seeexcess" target="_blank" rel="noreferrer noopener">
            <FaCodepen />
          </a>
          <a href="https://github.com/seeexcess" target="_blank" rel="noreferrer noopener">
            <FaGithub />
          </a>
        </div>

        <p className={classes.footer__copy}>&copy; 2022. FoodDX. All rights reserved</p>
        <p className={classes.footer__design}>
          Figma design by <a href="https://linktr.ee/ChiranjitH" target="_blank" rel="noreferrer noopener">Chiranjit Hazarika</a>
        </p>
      </div>
    </section>
  )
}

export default Footer