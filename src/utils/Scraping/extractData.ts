import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

export async function extratFun(link1: string, link2: string) {
  let browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  //   amazon
  await page.goto(link1);
  const html = await page.content();

  let seltool = cheerio.load(html);
  let Price;

  Price = seltool(
    "span.a-price.a-text-price.a-size-medium.apexPriceToPay span.a-offscreen"
  ); //price

  if (Price.text() == "") {
    Price = seltool(
      "span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay span.a-offscreen"
    );
  }

  let Rating = seltool(
    "span.a-size-base.a-nowrap span.a-size-medium.a-color-base"
  ); //price

  let Image = seltool("div#imgTagWrapperId.imgTagWrapper img"); //price

  const data = {
    Price: Price.text(),
    Rating: Rating.text().slice(0, 3),
    Image: Image.attr("src"),
  };

  //   flipkart
  await page.goto(link2);
  const html1 = await page.content();

  let seltool1 = cheerio.load(html1);
  let Price1 = seltool1("div._30jeq3._16Jk6d"); //price
  let Rating1 = seltool1("._2d4LTz");

  var data1 = {
    Price1: Price1.text(),
    Rating1: Rating1.text(),
  };

  //end

  return {
    Prices: {
      AmazonP: data.Price,
      FlipkartP: data1.Price1,
    },
    Ratings: {
      AmazonP: data.Rating,
      FlipkartP: data1.Rating1,
    },
    Images: { AmazonP: data.Image },
  };
}
