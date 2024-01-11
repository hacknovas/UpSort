"use client";
import { FormEvent, useEffect, useState } from "react";
import Product from "./Product";
import ListAllProduct from "./ListAllProduct";
import axios from "axios";
import styles from "@/app/common.module.css"

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

  const [toggle, setToggle] = useState<Boolean>(false);
  const [items, setItems] = useState<tProduct[]>();
  const [singleItem, setsingleItem] = useState<tProduct>();

  const handleRequest = async () => {
    const response: any = await axios.get("api/getProducts");

    // const data= await JSON.stringify(response.data.reslut)
    // console.log(response.data.result);
    const data = response.data.result;
    setItems(data);
  };

  async function handleToggle(Id: Number) {
    const response: any = await axios.post("api/getProducts", Id, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data.result;
    setsingleItem(data);

    setTimeout(() => {
      setToggle(true);
    }, 2000);
  }

  useEffect(() => {
    return () => {
      handleRequest();
    };
  }, []);

  return (
    <main className="d-flex flex-column p-2 ">
      <div className="d-flex justify-content-between p-3 ">
        <div className="p-3">
          <select
            name="category"
            id=""
            style={{ border: "none", padding: "4px", borderRadius: "10px" }}
            className="shadow-sm "
          >
            <option value="" selected>
              Category
            </option>
            <option value="">Mobile</option>
            <option value="">Fashion</option>
            <option value="">Electronics</option>
          </select>
        </div>
        <form
          style={{ padding: "4px", borderRadius: "10px" }}
          className="d-flex"
        >
          <div className="p-2">
            <input
              type="text"
              name="itemSearch"
              placeholder="search product..."
              className="form-control"
            />
          </div>
          <div className="p-2">
            <input
              type="submit"
              value="submit"
              className="btn btn-light  "
              style={{ borderRadius: "10px", padding: "4px" }}
            />
          </div>
        </form>
      </div>
      <div className="row ">
        <div
          className="col scrollHide d-flex justify-content-evenly align-items-center flex-wrap p-3"
          style={{ maxHeight: "100vh", overflowY: "scroll" }}
          
        >
          {items?.map((item, i) => {
            return (
              <div key={i} className="p-3">
                <ListAllProduct item={item} handleToggle={handleToggle} />
              </div>
            );
          })}
        </div>

        {!toggle ? (
          <div></div>
        ) : (
          <div
            className="p-3 col-4 d-flex align-items-center justify-content-center"
            // style={{ position: "absolute" }}
            id="magicol"
          >
            <Product singleItem={singleItem} setToggle={setToggle} />
          </div>
        )}
      </div>
    </main>
  );
}
