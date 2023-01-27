import restaurantfood from '../assets/icons_assets/restaurantfood.jpg'
import { Link } from 'react-router-dom'

export default function Hero() {


    return (

        <>


            <section id="hero">



                <div className="container-fluid hero">


                    <div className="row ">

                        <div className="col-6 hero-title ">
                            <div className="hero-item">

                                <h1>Little Lemon</h1>
                                <div>
                                    <h2 className="">Chicago</h2>


                                    <p>We are a family owned
                                        Meaterranean restaurant.
                                        focused on traditional recipes served with a modern twist.</p>
                                </div>

                                <Link to="/booking-form" className='mt-5 btn'>Reserve a Table</Link>
                            </div>

                        </div>



                        <div className="col-6">
                            <img src="../icons_assets/restauranfood.jpg" alt="photo" className="rounded-4 img-fluid  " />
                        </div>



                    </div>




                </div>




            </section>

        </>
    )
}