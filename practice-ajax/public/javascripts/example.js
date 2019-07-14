let now = new Date();
let hour = now.getHours();
let minute = now.getMinuets();
let second = now.getSeconds();

let func = ()=>{
    return `${hour}:${minute}:${second}`;
}
func();