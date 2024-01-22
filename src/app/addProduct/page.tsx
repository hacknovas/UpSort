"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

export default function page() {
  const [name, setName] = useState("");
  const [flipkart, setFlipkart] = useState("");
  const [amazon, setAmazon] = useState("");
  const [option, setOption] = useState("");

  async function handleSubmit() {
    // await axios.get("/addProduct");

    try {
      const result = await axios.post(
        "api/addProducts",
        { name, flipkart, amazon, option },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(result.data);
    } catch (error) {
      console.log("error occured", error);
    }
  }

  return (
    <div className="container d-flex justify-content-evenly m-5">
      <div className="bg-light shadow p-3   ">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label">
            Flipkart
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail2"
            onChange={(e) => {
              setFlipkart(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail3" className="form-label">
            Amazon
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail3"
            onChange={(e) => {
              setAmazon(e.target.value);
            }}
          />
        </div>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            setOption(e.target.value);
          }}
        >
          <option defaultValue="Select Menu">Select menu</option>
          <option value="Mobile">Mobile</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>
        <div className="text-center my-3">
          <button className="w-100 " onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <div className="bg-primary p-1 text-light">Manage Products</div>
        </Link>
      </div>
    </div>
  );
}
