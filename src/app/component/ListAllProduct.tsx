import Image from "next/image";

export default function ListAllProduct({ ...item }) {
  return (
    <div className="container">
      <div className="text-center">
        <div className={"text-center"}>{item.item.Product_Name}</div>
        <div className="text-center">
          <Image
            src={item.item.Images.AmazonP}
            alt="NA"
            width={50}
            height={50}
          ></Image>
        </div>
      </div>
    </div>
  );
}
