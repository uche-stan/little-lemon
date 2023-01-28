import restaurantfood from '../assets/icons_assets/restaurantfood.jpg'
import { Link } from 'react-router-dom'

export default function Hero() {


    return (

        <>
            <section id="hero">

                <div className="container-fluid">

                    <div className="row theRow">

                        <div className="col-12 col-sm-5  d-flex flex-column order-1 order-md-1 ">


                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>

                        </div>

                        <div className='col-6 col-sm-6 order-2 order-md-2 text-btn'>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                        </div>


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

                                <a href="/#booking-page" className='mt-5 btn'>Reserve a Table</a>
                            </div>

                        </div>


                    </div>

                </div>

            </section>

        </>
    )
}