import "./Cart.css";

function Cart({ carrinho, removerDoCarrinho, fecharCarrinho }) {
    const total = carrinho.reduce((soma, produto) => {
        return soma + produto.preco;
    }, 0);

    return (
        <div className="cart-overlay">
            <div className="cart">
                <div className="cart-header">
                    <h2>Seu carrinho</h2>

                    <button onClick={fecharCarrinho}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                {carrinho.length === 0 ? (
                    <div className="cart-empty">
                        <i className="fa-solid fa-bag-shopping"></i>

                        <p>Seu carrinho está vazio.</p>
                    </div>
                ) : (
                    <div className="cart-products">
                        {carrinho.map((produto, index) => (
                            <div
                                className="cart-product"
                                key={`${produto.id}-${index}`}
                            >
                                <img
                                    src={produto.imagem}
                                    alt={produto.nome}
                                />

                                <div className="cart-product-info">
                                    <h3>{produto.nome}</h3>

                                    <strong>
                                        R$ {produto.preco.toFixed(2)}
                                    </strong>

                                    <button
                                        onClick={() =>
                                            removerDoCarrinho(index)
                                        }
                                    >
                                        Remover
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="cart-footer">
                    <div>
                        <span>Total</span>

                        <strong>
                            R$ {total.toFixed(2)}
                        </strong>
                    </div>

                    <button className="checkout-button">
                        Finalizar compra
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;