import CartWidget from "../CartWidget/CartWidget";
import ListItem from "../ListItem/ListItem";
import './NavBar.css'
export default function Navbar() {

    return (
        <>
        <div className="navbar">
            <div className="part">
                <img src='./src/img/mStudio.png' alt=""></img>
            </div>
            <ul>
                <ListItem title="Cenas"/>
                <ListItem title="Almuerzos"/>
                <ListItem title="Snacks"/>
            </ul>
            <CartWidget/>
        </div>
        </>
    )
}

