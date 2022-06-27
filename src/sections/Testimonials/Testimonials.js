import classes from "./Testimonials.module.scss"

function Testimonials() {
  return (
    <section className={classes.testimonials}>
      <div className={`${classes.testimonials__container} ${classes.container}`}>
        Testimonials
      </div>
    </section>
  )
}

export default Testimonials