# HTImports

AKA Hypertext Imports, HTImports makes it easier to manage imports in your HTML files, so instead of this:
```html
<!--in head-->
<script src="link.to/script.js"></script>
<script src="link.to/other_script.js" type="module"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
```
you have to type this (inside of a .imports file):
```
script link.to/script.js
script link.to/other_script.js module
style style.css
style https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
```

# Installation / Usage

First start by going to your HTML file and then insert this script tag into head:
```html
<script src="https://htimport.enzon3.repl.co/htimport.min.js"></script>
```
Then, in the same folder as your HTML file, create a file called .imports and put your imports there. (SEE BELOW FOR SYNTAX)

## Syntax

Separate imports with newlines

Here's how you import a script:
```
script [link to script] (if es6, type 'module' here)
```

and here's how you import CSS:
```
style [link to stylesheet]
```

# License

Creative Commons Attribution-ShareAlike 3.0
