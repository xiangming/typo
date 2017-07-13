# typo.css

**typo.css** is a typography stylesheet designed for better reading experience.

Demo: [Typo.css](http://typo.reqianduan.com/).

## Installation

Install with [bower](http://bower.io):

    $ bower install typo

If you don't use bower, you can just grab the css file from [GitHub](https://github.com/xiangming/typo). There is no dependency of this project.

## API

For readable content, wrapper them under the `.typo` class, and everything would be OK now:

```css
<div class="typo">
    <h1>Heading</h1>
    <p>Paragraph of contents</p>
    ...
</div>
```

## Tags

**typo.css** supports these commonly used tags.

Tag Name   | Description
---------- | -----------------------------
h1 - h6    | headings for title
p          | paragraph
a          | anchor links
strong b   | emphasis in bold style
em i       | emphasis in italic style
img        | image
figure     | figure wrapper for images
figcaption | figcaption in figure
hr         | separator
blockquote | style for quotes
ul ol li   | ordered and unordered list
pre        | code block
code tt    | inline code
table ..   | tables (not well designed)
iframe     | embed iframe style
mark       | mark some text


### Headings

Headings are tags `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>` and `<h6>`.

### Emphasis

Emphasis works on something **important** or *valuable*. `<b>` and `<i>` are not designed for this purpose, you should always use `<strong>` and `<em>`.

### Links & Images

[Links](https://github.com/xiangming/typo) are the soul of internet.

![beauty of web design](https://images.unsplash.com/photo-1429277005502-eed8e872fe52?crop=entropy&fit=crop&fm=jpg&h=300&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=600)

Images can be wrappered in a `<figure>` tag:

![beauty of web design](https://images.unsplash.com/photo-1429277005502-eed8e872fe52?crop=entropy&fit=crop&fm=jpg&h=300&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=600 "The Beauty of Web Design")

### List

There is ordered list `<ol>` and unordered list `<ul>`.

* Unordered list is tagged in `<ul>`
* Another item of unordered list
    1. An ordered list in un ordered list
    2. Another ordered item
* Unordered list can has unordered list children
    * Item of the children
    * Another item of the children

----

1. Ordered list is tagged in `<ol>`
2. Each item is tagged in `<li>`

----

## Note

typo.css has no target language, however it looks great in both English and Chinese.

## License

MIT.
