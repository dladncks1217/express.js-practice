const client = require('cheerio-httpcli');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;
let a = [];
new Promise((resolve)=>{
    client.fetch("https://www.melon.com/",{},(err,$,res,body)=>{
    let body1 = $.html();
    let dom = new JSDOM(body1);
    let first = dom.window.document.getElementsByClassName('ellipsis mlog')[0].innerHTML;
    console.log(first);
    resolve(first);
    })
}).then((results)=>{
    a.push(results);
})
module.exports = a;