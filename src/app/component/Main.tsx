"use client";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
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

  const [toggle, setToggle] = useState<Boolean>(false);
  const [items, setItems] = useState<tProduct[]>();
  const [singleItem, setsingleItem] = useState<tProduct>();
  const [searchQuery, setsearchQuery] = useState("");
  const [searchActivate, setSearchActivate] = useState(false);

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
    }, 1000);
  }

  const handleRequest = async () => {
    const response: any = await axios.get("api/getProducts");

    // const data= await JSON.stringify(response.data.reslut)
    console.log(response.data.result);
    const data = response.data.result;
    setItems(data);
  };

  const handleSearch = async () => {
    console.log(searchQuery);

    const res = await axios.post("api/searchProduct", searchQuery, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // console.log(res.data.result);
    setItems(res.data.result);
    setSearchActivate(true);
    setToggle(false);
  };

  const getCategoryProduct = async (category: String) => {
    const response: any = await axios.get(`api/searchProduct?data=${category}`);

    const data = response.data.result;
    setItems(data);
  };

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
            onChange={(e) => {
              getCategoryProduct(e.target.value);
            }}
          >
            <option value="">Category</option>
            <option value="Mobile">Mobile</option>
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
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
              onChange={(e) => {
                setsearchQuery(e.target.value);
              }}
            />
          </div>
          <div className="p-2">
            <input
              type="button"
              value="Search"
              style={{ borderRadius: "10px", padding: "4px" }}
              onClick={handleSearch}
            />
          </div>
        </form>
      </div>
      <div className="row ">
        <div
          className="col scrollHide d-flex justify-content-evenly align-items-center flex-wrap p-3"
          style={{ maxHeight: "100vh", overflowY: "scroll" }}
        >
          {searchActivate ? (
            <div className="w-100">Search Results:</div>
          ) : (
            <div className="w-100">All Products:</div>
          )}
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
