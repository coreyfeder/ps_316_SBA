// import "./styles.css";

// ...welp, that didn't work. And I'm failing to make it work.
// So, I'm sticking it back where it wants to be.
let cssLink = document.createElement('link')
cssLink.setAttribute('rel', 'stylesheet');
cssLink.setAttribute('href', 'src/styles.css');
document.getElementsByTagName('head')[0].appendChild(cssLink);


// Menu data structure
//   (Treat this the source data. Don't rearrange or rename anything.)
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
  // create the top-level nav links
  let newLink = document.createElement("a");
  newLink.setAttribute("href", link.href);
  newLink.textContent = link.text;
  topMenuEl.appendChild(newLink);
  // create the sub-menu nav links and
  // stash them under/inside their parents
  if (link.subLinks) {
    for (let subLink of link["subLinks"]) {
      let newSubLink = document.createElement("a");
      newSubLink.setAttribute("href", subLink.href);
      newSubLink.textContent = subLink.text;
      newLink.appendChild(newSubLink);
    };
  };
};

// but we don't want the subMenu nodes visible while they're not in the subMenu.
let submenuStorage = document.createElement("style");
submenuStorage.textContent = '#top-menu a a { display: none; }';
document.querySelector("head").appendChild(submenuStorage);


//Part 2-3
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Part 2-4
let topMenuLinks = document.querySelectorAll("#top-menu a");

topMenuEl.addEventListener("click", handlerTopMenuClick);
subMenuEl.addEventListener("click", handlerSubMenuClick);


function getActive() {
  // would querySelector(".active") be better? or getElementsByClassName("active")?
  return document.querySelector("#top-menu a.active");
}

function isActive(menuEl) {
  return menuEl.classList.contains("active");
}

function activate(menuEl) {
  console.assert(!isActive(menuEl), "Cannot activate active menu item. " + menuEl);
  menuEl.classList.remove('active')
}

function deactivate(menuEl) {
  console.assert(isActive(menuEl), "Cannot deactivate inactive menu item. " + menuEl);
  menuEl.classList.remove('active')
}  

function isClosed(subMenuEl) {
  return subMenuEl.style.top == "0px";
}

function closeSubMenu(subMenuEl) {
  subMenuEl.style.top == 0;
}

function hasSubMenu(navNode) {
  // wait..  navNode.getAttribute('href') != navNode.href  ...are you kidding?
  return navNode.getAttribute('href') == '#';
}  


function moveChildLinks(childrenFrom, childrenTo) {
  // Returns true if any child elements were moved.
  let result = false;
  // don't use .children.length == 0 to check for children when I actually mean to check for children who are Elements
  console.assert(childrenTo.firstElementChild === null, "This primary navigation item already has its secondary links.");
  while (childrenFrom.firstElementChild != null) {
    childrenTo.appendChild(childrenFrom.firstElementChild);
    result = true;
  }
  return result;
}

function closeMenu() {
  // close subMenu and stow links
  if (!isClosed(subMenuEl)) {
    closeSubMenu(subMenuEl);
  };
  let activeEl = document.querySelector("#top-menu a.active");
  if (activeEl) {
    moveChildLinks(subMenuEl, activeEl);
    activeEl.classList.remove('active');
  }
}


function handlerTopMenuClick(e) {
  // handle clicks in the primary nav bar
  e.preventDefault();
  if (e.target.tagName != "A") return;  // ignore clicks in the nav bar's dead space
  console.log(e.target.innerText);

  closeMenu();  // hide and empty the secondary nav bar straight away

  // walk through all the top menu items, not just the one clicked on; a click
  // on one item will affect the others.
  for (let node of topMenuLinks) {
    // desired main nav behavior: at most one item "active" at a time
    // clicking on the active item deactivates it, reverting to initial state.
    if (node == e.target && !isActive(node)) {
      activate(node);
      if (hasSubMenu(node)) {
        moveChildLinks(node, subMenuEl);
        subMenuEl.style.top = '100%';
      }
    } else {
      node.classList.remove("active");
    };
  };

  if (!hasSubMenu(e.target)) {
    document.querySelector('main > h1').textContent = e.target.innerText;
  }
};

function handlerSubMenuClick(e) {
  e.preventDefault();
  if (e.target.tagName != "A") return;  // ignore clicks in the nav bar's dead space
  console.log(e.target.innerText);
  document.querySelector('main > h1').textContent = e.target.innerText;
  closeMenu();
}
