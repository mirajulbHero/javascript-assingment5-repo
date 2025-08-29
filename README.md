1/ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById(id): Selects a single element based on its unique id attribute. HTML id values are intended to be unique within a document.
    getElementsByClassName(className): Selects all elements that have a specific class name.
    querySelector(selector): Selects the first element that matches a specified CSS selector (e.g., #id, .class, tag, [attribute], or combinations thereof). 
    querySelectorAll(selector): Selects all elements that match a specified CSS selector.

2/ How do you create and insert a new element into the DOM?
Ans: The document.createElement() method is used to create a new HTML element node. This method takes the tag name of the element as a string argument.
     You can then set attributes, classes, or content for this newly created element before inserting it into the DOM.
     Once the element is created and configured, it needs to be attached to an existing element in the DOM to become visible on the webpage. Common methods for insertion include:
3/ What is Event Bubbling and how does it work?
Ans:We've seen that a web page is composed of elements — headings, paragraphs of text, images, buttons, and so on — and that you can listen for events that happen to these elements.
    For example, you could add a listener to a button, and it will run when the user clicks the button.
4/What is Event Delegation in JavaScript? Why is it useful?
Ans:Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage events for all its children. This relies on event bubbling, 
    the process where an event on a child element travels up the DOM to its ancestors. Instead of multiple listeners on each child,
    the parent's listener catches events as they bubble up and identifies the original child target. This method is more efficient,
    particularly for web applications with numerous or dynamically added elements. 

5/ What is the difference between preventDefault() and stopPropagation() methods?
Ans:preventDefault() method prevents the browser's default action associated with a specific event from occurring.
    It is used when you want to override the standard behavior that the browser would normally execute for an event.
    
    stopPropagation() method stops the event from propagating further through the DOM hierarchy, either during the capturing phase (from window to target) or the bubbling phase (from target to window).
    It is used when you want to prevent parent or child elements from receiving and handling the same event.
