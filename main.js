sifreolustur=()=>{
const karakter="0123456789qwertyuiopasdfghjklizxcvbnm"
let sifreuzunluk=10;
let sifre="";
for(let i=0;i<sifreuzunluk;i++){
    let rastgele=Math.floor(Math.random() * karakter.length);
    sifre+=karakter.substring(rastgele,rastgele+1)
}
document.getElementById("password").value=sifre;
}
kopyala=()=>{
    // password.select();
    // document.execCommand("copy");
    navigator.clipboard.writeText(password.value)
}