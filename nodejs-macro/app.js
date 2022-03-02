const puppeteer = require("puppeteer");

require("dotenv").config();

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");
  await page.screenshot({ path: "example.png" });
  await page.type("#id", process.env.ID);
  await page.type("#password", process.env.PW);

  await page.click("#submit");

  while (true) {
    await page.waitForTimeout(1000);
    await page.click("#countbtn");
  }

  // 로그인 후 새로운 페이지로 넘어갈 때 자연스럽게 넘겨주는 함수이다.
  await page.waitForNavigation();
})();
