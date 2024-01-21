"use client";
import axios from "axios";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [email, setemail] = useState<string>();
  const [pass, setpass] = useState<string>();

  const handleVerify = async () => {
    try {
      const res = await axios.post(
        "api/authorize",
        { email, pass },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status == 200) {
        localStorage.setItem("isAdmin", "true");
        redirect("/addProducts");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column ">
      <div className="mb-3 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="htmlForm-control-plaintext"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            id="staticEmail"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-htmlForm-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="htmlForm-control"
            id="inputPassword"
            onChange={(e) => {
              setpass(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <button onClick={handleVerify}>Verify</button>
      </div>
    </div>
  );
}
