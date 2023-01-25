import fastDelivery from './assets/icons_assets/fast-delivery-icon.png'
import delivery from './assets/icons_assets/delivery-icon.png'
import lemonDesert from './assets/icons_assets/lemon dessert.jpg'
import greekSalad from './assets/icons_assets/greek salad.jpg'
import bruchetta from './assets/icons_assets/bruchetta.svg'

export default function Specials() {

    return (
        <>

            <section id="specials">

                <div className=" specials ">
                    <h2>Specials</h2>
                    <button className="btn btn-warning">Online menu</button>
                </div>


                {/* <!-- Specials --> */}



                <div id="specials" className="my-5 container-fluid  ">


                    <div className="d-flex flex-column align-items-center flex-sm-row justify-content-center gap-4 ">

                        <div className=" row card d-flex flex-row flex-sm-column  ">

                            <div className="img-box  order-2 order-sm-1  "><img src={greekSalad} alt="Greek Salad"
                                className="card-img-bottom  pt-4" />
                            </div>


                            <div className="card-body  order-1 order-sm-2 col-2 col-sm-12 ">

                                <div className="card-title  d-flex flex-column flex-sm-row justify-content-evenly">
                                    <p>Greek Salad</p>
                                    <p>$12.99</p>

                                </div>

                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, nulla</p>

                                <div><button type="button" className="btn btn-warning">Order a delivery <img
                                    src={fastDelivery} alt="bicycle" width="40px" /></button> <span></span></div>


                            </div>
                        </div>

                        <div className=" row card d-flex flex-row flex-sm-column ">

                            <div className="img-box order-2 order-sm-1  "><img src={bruchetta}
                                alt="Bruchetta" className="card-img-bottom  pt-4" /></div>


                            <div className="card-body  order-1 order-sm-2 col-2 col-sm-12 ">

                                <div className="card-title  d-flex flex-column flex-sm-row justify-content-evenly">
                                    <p>Bruchetta</p>
                                    <p>$5.00</p>

                                </div>

                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, nulla</p>

                                <div><button type="button" className="btn btn-warning">Order a delivery <img
                                    src={delivery} alt="bicycle" width="40px" /></button> <span></span></div>


                            </div>
                        </div>

                        <div className=" row card d-flex flex-row flex-sm-column  " >

                            <div className="img-box order-2 order-sm-1  "><img src={greekSalad}
                                alt="Lemon dessert" className="card-img-bottom  pt-4" /></div>


                            <div className="card-body  order-1 order-sm-2 col-2 col-sm-12 ">

                                <div className="card-title  d-flex flex-column flex-sm-row justify-content-evenly">
                                    <p>Lemon dessert</p>
                                    <p>$5.99</p>

                                </div>

                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, nulla</p>

                                <div><button type="button" className="btn btn-warning">Order a delivery <img
                                    src={fastDelivery} alt="bicycle" width="40px" /></button> <span></span></div>




                            </div>
                        </div>




                    </div>


                </div>


            </section>



        </>
    )
}