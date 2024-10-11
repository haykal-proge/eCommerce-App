/* Proses request ke RESTful API dengan mengirimkan access token */
import { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ambil access token dari localStorage
        const access_token = localStorage.getItem("access_token");

        // request ke RESTful API dengan mengirimkan access token
        const response = await fetch("http://localhost:3000/products", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        const data = await response.json();

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};