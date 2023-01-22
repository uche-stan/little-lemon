
import { BiChevronRight } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';




export default function Footer() {

    return (

        <>

            <footer id='footer'>




                <div className='footer-top bg-light'>
                    <div className='container '>
                        <div className='row'>



                            <div className="col-lg-4 col-md-4 footer-links text-start text-md-center">
                                <h4>Doormant Navigation</h4>
                                <div className='d-flex gap-3 justify-content-start  justify-content-md-center   align-items-center'>

                                    <ul>
                                        <li><i><BiChevronRight /></i> <a href="#">Home</a></li>
                                        <li><i><BiChevronRight /></i> <a href="#">About us</a></li>
                                        <li><i><BiChevronRight /></i> <a href="#">Menu</a></li>
                                        <li><i><BiChevronRight /></i> <a href="#">Reservations</a></li>
                                        <li><i><BiChevronRight /></i> <a href="#">order Online</a></li>
                                        <li><i><BiChevronRight /></i> <a href="#"> Login</a></li>
                                    </ul>

                                </div>

                            </div>

                            <div className='col-lg-4 d-flex justify-content-start justify-content-md-center  col-md-4'>
                                <address>
                                    <h4>Address</h4>
                                    123 Oak lane<br />
                                    NY, 656774,<br />
                                    New York <br /><br />
                                    <strong>Phone:</strong> +123 456 6770<br />
                                    <strong>Email:</strong> info@little-lemon.com

                                </address>
                            </div>



                            <div className="col-lg-4 col-md-4 footer-links d-flex justify-content-start justify-content-md-center  mt-4">
                                <div>
                                    <h4>Social Media links</h4>

                                    <div className="social-links mt-3 ">
                                        <a href="#" className="twitter"><i><BsTwitter /></i></a>
                                        <a href="#" className="facebook"><i><BsFacebook /></i></a>
                                        <a href="#" className="instagram"><i><BsInstagram /></i></a>
                                        <a href="#" className="instagram"><i><BsLinkedin /></i></a>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </footer>



        </>
    )
}





{/* <nav>

<ul className="">
    <li>
        <a href="#">
            Home
        </a>
    </li>

    <li>
        <a href="#">
            About
        </a>
    </li>

    <li>
        <a href="#">
            Menu
        </a>
    </li>

    <li>
        <a href="#">
            Reservations
        </a>
    </li>

    <li>
        <a href="#">
            Order online
        </a>
    </li>

    <li>
        <a href="#">
            Login
        </a>
    </li>
</ul>
</nav> */}