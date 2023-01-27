import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"
import times from './availableTimes'

export default function BookingForm() {

    const [form, setForm] = useState({

        date: "",
       time: "",
        guests: "",
        occasion: "",

    })

    

    function handleChange(e){
    
        setForm(prevForm =>{

            return {
                ...prevForm,
                [e.target.name]: e.target.value,
            }
        })

    }

    function handleForm(e){
       e.preventDefault()
    }

    return (

        <>

            <Header />

            <section id="booking-form">

                <div className="container-fluid">

                    <div className="row">

                        <div className="col " >

                        

                          <div className="row" style={{background:"#495E57", color: "#f4ce14"}}>  <h2 className="text-center  p-3">Book A Table</h2></div>


                            <div className="d-flex justify-content-center mt-5">

                                <form  onSubmit={handleForm}>


                                    <label className="form-label" htmlFor="res-date">Choose date</label>
                                    <input className="form-control" type="date" id="res-date" name="date" value={form.date}
                                    onChange = {handleChange} />

                                    <label className="form-label" htmlFor="res-time">Choose time</label>
                                    <select className="form-select" id="res-time" name="time" value={form.time}
                                    
                                    onChange={handleChange}>
                                        {times.map((time, index) =><option key={index}>{time}</option>)}
                                    </select>

                                    <label className="form-label" htmlFor="guests">Number of guests</label>
                                    <input className="form-control" type="number" placeholder="1" min="1" max="10" id="guests" name="guests"
                                    value={form.guests} onChange={handleChange} />



                                    <label className="form-label" htmlFor="occasion">Occasion</label>

                                    <select className="form-select" id="occasion" value={form.occasion} name="occasion" onChange={handleChange}>
                                        <option>Birthday</option>
                                        <option>Anniversary</option>
                                        <option>Engagement</option>
                                    </select>
                                    <input className="btn btn-warning my-5" type="submit" value="Make Your reservation" />


                                </form>

                            </div>


                        </div>



                    </div>

                </div>



            </section>

           <div className="">
           <Footer />
           </div>

        </>
    )
}