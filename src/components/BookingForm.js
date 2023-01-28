import { useState } from "react"

export default function BookingForm(props) {



    return (

        <>



            <section id="booking-form">

                <div className="container-fluid">

                    <div className="row">

                        <div className="col " >


                            
                            <div className="row" style={{ background: "#495E57", color: "#f4ce14" }}>  <h2 className="text-center  p-3">Book A Table</h2></div>


                            <div className="d-flex justify-content-center mt-5">

                                <form onSubmit={props.handleForm}>


                                    <label className="form-label" htmlFor="date">Choose date</label>
                                    <input className="form-control" type="date" id="date" name="date" value={props.form.date}
                                        onChange={props.handleDate} />

                                    <label className="form-label" htmlFor="res-time">Choose time</label>
                                    <select className="form-select" id="res-time" name="time" value={props.form.time} onChange={props.handleChange}>

                                        {props.availableTimes.map((time, index) => <option key={index}>{time}</option>)}

                                    </select>

                                    <label className="form-label" htmlFor="guests">Number of guests</label>
                                    <input className="form-control" type="number" placeholder="1" min="1" max="10" id="guests" name="guests"
                                        value={props.form.guests} onChange={props.handleChange} />



                                    <label className="form-label" htmlFor="occasion">Occasion</label>

                                    <select className="form-select" id="occasion" value={props.form.occasion} name="occasion" onChange={props.handleChange}>
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

            </div>

        </>
    )
}