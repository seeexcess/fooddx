import classes from "./Ingredients.module.scss"

function Ingredients() {
  return (
    <section className={classes.ingredients}>
      <div className={`${classes.ingredients__container} ${classes.container}`}>
        Ingredients
      </div>
    </section>
  )
}

export default Ingredients