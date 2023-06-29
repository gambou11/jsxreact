import React from "react";
import Card from "react-bootstrap/Card";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./product";

const firstName = "John"; // Replace with your own first name or leave it as an empty string ""

const App = () => {
  return (
    <div>
      <Card style={{ width: "300px", margin: "auto", marginTop: "20px" }}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Image image={product.image} />
          <Description description={product.description} />
        </Card.Body>
      </Card>

      <div>
        <p style={{ fontSize: "18px", textAlign: "center" }}>
          Hello, {firstName ? firstName : "there"}!
        </p>
        {firstName && (
          <img
            src="C:\Users\ASUS\my-app\src\s_14B4BD8EDBFA59296DCDB812AB5C6EF8CE164AAF0A2268A9E90E57893E23504E_1627245718848_Screenshot+100.png"
            alt="Profile"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
