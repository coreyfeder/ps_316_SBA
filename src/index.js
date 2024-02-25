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

import "./styles.css";

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
// apPARently, I shouldn't use "anonymous functions" as "callback functions"
// because the handlers can't be removed "safely" or maybe "at all"
// so they will "create memory leaks"
// and the apps will "slow to a crawl" or "crash"
// especially with "long-running" web apps
// (and in this age of "tab proliferation", every web app should "expect" to be "long-running")
// and the "users" will be "angry"
// and then I'll be "unemployed" "again"
// and be forced to "learn" to "use" "quotation marks"
// "pro"per"ly"
// ...
// Actually, that article was from 2013. The current documentation indicates it's NBD.
// const handlerTopMenuClick = (e) => {
function handlerTopMenuClick(e) {
    console.log("DEBUG > handlerTopMenuClick fired");
    console.log("DEBUG > JSON.stringify(e)"); // I don't know what it looks like
    console.log(JSON.stringify(e)); // I don't know what it looks like
    console.log("DEBUG > e.target");
    console.log(e.target);
    // console.log(e.target.tagName);
    // console.log(e.target.textContent);

    // without this, preventDefault stays in effect.
    // If I reload the page, all my earlier instructions are run again.
    // I either have to stop it here, or put in extra plumbing above
    // making the setup instructions idempotent
    e.preventDefault();
    e.stopPropagation();  
    if (e.target.tagName != "A") {
        return;
    }

    return e.target.textContent;
}

topMenuEl.addEventListener("click", handlerTopMenuClick);
