import classes from "./Savings.module.scss"

function Savings() {
  return (
    <section className={classes.savings}>
      <div className={`${classes.savings__container} ${classes.container}`}>
        <div className={classes.savings__textBox}>
          <span>1287+</span>
          <p>savings</p>
        </div>

        <div className={classes.savings__textBox}>
          <span>5786+</span>
          <p>savings</p>
        </div>

        <div className={classes.savings__textBox}>
          <span>1440+</span>
          <p>savings</p>
        </div>

        <div className={classes.savings__textBox}>
          <span>7110+</span>
          <p>savings</p>
        </div>
      </div>
    </section>
  )
}

export default Savings