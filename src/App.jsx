import { useEffect, useState } from "react";

function App() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscarProdutos() {
            try {
                setLoading(true);

                const resposta = await fetch("/products.json");

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

    return (
        <div>
            <h1>EcoTrend</h1>

            {loading ? (
                <p>Carregando produtos...</p>
            ) : (
                <div>
                    {produtos.map((produto) => (
                        <div key={produto.id}>
                            <img
                                src={produto.imagem}
                                alt={produto.nome}
                                width="200"
                            />

                            <h2>{produto.nome}</h2>

                            <p>{produto.descricao}</p>

                            <strong>
                                R$ {produto.preco.toFixed(2)}
                            </strong>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;