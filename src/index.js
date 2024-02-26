// import "./styles.css";
// ???
// Well, THIS doesn't work.
// Best I can figure is this is some misplaced remnant of Next.js or SASS or something.
// It shouldn't be here without explanation. Or we shouldn't be told we can develop
// locally and not worry about that hella jank Sandbox.
let cssLink = document.createElement('link')
cssLink.setAttribute('rel', 'stylesheet');
cssLink.setAttribute('href', 'src/styles.css');
document.getElementsByTagName('head')[0].appendChild(cssLink);
// <link rel="stylesheet" href="src/styles.css">



// Turns out, there are a bunch of output tools that are better than console.log(). And I'm livid about it.
console.count("executing src/index.js"); // This should only ever be 1!!

console.groupCollapsed("Initialization");

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
console.log("menuLinks", menuLinks);

// Part 1-1
console.log("Part 1-1");
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
let newNode = document.createElement("h1");
newNode.textContent = "DOM Manipulation";
mainEl.appendChild(newNode);
mainEl.classList.add("flex-ctr");
console.dir(mainEl);

//Part 1-2
console.log("Part 1-2");
let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
console.dir(topMenuEl); // topMenuEl

// Part 1-3
console.log("Part 1-3");
for (let link of menuLinks) {
  let newLink = document.createElement("a");
  newLink.setAttribute("href", link.href);
  newLink.textContent = link.text;
  topMenuEl.appendChild(newLink);
}
console.dir(topMenuEl);

//Part 2-3
console.log("Part 2-3");
let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
console.dir(subMenuEl);

// Part 2-4
console.log("Part 2-4-a: set up topMenuLinks");
let topMenuLinks = document.querySelectorAll("#top-menu a");
console.dir(topMenuLinks);

// apPARently, I shouldn't use "anonymous functions" as "callback functions"
// because the handlers can't be removed "safely" or maybe "at all"
// so they will "create memory leaks"
// and the apps will "slow to a crawl" or "crash"
// especially with "long-running" web apps
// (and in this age of "tab proliferation", "every" web app should "expect" to be "long-running")
// and the "users" will be "angry"
// and then I'll be "unemployed" "again"
// and be forced to "learn" to "use" "quotation marks"
// "pro"per"ly"
// ...
// Actually, that article was from 2013. The current documentation indicates it's NBD.
// const handlerTopMenuClick = (e) => {

console.log("Part 2-4-b: set up event listener and event handler for top nav click");
topMenuEl.addEventListener("click", handlerTopMenuClick);

console.log("Part 2-4-c: manage menu items' \"active\" states");
// within handler
console.log("Part 2-5: submenu interaction");
// within handler




console.groupEnd();

function handlerTopMenuClick(e) {
  console.group("Top Nav click handling");
  e.preventDefault();

  if (e.target.tagName != "A") {
    return;
  }

  // debugger;
  subMenuEl.style.top = 0;
  for (let node of topMenuLinks) {
    console.count("DEBUG > handlerTopMenuClick > inner loop");
    if (node == e.target && !node.classList.contains("active")) {
      console.debug(`activating menu bar item ${node.textContent}`)
      node.classList.add("active");
      if (node.attributes.href.value
        == '#') {
        console.debug(`activating submenu`)
        subMenuEl.style.top = '100%';
      }
    } else {
      console.debug(`deactivating menu bar item ${node.textContent}`)
      node.classList.remove("active");
    };
  };
};

