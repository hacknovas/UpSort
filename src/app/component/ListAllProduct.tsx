import Image from "next/image";
import styles from "@/app/common.module.css";

export default function ListAllProduct({ ...item }) {
  return (
    <>
      <div
        className={styles.productLayout}
        style={{ cursor: "pointer" }}
        onClick={() => {
          item.handleToggle(item.item._id);
        }}
      >
        <div className={styles.imageText}>
          <b>click to open</b>
        </div>
        <div className={styles.productImage}>
          <Image
            src={item.item.Images.AmazonP}
            alt="NA"
            width={150}
            height={220}
          ></Image>
        </div>
      </div>
      <p className={styles.productName}>{item.item.Product_Name}</p>
    </>
  );
}
