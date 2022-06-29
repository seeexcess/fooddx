import classes from "./Faq.module.scss"
import { faqData } from "../../data"

function Faq() {
  console.log(faqData)
  return (
    <section className={classes.faq}>
      <div className={`${classes.faq__container} ${classes.container}`}>
        <h2 className={classes.faq__heading}>Frequently Asked Questions</h2>
        <div className={classes.faq__box}>
          {
            faqData.map(({title, description}) => {
              return (
                <div>
                  <h3><span>~</span>{title}</h3>
                  <p>{description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Faq