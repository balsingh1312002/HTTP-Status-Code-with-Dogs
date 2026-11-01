const defaultImage=document.getElementById("defaultImg");
const code=document.getElementById("code");
const btn=document.getElementById("btn");
const message=document.getElementById("message");
async function fetchCode(){
    try{
        const statusCode=code.value.trim();
    if(statusCode === ""){
        message.textContent="Please enter a Status Code";
        return;
    }
        const imageURL=`https://http.dog/${statusCode}.jpg`
        defaultImage.src=imageURL;
        message.textContent=`Status Code : ${statusCode}`;
    
    }catch(error){
        console.log("ERROR");
    }
}
btn.addEventListener("click",fetchCode)