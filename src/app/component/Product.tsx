import Image from "next/image";

export default function Product({ ...props }) {
  console.log(props.singleItem);

  return (
    <div>
      <div className="card text-center shadow-lg">
        <div
          className="text-end"
          onClick={() => {
            props.setToggle(false);
          }}
          style={{ cursor: "pointer" }}
        >
          <h5 className="text-end p-2">
            <b className="text-secondary  p-2">&times;</b>
          </h5>
        </div>
        <div className="text-center p-3">
          <Image
            src={props.singleItem?.Images.AmazonP}
            width={300}
            height={300}
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.singleItem?.Product_Name}</h5>
        </div>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item d-flex justify-content-evenly">
            <div>Price: {props.singleItem?.Prices.AmazonP}/-</div>
            <div>{props.singleItem?.Ratings.AmazonP}</div>
            <a href={props.singleItem?.Links.Amazon} className="card-link">
              Amazon
            </a>
          </li>
          <li className="list-group-item  d-flex justify-content-evenly">
            <div>Price: {props.singleItem?.Prices.FlipkartP}/-</div>
            <div>{props.singleItem?.Ratings.FlipkartP}</div>
            <a href={props.singleItem?.Links.Flipkart} className="card-link">
              Flipkart
            </a>
          </li>
        </ul>
        <div className="card-body">{/*  */}</div>
      </div>
    </div>
  );
}
