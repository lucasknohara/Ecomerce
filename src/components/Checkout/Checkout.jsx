import { useState } from "react";
import "./Checkout.css";

function Checkout({ carrinho, fecharCheckout, finalizarCompra }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [pagamento, setPagamento] = useState("Cartão");
    const [erro, setErro] = useState("");

    const total = carrinho.reduce((soma, produto) => {
        return soma + produto.preco * produto.quantidade;
    }, 0);

    function enviarPedido(e) {
        e.preventDefault();

        setErro("");

        if (carrinho.length === 0) {
            setErro("Seu carrinho está vazio.");
            return;
        }

        if (!nome.trim()) {
            setErro("Digite seu nome.");
            return;
        }

        if (!email.trim()) {
            setErro("Digite seu e-mail.");
            return;
        }

        if (!email.includes("@")) {
            setErro("Digite um e-mail válido.");
            return;
        }

        finalizarCompra({
            nome,
            email,
            pagamento,
            total,
        });
    }

    return (
        <div className="checkout-overlay">
            <div className="checkout">
                <div className="checkout-header">
                    <h2>Finalizar compra</h2>

                    <button onClick={fecharCheckout}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <form onSubmit={enviarPedido}>
                    <label>
                        Nome

                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </label>

                    <label>
                        E-mail

                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label>
                        Forma de pagamento

                        <select
                            value={pagamento}
                            onChange={(e) =>
                                setPagamento(e.target.value)
                            }
                        >
                            <option value="Cartão">Cartão</option>
                            <option value="Pix">Pix</option>
                            <option value="Boleto">Boleto</option>
                        </select>
                    </label>

                    <div className="checkout-total">
                        <span>Total</span>

                        <strong>
                            R$ {total.toFixed(2)}
                        </strong>
                    </div>

                    {erro && (
                        <p className="checkout-error">
                            {erro}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="confirm-button"
                    >
                        Confirmar pedido
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;

