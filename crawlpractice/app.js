/*
const request = require('request');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');



const reqOption = {
    method:"GET",
    url:'http://www.skhu.ac.kr/board/boardlist.aspx?bsid=10004&searchBun=51',
    headers:{
       "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36"
    },
    encoding:null
};

request.get(reqOption,(err,res,body)=>{
    const $ = cheerio.load(body);
    const $use = $("span#ctl00_ContentPlaceHolder1_ctl00_rptList_ctl00_lblTitle").children('a');
     iconv.extendNodeEncodings(); 
    const usecontent = new Buffer($use.toString());
    console.log(iconv.decode(usecontent,'EUC-KR').toString());

    iconv.extendNodeEncodings();
    const strContents = new Buffer(body); 
    console.log(iconv.decode(strContents,'euckr').toString());
});
 */

const client = require('cheerio-httpcli');
client.fetch("http://www.skhu.ac.kr/board/boardlist.aspx?bsid=10004&searchBun=51", {}, function (err, $, res, body) {
  const list = $(".left15 #ctl00_ContentPlaceHolder1_ctl00_rptList_ctl00_lblTitle");
  list.each(function(){
    let result = $(this).find('a').text();
    console.log(result);
  });
});