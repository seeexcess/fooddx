import classes from "./Ingredients.module.scss"

import { Ingredient } from "../../components"

import { ingredientsData} from "../../data"

function Ingredients() {
  console.log(ingredientsData)
  return (
    <section className={classes.ingredients}>
      <div className={`${classes.ingredients__container} ${classes.container}`}>
        {
          ingredientsData.map((item) => (
            <Ingredient key={item.id} item={item}/>
          ))
        }
      </div>
    </section>
  )
}

export default Ingredients