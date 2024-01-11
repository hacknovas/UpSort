// "use client";
import Image from "next/image";
import Main from "./component/Main";

export default function Home() {
  return (
    <>
      <nav className="p-2 my-1 position-sticky top-0 z-1  d-flex justify-content-center shadow">
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bolder",
          }}
        >
          <h4>
            <b>UpSort</b>
          </h4>
        </a>
      </nav>
      <header className="container text-center">Info</header>

      <div className="bg-light my-4">
        <Main />
      </div>

      <div className="d-flex justify-content-evenly align-item-center my-5">
        <div>
          <h2>
            Don't see <br /> products?
          </h2>
        </div>
        <div>
          <form action="" className="p-3">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll update product as soon as possible.
              </div>
              <div>
                <button type="submit" className=" my-3 btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <footer
        className=" border-top p-3 text-light"
        style={{ backgroundColor: "darkgrey" }}
      >
        <div className="d-flex justify-content-between p-3">
          <div>UpSort</div>
          <div>
            <b>Products</b>
            <ul style={{ listStyleType: "none" }}>
              <li>Mobile</li>
              <li>Electronics</li>
              <li>Fashion</li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-3">
          <a
            href="mailto:creatives.doni@gmail.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            <b>build by @creatives.doni@gmail.com</b>
          </a>
        </div>
      </footer>
    </>
  );
}
