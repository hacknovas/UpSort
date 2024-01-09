"use client";
import { FormEvent, useEffect, useState } from "react";
import Product from "./Product";
import ListAllProduct from "./ListAllProduct";
import axios from "axios";

export default function Main() {
  type tProduct = {
    Links: {
      Amazon: String;
      Flipkart: String;
    };
    Prices: {
      AmazonP: Number;
      FlipkartP: Number;
    };
    Ratings: {
      AmazonP: Number;
      FlipkartP: Number;
    };
    Images: {
      AmazonP: String;
    };
    Category: {
      Mobile: Boolean;
      Electronics: Boolean;
      Fashion: Boolean;
    };
    _id: String;
    Product_Name: String;
    __v: Number;
  };

  const [items, setItems] = useState<tProduct[]>();

  const handleRequest = async () => {
    const response: any = await axios.get("api/getProducts");

    // const data= await JSON.stringify(response.data.reslut)
    // console.log(response.data.result);
    const data = response.data.result;
    setItems(data);
  };

  useEffect(() => {
    return () => {
      handleRequest();
    };
  }, []);

  return (
    <main className="d-flex flex-column">
      <div className="text-center">
        <form>
          <input type="text" name="itemSearch" />
          <input type="submit" value="submit" />
        </form>
      </div>

      <h1 className="text-center">grid Items</h1>

      <div className="row ">
        <div className="col d-flex justify-content-evenly p-3">
          {items?.map((item, i) => {
            return (
              <div key={i} className="">
                <ListAllProduct item={item} />
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
