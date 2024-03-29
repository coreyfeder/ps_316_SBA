# SBA 316: The Document Object Model

https://perscholas.instructure.com/courses/1923/assignments/355836
https://www.canva.com/design/DAFrivz5SU8/iMU_mM_m1Ecy86yalZmQCQ/view

## Objective

Create a small web application. Topic and contents are open-ended and unimportant!

## Minimum Requirements

| Task or Feature | Weight |
| :-- | --: |
| Cache at least one element using selectElementById. | 5% |
| Cache at least one element using querySelector or querySelectorAll. | 5% |
| Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.). | 5% |
| Iterate over a collection of elements to accomplish some task. | 10% |
| Create at least one element using createElement. | 5% |
| Use appendChild and/or prepend to add new elements to the DOM. | 5% |
| Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. | 2% |
| Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent. | 10% |
| Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties. | 5% |
| Modify at least one attribute of an element in response to user interaction. | 3% |
| Register at least two different event listeners and create the associated event handler functions. | 10% |
| Use at least two Browser Object Model (BOM) properties or methods. | 3% |
| Include at least one form and/or input with HTML attribute validation. | 5% |
| Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.) | 5% |
| Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). | 10% |
| Commit frequently to the git repository. | 5% |
| Include a README file that contains a description of your application. | 2% |
| Level of effort displayed in creativity, presentation, and user experience. | 5% |


## Waitaminute...

> "You're starting with the lab! This starts with a direct copy of your work from R-ALAB 316.3.1!"

Yes, I am! And yes, it does! It's still fresh in my mind and fingertips. The lab assignment hasn't even been graded yet, so I must be extremely confident of its quality. (No, I'm not; but like every other show of confidence necessary in job hunting, I'm trying hard to fake it!) But most importantly, it is, as noted, my own work.

Like many back-end thinkers, I find making design decisions to be truly torturous; it reliably takes far more time and causes far more distress than the skills purportedly being tested. I will of course push pixels as required, but I much prefer pushing bits.

We're often being told to work smarter, not harder; and we're often told that engineers are lazy. Check and check.

## POKÉDUX

I'm also adding the Pokedex we made as one of the pages. But I don't want it do be a direct drop with no changes made, so I have changed the API calls to make paged calls—getting a batch of monster data with a single API call, rather than one at a time. I'm also letting the user decide the page size, rather than having a fixed number, and allowing them to skip to whichever page they want. (This will get me some user inputs to validate; no pages showing -32.5 monsters, no skipping to page "DOG", etc.) And, most importantly, I'm dynamically superimposing a .png on top of the monster images so that they will all have duck bills. Er...I mean, I'm introducing the world to my completely original collectible duck monsters, handily tracked in this Pokéduxedex! "Pokédux! Gotta collect 'em obsessively until you run out of money!"
