"use client";
import { FormEvent, useState } from "react";
import Product from "./Product";
import ListAllProduct from "./ListAllProduct";

export default function Main() {
  const handleRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const [items, setItems] = useState([123, 2321]);

  return (
    <main className="d-flex flex-column">
      <div className="text-center">
        <form onSubmit={handleRequest}>
          <input type="text" name="itemSearch" />
          <input type="submit" value="submit" />
        </form>
      </div>

      <h1 className="text-center">grid Items</h1>

      <div className="row ">
        <div className="col d-flex justify-content-evenly p-3">
          {items.map((val, i) => {
            return (
              <div key={i} className="">
                <ListAllProduct />
              </div>
            );
          })}
        </div>

        <div className="d- p-3 col" id="magicol">
          <Product />
        </div>
      </div>
    </main>
  );
}
