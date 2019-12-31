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
    iconv.extendNodeEncodings(); 
    var strContents = new Buffer(body); 
    console.log(iconv.decode(strContents,'EUC-KR').toString());
});
