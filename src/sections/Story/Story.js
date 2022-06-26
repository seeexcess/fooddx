import { FaPlayCircle } from "react-icons/fa"

import classes from "./Story.module.scss"

function Story() {
  return (
    <section className={classes.story}>
      <div className={`${classes.story__container} ${classes.container}`}>
        <h2 className={classes.story__heading}>
          When a man's stomach is full it makes no difference whether he is rich or poor.
        </h2>
        <p className={classes.story__desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odiofinibus bibendum in sit amet leo. Mauris feugiat erat tellus.
        </p>
        <p className={classes.story__watch}><FaPlayCircle /> <span>Watch Our Story</span></p>
      </div>
    </section>
  )
}

export default Story