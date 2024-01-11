// const cheerio = require("cheerio");
// const axios = require("axios");

// var completeData;

// const scrapData = async (link, num) => {
//   const res = await axios.get(link);

//   if (num == 1) {
//     completeData = handleHTML1(res["data"]);
//   } else if (num == 2) {
//     completeData = handleHTML2(res["data"]);
//   } else {
//     completeData = handleHTML3(res["data"]);
//   }
//   return completeData;
// };

// let handleHTML2 = (html) => {
//   let seltool = cheerio.load(html);
//   let Price = seltool("div._30jeq3._16Jk6d"); //price
//   let Rating = seltool("._2d4LTz");

//   return {
//     Price: Price.text(),
//     Rating: Rating.text(),
//   };
// };
// let handleHTML1 = (html) => {
//   let seltool = cheerio.load(html);
//   let Price;

//   Price = seltool(
//     "span.a-price.a-text-price.a-size-medium.apexPriceToPay span.a-offscreen"
//   ); //price

//   if (Price.text() == "") {
//     Price = seltool(
//       "span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay span.a-offscreen"
//     );
//   }

//   let Rating = seltool(
//     "span.a-size-base.a-nowrap span.a-size-medium.a-color-base"
//   ); //price

//   let Image = seltool("div#imgTagWrapperId.imgTagWrapper img"); //price

//   return {
//     Price: Price.text(),
//     Rating: Rating.text().slice(0, 3),
//     Image: Image.attr("src"),
//   };
// };

// let handleHTML3 = (html) => {
//   let seltool = cheerio.load(html);
//   let Price = seltool("span#pdp-product-price.amount"); //price
//   return {
//     Price: Price.text().split("₹")[2],
//   };
// };

// module.exports = scrapData;
