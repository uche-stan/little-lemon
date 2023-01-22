import { useState } from "react"

export default function HamburgerMenu() {

    const [showMenu, setShowMenu] = useState(true);

    function toggle(){

        setShowMenu(prevState =>{
            return prevState =!prevState
        })
    }

    return (

        <>

         {showMenu ? <h1>Good</h1> : <h1>Bad</h1>}

         <button onClick={toggle}>toggle</button>

        </>
    )
}