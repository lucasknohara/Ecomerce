import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <span>Eco</span>Trend
            </div>

            <nav>
                <a href="#inicio">Início</a>
                <a href="#produtos">Ecobags</a>
                <a href="#sobre">Sobre</a>
            </nav>

            <button className="cart-button">
                <i className="fa-solid fa-bag-shopping"></i>
                Carrinho
            </button>
        </header>
    );
}

export default Header;