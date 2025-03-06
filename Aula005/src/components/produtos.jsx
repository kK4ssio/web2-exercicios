import { useState, useEffect } from "react";

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProdutos(data.products));
  }, []);

  if (produtos.length === 0) return <div>Carregando produtos...</div>;


  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
      {produtos.map((produto) => (
        <div key={produto.id} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "15px", textAlign: "center", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
          <img src={produto.thumbnail} alt={produto.title} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }} />
          <h3>{produto.title}</h3>
          <p>{produto.description}</p>
          <strong>R$ {produto.price.toFixed(2)}</strong>
        </div>
      ))}
    </div>
  );
}

export default Produtos;
