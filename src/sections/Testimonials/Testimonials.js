import classes from "./Testimonials.module.scss"

import { slidesData } from "../../data"
import { Slider } from "../../components"


function Testimonials() {
  return (
    <section className={classes.testimonials}>
      <div className={`${classes.testimonials__container} ${classes.container}`}>
        <div className={`${classes.testimonials__titleBox}`}>
          <h2 className={classes.testimonials__title}>Testimonials</h2>
        </div>

        <Slider slides={slidesData}/>
      </div>
    </section>
  )
}

export default Testimonials