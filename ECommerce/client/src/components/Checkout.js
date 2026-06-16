import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Checkout() {
  const { id } = useParams();           // get product id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        const found = res.data.find(p => p._id === id);
        setProduct(found);
      })
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return <h3 style={{ textAlign: "center", marginTop: "50px" }}>Loading product...</h3>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🧾 Checkout Page</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "250px", borderRadius: "10px", marginBottom: "20px" }}
      />
      <h3>{product.name}</h3>
      <p style={{ color: "#555" }}>{product.description}</p>
      <h4 style={{ color: "#333" }}>Price: ₹ {product.price}</h4>

      <button
        style={{
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "15px"
        }}
        onClick={() => alert("✅ Purchase confirmed!")}
      >
        Confirm Purchase
      </button>
    </div>
  );
}

export default Checkout;
