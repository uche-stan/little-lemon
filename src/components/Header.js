import Nav from "./Nav"
import logo from '../assets/icons_assets/Logo .png'


export default function Header() {

    return (




        <div className="container-fluid bg-light">

            <div className="row">

                <div className="d-flex mx-5 gap-3 justify-content-center align-items-center mt-3  myBox" >
                   <a href="#"> <img src={logo} alt="logo" className="img-fluid" /> </a>  <Nav />
                </div>

            </div>

        </div>



    )
}

