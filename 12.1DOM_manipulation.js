
/*   DOM- Document Object Model

No matter hoe much complexity is in your app , multiple pages,scripts,links,css files etc. but at the end of the day for browser its treated as a single HTML document.Each element in this document is in form of object hence its called DOM.

DOM is a tree like structure with nodes and edges. Each node is an object with properties and methods. Each edge is an object with properties and methods.

window object: global object of browser.Everything on viewport of browser is under window object
document object: main object of HTML document.Everything on a particular webpage  is under document object.

*/

// DOM tree structure:


/*

<!DOCTYPE html>       ---> tells the type of document like here its HTML
<html lang="en">      ---> main tag, webpage starts from here
<head>                ----> one of the main and direct child of html tag
    <title>Document</title>
</head>
<body>    ---> another main and direct child of html tag
    <div class='container'>
    <h1>Hello</h1
    </div>
</body>
</html>


so this is a simplest HTML doc.All the websites have a single HTML document which looks like this and appears on browser as it is.

Below is the tree structure of above HTML document in browser

    window
        → document
            → html
                → head
                    → title   
                → body
                    → div
                        → class                     // attribute
                        → h1                       // node
                            → textnode            // node
                            


so dom tree is a collection if nodes and attributes only.Like div is node under body and it has an attribute called 'class' and have a node called h1.Text,enter,linebreak,space,tab everything is a node.

more better way is to understand it like this: Everything is a node. for ex- when we focus on window obj, everything under it is a node- document,html,head,body etc.when we focus on html then head,title,body,div,h1 etc are nodes.when we focus on body then div,h1 etc are nodes.

These are also called chilren. we'll say html have 2 direct children -head and body but all the children are- head,title,body,div,h1 etc. in which title,div,h1 are indirect children.

*/



/*  why do we need DOM?

if we want to add dynamic behaviour to our websites then we need to inject JS into html doc and for that we need to know DOM.
we can't insert everything in html doc at once, some UI needs to be changed as per user interaction like clicking on buttons and etc.so all that is only possible through JS in html doc.so the DOM structure which is created on browser for our website needs to be manipulated and accordingly change the UI and all, this is where DOM comes in.


so mainly our foucs will be:

1. How to target elements (nodes) of html doc appearing on browser
2. How to add something to our html doc.
3. How to update something in our html doc.
4. How to delete something in our html doc.

we'll target elements in our local html doc and manipulate them with JS, that will reflect in browser as well.

*/

