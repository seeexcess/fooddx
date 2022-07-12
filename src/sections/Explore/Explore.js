import classes from "./Explore.module.scss"

import { useContext } from "react"
import { Context } from "../../Context"

import { Meal } from "../../components"

function Explore() {
  const {allMeal} = useContext(Context)
  console.log(allMeal)

  return (
    <section className={classes.explore}>
      <div className={`${classes.explore__container} ${classes.container}`}>
        <h2 className={classes.explore__heading}>Explore our foods</h2>
        <div className={classes.explore__desc}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
          </p>
        </div>
        <div className={classes.explore__mealBox}>
          {
            allMeal.map((meal) => (
              <Meal key={meal.id} meal={meal}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Explore