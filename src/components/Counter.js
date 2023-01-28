import { type } from "@testing-library/user-event/dist/type"
import { useReducer } from "react"

const reducer = (state, action) => {
    if (action.type === "buy food") return { money: state.money - 100 }
    if(action.type === "sell food") return {money: state.money + 250}

    return state;

}

export default function Counter(props) {


  
    const [state, dispatch] = useReducer(reducer, { money: "500" })

   function handleSales(){

    dispatch({type: "sell food"})
   }

    return (

        <>
            <h1>{props.title}</h1>

            <h4>Number of meals: 3 </h4>


            <h4>{state.money}</h4>

            <button onClick={() => dispatch({ type: "buy food" })}>Spend</button>
            <button onClick={handleSales}>Sell food</button>

        </>
    )
}