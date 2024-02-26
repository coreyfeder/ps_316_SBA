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

try {
  "do anything else at all";
} catch (SyntaxError) {
  console.error("This never works. Find another way.");
  console.error(e);
// } catch (e) {
  // console.debug('look it up');
} finally {
  console.debug('Well, keep going, you piece of shit.');
}

// Part 1-1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
let newNode = document.createElement("h1");
newNode.textContent = "DOM Manipulation";
mainEl.appendChild(newNode);
mainEl.classList.add("flex-ctr");

//Part 1-2
let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 1-3
for (let link of menuLinks) {
  let newLink = document.createElement("a");
  newLink.setAttribute("href", link.href);
  newLink.textContent = link.text;
  topMenuEl.appendChild(newLink);
}

//Part 2-3
let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Part 2-4

let topMenuLinks = document.querySelectorAll("#top-menu a");
console.log(`"topMenuLinks" populated. length=${topMenuLinks.length}`);
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
function handlerTopMenuClick(e) {
  console.log("DEBUG > handlerTopMenuClick fired");
  console.dir(e);
  // console.log("DEBUG > e");
  // console.log(e);
  // console.log("DEBUG > e.target");
  // console.log(e.target);
  // console.log(e.target.tagName);
  // console.log(e.target.textContent);

  e.preventDefault();

  // without this, preventDefault stays in effect.
  // If I reload the page, all my earlier instructions are run again.
  // I either have to stop it here, or put in extra plumbing above
  // making the setup instructions idempotent
  // e.stopPropagation();
  if (e.target.tagName != "A") {
    return;
  }
  console.log("detected click, targeting: " + e.target.textContent);
  debugger;
  for (let node in topMenuEl) {
    console.log("executing loop");
    try {
      console.log(topMenuEl[node]);
      // console.log(node);
      // console.log(`node.title: ${node.title}`);
      // console.log(`node.name: ${node.name}`);
    } catch (e) {
      console.log("caught error");
    }
    //console.log(e.target);
    //if (!node) {
    //  console.log("Node is false. Wait, how is this false?");
    //  continue;
    //  // } else if (node == chobitsuEvents) {
    //  // console.log("Node is chobitsuEvents. ...Why?");
    //  // continue;
    //} else if (node == "chobitsuEvents") {
    //  console.log("Node is 'chobitsuEvents'. This is not getting any clearer.");
    //  continue;
    //} else if (node == e.target) {
    //  console.log(`node ${node} is the target. Toggle 'active' class.`);
    //  node.classList.toggle("active");
    //} else {
    //  console.log(`node ${node} is not the target. Remove 'active' class.`);
    //  node.classList.remove("active");
    //}
  }
}

topMenuEl.addEventListener("click", handlerTopMenuClick);
