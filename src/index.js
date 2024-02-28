// import "./styles.css";
/* 
Well, THAT line doesn't work locally.
Best I can figure is this is some misplaced remnant of Next.js or SASS or something. Probably used by accident, or maybe someone thought it necessary for the exercise, or maybe it's a trap by CodeSandbox to keep people on their site.

Maybe NBD if you're sure people will stay and work in CodeSandbox, if CodeSandbox were working more reliably; but I'd argue it shouldn't be in a template or boilerplate of an exercise. We can still be put through the DOM manipulation paces even if the page is properly linked to a stylesheet.

Only worth noting because this has been an *enormous* headache trying to set up to work locally. I've spent *hours* trying to work around this "correctly," without feeling like I'm undermining the exercise goals. It's insane. I kept thinking we'd hash it out at office hours, but stuff came up and they were cancelled. Hey, real life happens.

Anyway, for the record: CodeSandbox was causing much _bigger_ headaches. I can sort of deal with weird import routes, but malfunctioning Service Worker registration and straight-up nondeterministic rendering are just too much.

So..._technically_ staying in bounds because I'm not changing the HTML, just the DOM. It feels slimy, but I can't get any work done if I can't actually load the page.
 */
let cssLink = document.createElement('link')
cssLink.setAttribute('rel', 'stylesheet');
cssLink.setAttribute('href', 'src/styles.css');
document.getElementsByTagName('head')[0].appendChild(cssLink);


/* 
Holy crap. Turns out, there are a bunch of output tools besides `console.log()`. Logging at different levels, grouping, built-in counters, and ... OFFS WHY DIDN'T ANYONE TELL US ABOUT `debugger`??
 */
// console.groupCollapsed("Initialization");

// Menu data structure
//   (Let's consider this the source data. Don't rearrange or rename anything.)
const menuLinks = [
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
// console.log("menuLinks", menuLinks);

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
  // top-level nav links
  let newLink = document.createElement("a");
  newLink.setAttribute("href", link.href);
  newLink.textContent = link.text;
  topMenuEl.appendChild(newLink);
  // sub-menu nav links
  if (link.subLinks) {
    // add as anchors and set to hidden
    // if it causes troubles, add them under a <details> node?
    for (let subLink of link["subLinks"]) {
      let newSubLink = document.createElement("a");
      newSubLink.setAttribute("href", subLink.href);
      newSubLink.textContent = subLink.text;
      newLink.appendChild(newSubLink);
    };
  };
};

// but we don't want them visible until they're in the submenu.
let submenuStorage = document.createElement("style");
submenuStorage.textContent = '#top-menu a a { display: none; }';
document.querySelector("head").appendChild(submenuStorage);

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
// (and in this age of "tab proliferation", "every" web app should "expect" to be "long-running")
// and the "users" will be "angry"
// and then I'll be "unemployed" "again"
// and be forced to "learn" to "use" "quotation marks"
// "pro"per"ly"
// ...
// Actually, that article was from 2013. The current documentation indicates it's NBD.
// const handlerTopMenuClick = (e) => {

topMenuEl.addEventListener("click", handlerTopMenuClick);


function moveChildLinks(childrenFrom, childrenTo) {
  // Returns true if any child elements were moved.
  console.debug(`Moving subMenu items from ${childrenFrom} tp ${childrenTo}`)
  let result = false;
  console.assert(childrenTo.children.length == 0, "This primary navigation item already has its secondary links.");
  while (childrenFrom.firstElementChild != null) {
    childrenTo.appendChild(childrenFrom.firstElementChild);
    result = true;
  }
  return result;
}


function hasSubMenu(navNode) {
  // navNode.getAttribute('href') != navNode.href  ...are you f'n kidding me?
  console.log(`hasSubMenu > ${navNode.textContent}: ${navNode.getAttribute('href')} `)
  return navNode.getAttribute('href') == '#';
}


function handlerTopMenuClick(e) {
  // when we sense a click in the upper nav, do stuff.

  // prevent default behavior: in this case... don't go reloading the page?
  e.preventDefault();

  if (e.target.tagName != "A") return;  // ignore clicks in the nav bar's dead space

  // hide and empty the secondary nav bar straight away
  //   doing this for everything simplifies the logic below, but it's lazy.
  if (subMenuEl.style.top != "0px") {
    subMenuEl.style.top = 0;
    console.assert(true == 
      moveChildLinks(subMenuEl, document.querySelector("#top-menu a.active")),
      "Why was the submenu open if no items were removed?"
      )
  };

  // walk through all the top menu items, not just the one clicked on; a click
  // on one item will affect the others.
  for (let node of topMenuLinks) {
    // desired main nav behavior: at most one item "active" at a time
    // clicking on the active item deactivates it, reverting to initial state.
    if (node == e.target && !node.classList.contains("active")) {
      node.classList.add("active");
      if (hasSubMenu(node)) {
        moveChildLinks(node, subMenuEl);
        subMenuEl.style.top = '100%';
      }
    } else {
      node.classList.remove("active");
    };
  };
};

