import BookingForm from "./BookingForm"
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"
import times from './availableTimes'


export default function BookingPage() {

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

    function handleForm(e) {
        e.preventDefault()
    }

    return (

        <>

            <Header />

            <BookingForm  form={form} handleChange={handleChange} handleForm={handleForm}/>

            <Footer />

        </>
    )
}