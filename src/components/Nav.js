import { Link } from "react-router-dom"

export default function Nav() {

    return (

        <>

            <nav id="nav">

                <ul className="  ">
                    <li>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>

                    <li>
                    <li>
                        <Link to="/" className="nav-link">About</Link>
                    </li>
                    </li>

                    <li>
                    <li>
                        <Link to="/" className="nav-link">Menu</Link>
                    </li>
                    </li>

                    <li>
                    <li>
                        <Link to="/" className="nav-link">Reservations</Link>
                    </li>
                    </li>

                    <li>
                    <li>
                        <Link to="/" className="nav-link">Order Online</Link>
                    </li>
                    </li>

                    <li>
                    <li>
                        <Link to="/" className="nav-link">Login</Link>
                    </li>
                    </li>
                </ul>
            </nav>



        </>
    )
}