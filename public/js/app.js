const formm=document.querySelector('form');
const inpp=document.querySelector('input');
const mone=document.querySelector('#msgone');
const mtwo=document.querySelector('#msgtwo');






// fetch('http://localhost:3000/weather?address=!').then((response)=>{
// response.json().then((data)=>{
// if(data.error){
//     console.log(data.error);
// }
// else{
//     console.log(data.like);
//     console.log(data.temp);
// }
// })
// })


formm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("kuch toh hua hey");
    mone.textContent="";
mtwo.textContent="";
    const locc=inpp.value;
    const uurl='/weather?address='+locc+'';
    fetch(uurl).then((response)=>{
response.json().then((data)=>{
if(data.error){
    console.log(data.error);
    mone.textContent=data.error;
}
else{
    console.log(data.like);
    console.log(data.temp);
    mtwo.textContent="temperatur is"+data.temp;
}
})
})
})