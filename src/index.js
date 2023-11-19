import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const hour = new Date().getHours();
console.log(hour);

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header footer">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      {/* Rendering the pizza list using the JS map method  */}
      {numPizza > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        "We are sorry we've ran out of pizzas please come back later"
      )}
      {/* Rendering pizza list manually */}
      {/* <Pizza
          name="Pizza Spinaci"
          ingredient="Tomato and mozarella"
          photo="pizzas/spinaci.jpg"
          price={12}
        />
        <Pizza
          name="Pizza Funghi"
          ingredient="Tomato, mozarella, mushrooms, and onion"
          photo="pizzas/funghi.jpg"
          price={12}
        /> */}
    </main>
  );
}

function Pizza(props) {
  // if (props.pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? (
            <span>Sold out</span>
          ) : (
            <span> £{props.pizzaObj.price}</span>
          )}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer>
      <p className="order">
        {hour >= 12 && hour < 23
          ? "We're currently open"
          : "Sorry we're closed"}
      </p>
      <div style={{ padding: "10px 20px" }}>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
  // return React.createElement("footer", null, "We'r currently open");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
