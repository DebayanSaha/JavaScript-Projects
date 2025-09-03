let con = document.querySelector("#container");
let like = document.querySelector("i");

con.addEventListener("dblclick", function () {
  like.style.transform = "translate(-50%,-50%) scale(2)";
  setTimeout(() => {
    like.style.transform = "translate(-50%,-50%) scale(0)";
  }, 1000);
});
