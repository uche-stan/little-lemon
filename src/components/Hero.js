import restaurantfood from '../assets/icons_assets/restaurantfood.jpg'

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


                            <div>
                                <button className=' btn btn-reserve-a-table'>
                                    Reserve a Table
                                </button>
                            </div>


                        </div>



                        <div className="col-6  col-sm-7 order-3 order-md-3">

                            <img src={restaurantfood} alt="food service" />

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}