import "./styles.css";
// This isn't working...

// import("./styles.css");

// import sheet from './styles.css' assert { type: 'css' };
// document.adoptedStyleSheets = [sheet];
// shadowRoot.adoptedStyleSheets = [sheet];

// const cssModule = import('./styles.css', { assert: { type: 'css' } } );
// document.adoptedStyleSheets = [cssModule.default];

// const cssModule = await import('./styles.css', { assert: { type: 'css' } });    
// document.adoptedStyleSheets = [cssModule.default];

// Hm. Stumped for now.

const mainEl = document.querySelector("main")
mainEl.style.backgroundColor = 'var(--main-bg);'
let newNode = document.createElement("h1");
newNode.textContent = "DOM Manipulation";
mainEl.appendChild(newNode);
mainEl.classList.add("flex-ctr")
