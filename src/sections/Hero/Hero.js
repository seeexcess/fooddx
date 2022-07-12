import classes from "./Hero.module.scss"
import { FaAngleRight } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

function Hero(){
  return (
    <>
      <div className={classes.header__hero}>
        <div className={classes.header__text}>
          <h1 className={classes.header__heading}>
            Order food from favourite restaurants near you.
          </h1>
          <p className={classes.header__desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
          </p>
          <div className={classes.header__heroBtns}>
            <button className={`${classes.btn}`}>Order Now <FaShoppingBasket /></button>
            <button className={`${classes.btn}`}>Learn More <FaAngleRight /></button>
          </div>
        </div>
        <div className={classes.header__image}>
          <img src="https://github.com/seeexcess/MenuDB/blob/gh-pages/food.svg/?raw=true" alt="meal" />
        </div>
      </div>
    </>
  )
}

export default Hero