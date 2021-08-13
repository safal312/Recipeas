import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Ingredients = ({meal}) => {
    let measures = []

    for (let i = 0; i < 20; i++) {
        let element = {}
        let ingredientCount = "strIngredient" + (i + 1);
        let measureCount = "strMeasure" + (i + 1);

        if(meal[ingredientCount]) element['ingredient'] = meal[ingredientCount];
        if(meal[measureCount]) element['measure'] = meal[measureCount]; 
        
        if(meal[ingredientCount] || meal[measureCount]) measures.push(element);
    }

    return (
        <div style={{margin:"3em 0"}}>
            <h4 className="section-text">Ingredients</h4>
            <table>
                <thead>
                <tr>
                    <th>Ingredients</th>
                    <th>Measure</th>
                </tr>
                </thead>

                <tbody>
                    {measures.map(measure => {
                        return <tr key={uuidv4()}>
                            <td key={uuidv4()}>{measure.ingredient}</td>
                            <td key={uuidv4()}>{measure.measure}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
