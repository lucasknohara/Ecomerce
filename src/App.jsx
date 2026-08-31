import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import Header from "./components/Header/Header";

function App() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        const carrinhoSalvo = localStorage.getItem("carrinho");

        if (carrinhoSalvo) {
            setCarrinho(JSON.parse(carrinhoSalvo));
        }
    }, []);

    useEffect(() => {
        async function buscarProdutos() {
            try {
                setLoading(true);

                const resposta = await fetch("/produtos.json");

                if (!resposta.ok) {
                    throw new Error("Erro ao carregar produtos");
                }

                const dados = await resposta.json();

                setProdutos(dados);
            } catch (error) {
                console.log("Erro:", error);
            } finally {
                setLoading(false);
            }
        }

        buscarProdutos();
    }, []);

    function adicionarAoCarrinho(produto) {
        const novoCarrinho = [...carrinho, produto];

        setCarrinho(novoCarrinho);

        localStorage.setItem(
            "carrinho",
            JSON.stringify(novoCarrinho)
        );
    }

    return (
        <div>
            <Header quantidadeCarrinho={carrinho.length} />

            <main>
                <section className="hero" id="inicio">
                    <div className="hero-content">
                        <p className="tag">CONSUMO CONSCIENTE</p>

                        <h1>
                            Carregue suas escolhas.
                            <span> Cuide do planeta.</span>
                        </h1>

                        <p>
                            Ecobags bonitas, resistentes e reutilizáveis
                            para deixar sua rotina mais sustentável.
                        </p>

                        <a href="#produtos" className="hero-button">
                            Ver ecobags
                        </a>
                    </div>

                    <div className="hero-image">
                        <i className="fa-solid fa-leaf"></i>
                    </div>
                </section>

                <section className="produtos" id="produtos">
                    <div className="section-title">
                        <p className="tag">NOSSA COLEÇÃO</p>

                        <h2>Escolha sua ecobag</h2>

                        <p>
                            Encontre o modelo perfeito para acompanhar
                            o seu dia.
                        </p>
                    </div>

                    {loading ? (
                        <div className="loading">
                            <p>Carregando produtos...</p>
                        </div>
                    ) : (
                        <div className="produtos-grid">
                            {produtos.map((produto) => (
                                <ProductCard
                                    key={produto.id}
                                    produto={produto}
                                    adicionarAoCarrinho={adicionarAoCarrinho}
                                />
                            ))}
                        </div>
                    )}
                </section>

                <section className="sobre" id="sobre">
                    <div className="sobre-content">
                        <p className="tag">SOBRE A ECOTREND</p>

                        <h2>
                            Uma escolha simples pode fazer diferença.
                        </h2>

                        <p>
                            A EcoTrend nasceu para incentivar escolhas mais
                            conscientes através de produtos reutilizáveis,
                            começando pelas ecobags.
                        </p>
                    </div>

                    <div className="sobre-items">
                        <div>
                            <i className="fa-solid fa-recycle"></i>
                            <h3>Reutilizável</h3>
                            <p>
                                Use várias vezes e reduza o consumo de
                                sacolas descartáveis.
                            </p>
                        </div>

                        <div>
                            <i className="fa-solid fa-leaf"></i>
                            <h3>Sustentável</h3>
                            <p>
                                Uma alternativa simples para uma rotina
                                mais consciente.
                            </p>
                        </div>

                        <div>
                            <i className="fa-solid fa-heart"></i>
                            <h3>Feita para você</h3>
                            <p>
                                Modelos para diferentes estilos e momentos.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="logo">
                    <span>Eco</span>Trend
                </div>

                <p>
                    © 2026 EcoTrend. Todos os direitos reservados.
                </p>
            </footer>
        </div>
    );
}

export default App;