import restaurantfood from '../assets/icons_assets/restaurantfood.jpg'

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

                                <a className="btn mt-5 " >Reserve a Table</a>
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