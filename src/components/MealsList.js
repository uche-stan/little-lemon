import { useState } from "react"

export default function MealsList(props){

    const todaysMeals = [
        {
            name: "beans", calories: "200", id: "1",
        },

        {
            name: "Rice", calories: "400", id: "2",
        },

        {
            name: "Pizza", calories: "500", id: "3",
        },
    ]

    const [meals, setMeals] = useState(todaysMeals)
    const todaysMeal = meals.map(meal => <li key={meal.id}>{meal.name} - {meal.calories}</li>)

    return (

        <>

        <h1>{props.title}</h1>

        <ul>{todaysMeal}</ul>
        
        </>
    )
}