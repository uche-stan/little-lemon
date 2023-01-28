import Nav from "./Nav"
import logo from '../assets/icons_assets/Logo .png'
import hamburgerIcon from '../assets/icons_assets/🦆 icon _hamburger menu_.svg'
import basket from '../assets/icons_assets/Basket.svg'


export default function Header() {

    const style = {

        height: "100px"
    }

    return (




        <header id="header" className="container-fluid bg-light  " >

            <div className="row pt-3 ">

                <div className="logo col-12 col-sm-4 d-flex justify-content-center flex-row-sm-reverse ">

                    <img src={logo} alt="logo" height="40px" />

                </div>

                <div className="navbar col-12 col-sm-8 d-flex justify-content-start d-none d-sm-flex">

                    <Nav />

                </div>

            <div className="hamburger"><img src={hamburgerIcon} alt="Hamburger" width="30px"/></div>

            </div>

            <div>

                <Nav />

            </div>

            <div className="basket"><img src={basket} alt="Basket" /></div>





        </header>



    )
}

