const client = require('cheerio-httpcli');
module.exports = client.fetch("http://www.skhu.ac.kr/board/boardlist.aspx?bsid=10004&searchBun=51", {}, function (err, $, res, body) {
    
    const list = $(".left15 #ctl00_ContentPlaceHolder1_ctl00_rptList_ctl00_lblTitle");
    results = list.find('a').text();
    return results;
});
console.log(client.fetch("http://www.skhu.ac.kr/board/boardlist.aspx?bsid=10004&searchBun=51", {}, function (err, $, res, body) {
    
    const list = $(".left15 #ctl00_ContentPlaceHolder1_ctl00_rptList_ctl00_lblTitle");
    results = list.find('a').text();
    return results;
}));