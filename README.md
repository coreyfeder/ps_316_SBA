https://www.canva.com/design/DAFriiiv6ao/a0I0JHC1iA_ZzgK2qv6itg/view

# Instructions

_Do not_ modify any of the contents of the `index.html` or `styles.css` files. Your goal in this lab is to demonstrate DOM manipulation through JavaScript. As such, directly modifying the HTML or CSS files is counterproductive.

Take five minutes to familiarize yourself with `CSS Custom Properties` (variables) - they are an amazing addition to CSS. If you are familiar with using variables with SASS/LESS pre-processors, CSS Custom Properties are similar but far more powerful because they are dynamic (their values can be changed during runtime) - and they are built into the CSS language!

Start the project by building a main content element using the following steps:

1. Select and cache the `<main>` element in a variable named `mainEl`.
2. Set the background color of `mainEl` to the value stored in the `--main-bg` CSS custom property.

    - Hint: Assign a string that uses the CSS `var()` function like this: `var(--main-bg)`.

3. Set the content `ofmainEl` to `<h1>DOM Manipulation</h1>`. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
4. Add a class of `flex-ctr` to `mainEl`.
    - Hint: Use the `Element.classList` API.
