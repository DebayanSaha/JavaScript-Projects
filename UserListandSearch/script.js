const users = [
  {
    name: "Debayan Saha",
    pic: "https://images.unsplash.com/photo-1751670346016-bda0dc756da9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D",
    bio: " Silent chaos in a loud world | not for everyone",
  },
  {
    name: "Aarav Mehta",
    pic: "https://images.unsplash.com/photo-1649433658557-54cf58577c68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5zdGFncmFtJTIwcHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D",
    bio: "Tech junkie | Code, coffee, repeat ☕💻",
  },
  {
    name: "Ishita Roy",
    pic: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5zdGFncmFtJTIwcHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D",
    bio: "Dancing through life | Books > People 📚✨",
  },
  {
    name: "Karan Sharma",
    pic: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluc3RhZ3JhbSUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
    bio: "Explorer of code & cities 🌍 | Lost but learning",
  },
  {
    name: "Riya Kapoor",
    pic: "https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluc3RhZ3JhbSUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
    bio: "Not perfect, just limited edition 💫",
  },
  {
    name: "Arjun Das",
    pic: "https://images.unsplash.com/photo-1638596935911-99432593399f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluc3RhZ3JhbSUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
    bio: "Engineer of chaos ⚡ | Music is therapy",
  },
  {
    name: "Mira Sen",
    pic: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5zdGFncmFtJTIwcHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D",
    bio: "Half sunshine ☀️, half hurricane 🌪️",
  },
];

//create not found
    let notfound = document.createElement("div");
    notfound.classList.add("notFound");
//show all users
function showUsers(arr) {
  arr.forEach(function (users) {
    //outer card div
    const card = document.createElement("div");
    card.classList.add("card");

    //create img
    const img = document.createElement("img");
    img.classList.add("bg-img");
    img.src = users.pic;

    //create blurred layer
    let blurredLayer = document.createElement("div");
    blurredLayer.classList.add("blurred-layer");
    blurredLayer.style.backgroundImage = `url(${users.pic})`;

    //create content layer
    let content = document.createElement("div");
    content.classList.add("content");

    //create h3 and p
    let heading = document.createElement("h3");
    heading.textContent = users.name;
    let para = document.createElement("p");
    para.textContent = users.bio;

    //append h and p to content
    content.appendChild(heading);
    content.appendChild(para);

    //append all to card
    card.appendChild(content);
    card.appendChild(blurredLayer);
    card.appendChild(img);

    //append card to body
    document.querySelector(".cards").appendChild(card);
  });
}
showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    //users is array and user is all the individual objects inside the array
    document.querySelector(".cards").innerHTML = "";
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });
  if (newUsers.length === 0) {
    notfound.textContent = "No Users found";
    document.querySelector(".cards").appendChild(notfound);
  } else {
    showUsers(newUsers);
  }
});
