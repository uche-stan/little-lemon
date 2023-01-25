import Nav from "./Nav"
import logo from '../assets/icons_assets/Logo .png'


export default function Header() {

    const style = {

        height: "100px"
    }

    return (




        <header id="header" >



            <div>

                <img src={logo} alt="logo" />

            </div>

            <div>

                <Nav />

            </div>





        </header>



    )
}

