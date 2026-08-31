function ProductCard({ produto, adicionarAoCarrinho }) {
    return (
        <div className="produto-card">
            <div className="produto-image">
                <img
                    src={produto.imagem}
                    alt={produto.nome}
                />
            </div>

            <div className="produto-info">
                <p>{produto.categoria}</p>

                <h3>{produto.nome}</h3>

                <strong>
                    R$ {produto.preco.toFixed(2)}
                </strong>

                <button onClick={() => adicionarAoCarrinho(produto)}>
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    );
}

export default ProductCard;