import { BiChevronRight } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


export default function Foot() {

    return (

        <>
            <footer id='footer'>

                <div className='footer-top bg-light'>

                    <div className="container">

                        <div className="row">

                            <div className="col-12 col-sm d-flex flex-column align-items-sm-center footer-links">

                                <h4>Doormant Navigation</h4>

                                <ul>
                                    <li><i><BiChevronRight /></i> <a href="#">Home</a></li>
                                    <li><i><BiChevronRight /></i> <a href="#">About us</a></li>
                                    <li><i><BiChevronRight /></i> <a href="#">Menu</a></li>
                                    <li><i><BiChevronRight /></i> <a href="#">Reservations</a></li>
                                    <li><i><BiChevronRight /></i> <a href="#">order Online</a></li>
                                    <li><i><BiChevronRight /></i> <a href="#"> Login</a></li>
                                </ul>


                            </div>

                            <div className="col-12 col-sm ">

                               <div className='d-flex justify-content-sm-center'>

                               <address>
                                    <h4>Address</h4>
                                    123 Oak lane<br />
                                    NY, 656774,<br />
                                    New York <br /><br />
                                    <strong>Phone:</strong> +123 456 6770<br />
                                    <strong>Email:</strong> info@little-lemon.com

                                </address>
                               </div>


                            </div>

                            <div className="col-12 col-sm  footer-links text-sm-center">

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
