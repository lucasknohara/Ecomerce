import "./ProductFilter.css";

function ProductFilter({
    categoria,
    setCategoria,
    precoMaximo,
    setPrecoMaximo,
}) {
    return (
        <section className="product-filter">
            <h2>Filtre os produtos</h2>

            <div className="filter-options">
                <div className="filter-group">
                    <label htmlFor="categoria">
                        Categoria
                    </label>

                    <select
                        id="categoria"
                        value={categoria}
                        onChange={(e) =>
                            setCategoria(e.target.value)
                        }
                    >
                        <option value="todas">
                            Todas
                        </option>

                        <option value="Básica">
                            Básica
                        </option>

                        <option value="Orgânica">
                            Orgânica
                        </option>

                        <option value="Minimalista">
                            Minimalista
                        </option>

                        <option value="Estampada">
                            Estampada
                        </option>

                        <option value="Reciclada">
                            Reciclada
                        </option>

                        <option value="Premium">
                            Premium
                        </option>

                        <option value="Grande">
                            Grande
                        </option>

                        <option value="Artesanal">
                            Artesanal
                        </option>
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="preco">
                        Preço máximo
                    </label>

                    <select
                        id="preco"
                        value={precoMaximo}
                        onChange={(e) =>
                            setPrecoMaximo(e.target.value)
                        }
                    >
                        <option value="todos">
                            Todos
                        </option>

                        <option value="50">
                            Até R$ 50
                        </option>

                        <option value="60">
                            Até R$ 60
                        </option>

                        <option value="70">
                            Até R$ 70
                        </option>

                        <option value="90">
                            Até R$ 90
                        </option>
                    </select>
                </div>
            </div>
        </section>
    );
}

export default ProductFilter;
