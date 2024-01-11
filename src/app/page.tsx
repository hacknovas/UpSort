// "use client";
import Image from "next/image";
import Main from "./component/Main";
import img1 from "../../public/img1.jpg";
import img2 from "../../public/img2.jpg";

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

      <header className="">
        {/*  */}
        <div style={{ paddingBottom: "4px" }}>
          <div className="m-5 p-3">
            <h3 className="text-center text-secondary p-4">
              Welcome to our website dedicated to product comparison<br></br>{" "}
              through advanced web Scraping!
            </h3>
            <div className="d-flex m-2" style={{ justifyContent: "flex-end" }}>
              <p className="m-2 p-3 text-end" style={{ fontSize: "0.9rem" }}>
                We're here to simplify your decision-making process by gathering{" "}
                <br></br>real-time data from various online sources.
              </p>

              <Image
                src={img1}
                alt="Na"
                style={{
                  borderRadius: "4%",
                  boxShadow: "10px 20px grey",
                  width: "20vw",
                }}
                className="img-fluid"
              ></Image>
            </div>

            <div
              className="d-flex m-2"
              style={{ justifyContent: "flex-start" }}
            >
              <Image
                src={img2}
                alt="NA"
                style={{
                  borderRadius: "4%",
                  boxShadow: "10px 20px grey",
                  width: "20vw",
                }}
              ></Image>

              <p className="m-2 p-3" style={{ fontSize: "0.9rem" }}>
                Our platform provides unbiased and up-to-date comparisons of
                products across different brands categories.<br></br> Whether
                you're looking for electronics,appliances, fashion,<br></br> or
                more, we've got you covered.
              </p>
            </div>
          </div>
        </div>

        {/*  */}
      </header>

      <div className="m-4 bg-light  my-5">
        <Main />
      </div>

      <div className="d-flex justify-content-evenly align-item-center my-5">
        <div>
          <h2>
            Don't See <br /> Product?
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

      <hr></hr>

      <p
        className="text-center p-5"
        style={{ fontSize: "0.8rem", fontWeight: "bolder" }}
      >
        <h5>
          {" "}
          Say goodbye to endless searching and hello to informed choices. <br />{" "}
          Explore our comprehensive comparisons and make smarter shopping
          decisions today..!
        </h5>
      </p>

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
