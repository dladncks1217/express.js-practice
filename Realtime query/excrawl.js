const client = require('cheerio-httpcli');

new Promise((resolve)=>{
    client.fetch("http://www.skhu.ac.kr/board/boardlist.aspx?bsid=10004&searchBun=51",{},(err,$,res,body)=>{
        let crawl = $(".left15 #ctl00_ContentPlaceHolder1_ctl00_rptList2_ctl00_lblTitle");
        let result = crawl.find('a').text();
        
        resolve(result);
        console.log(result);
    })
}).then((results)=>{
    module.exports = results;
})

