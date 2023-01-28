import Hero from "./Hero"
import Specials from "../Specials"
import { useState, useReducer } from "react"
import BookingPage from "./BookingPage"




export default function Main() {

    // const [availableTimes, setAvailableTimes] = useState([
    //     "17:00",
    //     "18:00",
    //     "19:00",
    //     "20:00",
    //     "21:00",
    //     "22:00",


    // ])

    const  theTimes =  [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "30:00"

    ]

   function initializeTimes(timess){

    return timess.map((time,index) =><option>{time}</option>)
   }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(theTimes))

    function updateTimes(availableTimes, action) {
        if(action.type === "01/28/2023") return ["19:00", "22:00"]
       if(action.type === "01/30/2023") return ["16:00", "20:00"]


        return availableTimes
    }





    return (

        <>

            <main>

                <Hero />

                <Specials />

                <BookingPage
                    availableTimes={availableTimes}
                    updateTimes={updateTimes}
                    dispatch ={dispatch}
                />

            </main>



        </>
    )
}