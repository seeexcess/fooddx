import classes from "./Meal.module.scss"

import { FaShoppingBasket } from "react-icons/fa";

function Meal({meal}) {
  return (
    <div className={classes.meal}>
      <img src={meal.url} alt={meal.title} className={classes} />
      <div>
        <h2>{meal.title}</h2>
        <p>Time: {meal.processTime} Minutes</p>
      </div>
      <p>${meal.price}</p>
      <button className={`${classes.btn} ${classes.meal__btn}`}>
        Order Now <FaShoppingBasket />
      </button>
    </div>
  )
}

export default Meal