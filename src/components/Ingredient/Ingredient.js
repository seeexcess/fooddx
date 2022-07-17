import classes from "./Ingredient.module.scss"

function Ingredient({item}) {
  //const reverseClass = item.id % 2 === 0 ? 'reverse' : ''
  //const reverseStyle = { flexDirection: "rowReverse"}
  return (
    <div className={`${classes.ingredient} ${item.id % 2 === 0 ? classes.reverse : ''}`}>
      <img src={item.url} alt={item.title} className={classes.ingredient__img}/>
      <div className={classes.ingredient__section}>
        <h2 className={classes.ingredient__title}>{item.title}</h2>
        <p className={classes.ingredient__desc}>{item.description}</p>
        <button className={`${classes.btn} ${classes.ingredient__btn}`}>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Ingredient