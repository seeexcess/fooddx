import classes from "./Footer.module.scss"

function Footer() {
  return (
    <section className={classes.footer}>
      <div className={`${classes.footer__container} ${classes.container}`}>
        Footer
      </div>
    </section>
  )
}

export default Footer