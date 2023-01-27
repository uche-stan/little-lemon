import Header from "./Header"
import MealsList from "./MealsList"
import Counter from "./Counter"
import { useState, useRef } from "react"



export default function MyApp() {


    const [form, setForm] = useState({
        firstName: "",
        age: "",
        isValid: false,
        isValidAge: false,
    })

function validateForm(){

    return form.firstName && form.age

}

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

        if(form.firstName == "" || form.age == ""){

            alert("First name and Age is required")
        }
        else{

            alert(`My name is ${form.firstName} and I am ${form.age} years old`)
        }

    }



    return (

        <>
            <Header />
            <h1 className="text-center">My App </h1>

            <MealsList title="Meals List" />
            <Counter title="Counter" />

            <div className="container">
                <div className="row">

                    <div className="col-4">
                        <form className="" onSubmit={handleForm}>

                            <div className="mb-3">

                                <label className="form-label" htmlFor="fname">Name</label>
                                <input className="form-control" type="text" id="fname" name="firstName" value={form.firstName}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        setForm(prevForm => {

                                            return {
                                                ...prevForm,
                                                isValid: true,
                                            }
                                        })
                                    }}
                                />

                                {form.isValid && form.firstName == "" ? <span style={{ color: "red" }}>First Name is required</span> : null}

                            </div>

                            <div className="mb-3">

                                <label className="form-label" htmlFor="ages">Age</label>
                                <input className="form-control" type="number" id="ages" name="age" value={form.age}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        setForm(prevForm => {

                                            return {
                                                ...prevForm,
                                                isValidAge: true,
                                            }
                                        })
                                    }}
                                />
                                {form.isValidAge && form.age == "" ? <span style={{ color: "red" }}>Age is required</span> : null}
                            </div>



                            <button className="btn btn-primary" disabled={!validateForm()} >Send</button>


                        </form>
                    </div>


                </div>

            </div>


        </>
    )
}