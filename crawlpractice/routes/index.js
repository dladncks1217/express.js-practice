const express = require('express');
const router = express.Router();
const client = require('cheerio-httpcli');

router.get('/',(req,res,next)=>{
    const hello = client.fetch("http://www.skhu.ac.kr/board/boardlist.aspx?bsid=10004&searchBun=51", {}, function (err, $, res, body) {
        let result0;
        const list = $(".left15 #ctl00_ContentPlaceHolder1_ctl00_rptList_ctl00_lblTitle");
        list.each(function(){
            let result = $(this).find('a').text();
            return result0 = result;
        });
        console.log(result0);
        return result0;
    });
    
    res.render('index',{
        results0:hello(),
    });
});

module.exports = router;