import classes from "./Meal.module.scss"

import { FaShoppingBasket } from "react-icons/fa";

function Meal({meal}) {
  const oldPrice = meal.price - 5
  return (
    <div className={classes.meal}>
      <img src={meal.url} alt={meal.title} className={classes.meal__img} />
      
      <h2 className={classes.meal__title}>{meal.title}</h2>
      <p className={classes.meal__time}>Time: {meal.processTime} Minutes</p>

      <p className={classes.meal__price}>
        <span className={classes.meal__newPrice}>${meal.price}</span>
        <span className={classes.meal__oldPrice}>${oldPrice}</span>
      </p>
      <button className={`${classes.btn} ${classes.meal__btn}`}>
        Order Now <FaShoppingBasket />
      </button>
    </div>
  )
}

export default Meal