let arr = [
  {
    dp: "https://i.pinimg.com/1200x/21/96/26/2196266b1a897f6d9cf24e3c836566a6.jpg",
    story:
      "https://i.pinimg.com/736x/c6/47/37/c64737a8f591792714d8779c8bfe5b3a.jpg",
  },
  {
    dp: "https://i.pinimg.com/736x/7c/ad/57/7cad5785c2f64ce86fc5b767c8360000.jpg",
    story:
      "https://i.pinimg.com/736x/ce/8a/56/ce8a565702a5f1e2e0125c922063681c.jpg",
  },
  {
    dp: "https://i.pinimg.com/736x/c8/01/94/c801948738e687213cf00aa6b28e00c8.jpg",
    story:
      "https://i.pinimg.com/736x/6f/5c/74/6f5c7486d81ca756247803206b21f68f.jpg",
  },
  {
    dp: "https://i.pinimg.com/1200x/e5/4a/ec/e54aecc158ce45af74a7c212b52bf7cb.jpg",
    story:
      "https://i.pinimg.com/736x/f7/c7/a2/f7c7a23bd5f45b9b2c2b63632b7b7d27.jpg",
  },
];
let stories = document.querySelector("#stories");
let clutter = "";
arr.forEach(function (dets, idx) {
  clutter += `<div class="story">
                    <img id="${idx}" src="${dets.dp}" alt="">
              </div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click", function (dets) {
  document.querySelector("#fullScreen").style.display = "block";
  document.querySelector("#fullScreen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  }`;
  setTimeout(function () {
    document.querySelector("#fullScreen").style.display = "none";
  }, 3000);
});
