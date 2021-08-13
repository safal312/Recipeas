import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Ingredients } from '../components/Ingredients';
import { Navbar } from '../components/Navbar'

export const Meal = () => {
    let imgStyle = {display: "block", textAlign:"center", maxHeight: "30em", margin: "2em auto"};
    let categoryStyle = {display: "inline-block", fontSize: "0.8em", marginRight:"0.5em", borderRadius:"3px", padding: "0.2em 0.5em", color:"black", background: "rgb(148, 235, 255)"}
    let linkStyle = {display:"inline-block", color: "#00695c", margin:"1em 1em 1em 0"}
    
    let { mealName } = useParams();
    const [meal, setMeal] = useState({})
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+ mealName);
            const data = await res.json();
            setMeal(data.meals[0]);
        }
        fetchData();
    }, [])

    return (
        <div>
            <Navbar homePage={false} />
                    
            <div className="container">
                <h1>{meal.strMeal}</h1>
                <h6 className="orange-text darken-4-text" style={{fontWeight: "500"}}>{meal.strArea}</h6>
                <img style={imgStyle} className="responsive-img" src={meal.strMealThumb} alt={meal.strMeal} />
                <div>
                    {meal.strSource && <a target="_blank" rel="noreferrer" className="orange-text darken-4-text" href={meal.strSource} style={linkStyle}>Source <i className="material-icons" style={{"fontSize": "15px"}}>call_made</i></a>}
                    {meal.strYoutube && <a target="_blank" rel="noreferrer" className="orange-text darken-4-text" href={meal.strYoutube} style={linkStyle}>Video Tutorial <i className="material-icons" style={{"fontSize": "15px"}}>call_made</i></a>}
                </div>
                {/* {meal.strCategory && <p key={meal.idMeal} style={categoryStyle}>{meal.strCategory}</p>} */}
                {meal.strTags && meal.strTags.split(",").map(cat => <p key={cat} className="teal darken-3 white-text" style={categoryStyle}>{cat}</p>)}
                <Ingredients meal={meal} />
                <h4 className="section-text">Instructions</h4>
                <p>{meal.strInstructions}</p>
            </div>
        </div>
    )
}
