import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Artística Locuras</h3>
                <div>
                    <button>Laminas de seda</button>
                    <button>Folex</button>
                    <button>Pinceles</button>
                </div>
                <CartWidget/>
        </nav>
    )
}

export default NavBar