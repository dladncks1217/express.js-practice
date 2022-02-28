const puppeteer = require("puppeteer");

(async () => {
  // launch 메서드는 chrome을 실행시킴. headless는 ui를 제공하는지 안하는지 여부임. false로 해야 ui가 뜨고 아니면 백그라운드에서만 켜짐
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // 새롭게 페이지를 만든다.
  const page = await browser.newPage();

  // goto는 url로 이동하는 메서드
  await page.goto("http://localhost:3000");

  // 해당 탭에서 마우스 오른쪽 버튼 클릭 후 검사 버튼을 눌러 태그의 classname이나 id값을 알아내서 넣는다.
  //   await page.type("#id", "Your Id");
  //   await page.type("#pw", "Your Pw");

  // 위와 마찬가지로 버튼의 classname이나 id 값을 넣는다.
  while (true) {
    await page.click("#btn");
  }

  // 로그인 후 새로운 페이지로 넘어갈 때 자연스럽게 넘겨주는 함수이다.
  await page.waitForNavigation();
})();
