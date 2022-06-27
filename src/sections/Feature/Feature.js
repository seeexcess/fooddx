import classes from "./Feature.module.scss"

function Feature() {
  return (
    <section className={classes.feature}>
      <div className={`${classes.feature__container} ${classes.container}`}>
        <h2 className={classes.feature__heading}>Baked fresh daily by bakers with passion.</h2>
        <button className={`${classes.feature__btn} ${classes.btn}`}>Learn More</button>
      </div>
    </section>
  )
}

export default Feature