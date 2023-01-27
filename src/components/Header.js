import Nav from "./Nav"
import logo from '../assets/icons_assets/Logo .png'
import hamburgerIcon from '../assets/icons_assets/🦆 icon _hamburger menu_.svg'
import basket from '../assets/icons_assets/Basket.svg'


export default function Header() {

    const style = {

        height: "100px"
    }

    return (




        <header id="header" >

            <div className="hamburger"><img src={hamburgerIcon} alt="Hamburger" width="30px"/></div>

            <div>

                <img src={logo} alt="logo" />

            </div>

            <div>

                <Nav />

            </div>

            <div className="basket"><img src={basket} alt="Basket" /></div>





        </header>



    )
}

