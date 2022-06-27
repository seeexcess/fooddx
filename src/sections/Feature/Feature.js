import classes from "./Feature.module.scss"

function Feature() {
  return (
    <section className={classes.feature}>
      <div className={`${classes.feature__container} ${classes.container}`}>
        Feature
      </div>
    </section>
  )
}

export default Feature