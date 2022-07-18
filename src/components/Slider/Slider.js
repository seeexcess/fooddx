import { useState } from "react"

import classes from "./Slider.module.scss"

function Slider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // const slideBb = {
  //   backgroundImage: `url(${slides[currentIndex].imgUrl})`
  // }
  const slideBtn = { color: 'red' }
  
  function toPrev() {
    const isFirst = currentIndex === 0
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1 
    setCurrentIndex(newIndex)
  }

  function toNext() {
    const isLast = currentIndex === slides.length - 1
    const newIndex = isLast ? 0 : currentIndex + 1 
    setCurrentIndex(newIndex)
  }

  function toSlide(slideIndex) {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className={classes.slider}>
      <div className={classes.slider__prev} onClick={toPrev}>Previous</div>
      <div className={classes.slider__next} onClick={toNext}>Next</div>
      <div className={classes.slider__slide}>
        <img src={slides[currentIndex].imgUrl} alt="" />
        <p>"{slides[currentIndex].testimonial}"</p>
      </div>
      <div className={classes.slider__switchbox}>
        {/* {
          slides.map((slide, slideIndex) => (
            <div 
              key={slideIndex} 
              className={classes.slider__switch}
              onClick={() => toSlide(slideIndex)}
            >
              <span> ● </span>
            </div>
          ))
        } */}
      </div>
    </div>
  )
}

export default Slider