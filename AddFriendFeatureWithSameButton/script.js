let add=document.querySelector("#add");
let flag=true;

add.addEventListener("click",function(){
    
    if(flag){
        add.textContent="Remove friend";
        document.querySelector("h5").textContent="Friends";
        document.querySelector("h5").style.color="green";
        flag=false;
    }
    else{
        add.textContent="Add Friend";
        document.querySelector("h5").textContent="Stranger";
        document.querySelector("h5").style.color="darkred";
        flag=true;
    }
});