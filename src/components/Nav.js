

export default function Nav() {

    return (

        <>

            <nav id="myNav">

                <ul className="d-flex gap-5 pt-2   ">
                    <li>
                        <a href="#">
                            Home
                        </a>
                    </li>


                    <li>
                        <Link to="/" className="nav-link">About</Link>
                    </li>


                    <li>
                        <a href="#">
                            About
                        </a>
                    </li>

                    <li>
                        <Link to="/" className="nav-link">Menu</Link>
                    </li>



                    <li>
                        <Link to="/" className="nav-link">Reservations</Link>
                    </li>



                    <li>
                        <Link to="/" className="nav-link">Order Online</Link>
                    </li>



                    <li>
                        <Link to="/" className="nav-link">Login</Link>
                    </li>

                    <li>
                        <Link to="/my-app" className="nav-link">MyApp</Link>
                    </li>

                </ul>
            </nav>



        </>
    )
}