import React, { useEffect, useState } from "react";

const Context = React.createContext()

function ContextProvider(props) {
  const [allMeal, setAllMeal] = useState([])

  const url = "https://raw.githubusercontent.com/seeexcess/MenuDB/gh-pages/MenuDB.json"

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllMeal(data))
  }, [])

  return (
    <Context.Provider value={{allMeal}}>
      {props.children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }