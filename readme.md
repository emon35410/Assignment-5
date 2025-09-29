1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById → single element by ID

getElementsByClassName → all elements with a class

querySelector → first element matching a CSS selector

querySelectorAll → all elements matching a CSS selector

2. How do you create and insert a new element into the DOM?

document.createElement() → create element

innerText / innerHTML → add content

appendChild() → insert into DOM

3. What is Event Bubbling and how does it work?

Event starts at child and bubbles up to parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?

Add one listener on parent to handle all child events.

Useful for fewer listeners and dynamic elements.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() → stops default action (e.g., link click)

stopPropagation() → stops event from reaching parent elements