import "./styles.old.css";

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Part 1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
let newNode = document.createElement("h1");
newNode.textContent = "DOM Manipulation";
mainEl.appendChild(newNode);
mainEl.classList.add("flex-ctr");

//Part 2
let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3
for (let link of menuLinks) {
  let newLink = document.createElement("a");
  newLink.setAttribute("href", link.href);
  newLink.textContent = link.text;
  topMenuEl.appendChild(newLink);
}
