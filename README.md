# ALAB 316: DOM Manipulation

  * [ALAB 316.1.1: DOM Manipulation (Part One)](https://www.canva.com/design/DAFriiiv6ao/a0I0JHC1iA_ZzgK2qv6itg/view)
  * [R-ALAB 316.3.1: DOM Manipulation (Part Two)](https://www.canva.com/design/DAFrigQgiRw/WFebhXc9I-hpJappzXGPNQ/view)


## Summary: Instructions & Objectives

Create a two-tiered navigation bar and give it some event-driven interactive elements..._without_ making any changes to the HTML. Instead, use JavaScript to manipulate the DOM.


## Implementation Notes

### `import "./styles.css";`

Well, THAT line didn't work locally. Best I can figure is this is some misplaced remnant of Next.js or SASS or something. Probably used by accident, or maybe someone thought it necessary for the exercise, or maybe it's a trap by CodeSandbox to keep people on their site.

NBD if CodeSandbox were working more reliably; but I'd argue it shouldn't be in a template or boilerplate of an exercise. We can still be put through the DOM manipulation paces even if the page is properly linked to a stylesheet.

Only worth noting because this has been an *enormous* headache trying to set up to work locally. I've spent *hours* trying to work around this "correctly," without feeling like I'm undermining the exercise goals. It's insane. I kept thinking we'd hash it out at office hours, but stuff came up and they were cancelled. (Hey, real life happens.)

Anyway, for the record: CodeSandbox was causing much _bigger_ headaches. I can at least try to work around weird import routes misbehaving, but malfunctioning Service Worker registration and straight-up nondeterministic rendering are just too much.

So...maybe _technically_ I'm staying in bounds because I'm not changing the HTML, just the DOM? But I'm directly undoing something probably done deliberately. It feels slimy, but it's all just pseudocode if I can't actually load the page.

### `buildSubmenu`

I removed this helper. We have already created and inserted nodes. For the submenu, I create the nodes beforehand, and let them hang about as hidden children of the top-level nav nodes. Then, when it's time to activate or deactivate them, the nodes move onto or off of the secondary nav.

I don't know the overhead of moving nodes versus changing their makeup, but I expect moving structural DOM around is much _worse_, so I wouldn't do this in a live environment. I just hate searching for things in lists. Traverse, compare, break when you find it. Then build another of a thing we already have. Moving nodes about is more interesting and challenging. And the assignment does say, "There are many ways to arrive at the same solution in development...If it works, good job!" So hopefully it keeps working.

### `console.log`

This is the worst `print` statement I've ever seen. It feels completely random whether it will produce a useful line of text, a mixture of useful and obtude text, an obscenely-long list of default object properties burying any useful information, or—most infuriatingly—just the word "object". It may as well say "bits."

But it turns out there are other options! Different log levels, log message grouping, built-in counters, and... offs, _why didn't anyone tell us about `debugger`?_ :cry: Isn't fussing with the live data the whole _point_ of using a console??

