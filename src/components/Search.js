import React from 'react';
import { useState } from 'react';
import { MealCard } from './MealCard';

export const Search = () => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState([]);

    const handleChange = async (e) => {
        setLoading(true);
        setSearch(e.target.value);
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+e.target.value);
        const data = await res.json();
        setMeals(data.meals);
        setLoading(false);
    }

    return (
        <div className="container">
            <input type="text" placeholder="Search for a dish" value={search} onChange={handleChange} />
            {loading && <div className="progress">
                <div className="indeterminate"></div>
            </div>}
            {!loading &&
            <div className="row">
                {meals && meals.map(meal => <MealCard key={meal.idMeal} meal={meal} />)}
            </div>}
        </div>
    )
}
