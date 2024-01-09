import mongoose from "mongoose";

interface Products extends mongoose.Document {
  Product_Name: String;
  Links: {
    Amazon: String;
    Flipkart: String;
  };
  Prices: {
    AmazonP: String;
    FlipkartP: String;
  };
  Ratings: {
    AmazonP: String;
    FlipkartP: String;
  };
  Images: { AmazonP: String };
  Category: {
    Mobile: Boolean;
    Electronics: Boolean;
    Fashion: Boolean;
  };
}

type ProductModel = mongoose.Model<Products>;

const struct = new mongoose.Schema<Products, ProductModel>({
  Product_Name: {
    type: String,
    required: true,
  },
  Links: {
    Amazon: {
      type: String,
    },
    Flipkart: {
      type: String,
    },
  },
  Prices: {
    AmazonP: {
      type: String,
      default: "Not Available",
    },
    FlipkartP: {
      type: String,
      default: "Not Available",
    },
  },
  Ratings: {
    AmazonP: {
      type: String,
      default: "Not Available",
    },
    FlipkartP: {
      type: String,
      default: "Not Available",
    },
  },
  Images: {
    AmazonP: {
      type: String,
      default: "Not Available",
    },
  },
  Category: {
    Mobile: {
      type: Boolean,
      default: false,
    },
    Electronics: {
      type: Boolean,
      default: false,
    },
    Fashion: {
      type: Boolean,
      default: false,
    },
  },
});

// struct.method("getDetailFrom", async function () {
//   try {
//     const res1 = await scrapData(this.Links.Amazon, 1);
//     this.Prices.AmazonP = await res1.Price;
//     this.Ratings.AmazonP = await res1.Rating;
//     this.Images.AmazonP = await res1.Image;

//     const res2 = await scrapData(this.Links.Flipkart, 2);
//     this.Prices.FlipkartP = await res2.Price;
//     this.Ratings.FlipkartP = await res2.Rating;

//     await this.save();
//     return this;
//   } catch (err) {
//     console.log("Failed to extract data...");
//   }
// });

// type prod = InferSchemaType<typeof schema>;

export const modelProd: ProductModel =
  mongoose.models.AllProducts ??
  mongoose.model<Products, ProductModel>("AllProducts", struct);

// module.exports = mongoose.models.AllProducts || modelProd;
