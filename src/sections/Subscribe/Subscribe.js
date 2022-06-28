import classes from "./Subscribe.module.scss"

function Subscribe() {
  return (
    <section className={classes.subscribe}>
      <div className={`${classes.subscribe__container} ${classes.container}`}>
        <h2 className={classes.subscribe__heading}>
          Hurry up! Subscribe our newsletter and get 25% Off
        </h2>
        <p className={classes.subscribe__desc}>
          Limited time offer for this month. No credit card required.
        </p>
        <form action="#" className={classes.subscribe__form}>
          <input type="email" placeholder="Email Address Here" className={classes.subscribe__input} />
          <button className={`${classes.subscribe__btn} ${classes.btn}`}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe