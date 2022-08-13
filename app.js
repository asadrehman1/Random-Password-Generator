const btn = document.querySelector("button");
const input = document.querySelector("input");
const copyBtn = document.querySelector(".fa-copy");
const alert = document.querySelector(".alert");

btn.addEventListener("click",()=>{
    generatePassword();
})
function generatePassword(){
    const range = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password=''
    for(let i =0; i < passwordLength ; i++){
        const randomNum =Math.floor(Math.random() * range.length);
        password+=range.substring(randomNum,randomNum+1);
        console.log(password,randomNum)
    }
    input.value=password
    alert.innerText=password +" "+"copied!"
}

copyBtn.addEventListener("click",()=>{
    input.select();
    navigator.clipboard.writeText(input.value)
    alert.classList.add("alert-style")
    setTimeout(()=>{
    alert.classList.remove("alert-style")
    },2000)
})