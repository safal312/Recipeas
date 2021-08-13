import React from 'react'
import { Link } from 'react-router-dom'

export const MealCard = ({meal}) => {
    return (
        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{meal.strMeal}</span>
                {/* <p><a target="_blank" rel="noreferrer" href={meal.strYoutube}>Video Tutorial</a></p> */}
            </div>
            <div className="card-action orange-text darken-4-text" style={{fontWeight: "500"}}>
                <Link to={"/"+meal.strMeal}>Read More</Link>
                <a href={meal.strYoutube} target="_blank" rel="noreferrer">Video Tutorial</a>
            </div>
          </div>
        </div>
    )
}
