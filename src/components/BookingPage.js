import BookingForm from "./BookingForm"
import { useState } from "react"



export default function BookingPage(props) {

    const [form, setForm] = useState({

        date: "",
        time: "",
        guests: "",
        occasion: "",

    })



    function handleChange(e) {

        setForm(prevForm => {

            return {
                ...prevForm,
                [e.target.name]: e.target.value,
            }
        })

    }

    function handleDate(e) {

        setForm(prevForm => {

            return {
                ...prevForm,
                date: e.target.value,
            }
        })

        props.dispatch(
            {
                type: "01/30/2023",


            }
        )
    }

    function handleForm(e) {
        e.preventDefault()
    }

    return (

        <>



            <div id="booking-page">
                <BookingForm
                    form={form}
                    handleChange={handleChange}
                    handleForm={handleForm}
                    availableTimes={props.availableTimes}
                    updateTimes={props.updateTimes}
                    handleDate={handleDate}


                />


            </div>


        </>
    )
}