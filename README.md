# typo.css

**typo.css** is a typography stylesheet to make your content readable.

Preview: [Typo.css](http://typo.reqianduan.com/).

> **typo.css** is not a reset stylesheet.

It is designed for readable article content. If you are looking for a reset css, you are watching the wrong repository.

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

Headings are tags `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>` and `<h6>`. But the most commonly used tags are `<h1>`, `<h2>`, and `<h3>`.

### Emphasis

Emphasis works on something **important** or *valuable*. `<b>` and `<i>` are not designed for this purpose, you should always use `<strong>` and `<em>`.

### Links & Images

[Links](https://github.com/xiangming/typo) are the soul of internet.

![beauty of web design](http://news.oneapm.com/content/images/2015/07/u-4078431349-436439537-fm-21-gp-0.jpg)

Images can be wrappered in a `<figure>` tag:

![beauty of web design](http://news.oneapm.com/content/images/2015/07/u-4078431349-436439537-fm-21-gp-0.jpg "The Beauty of Web Design")

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

> typo.css 并不是为某一特定语言设计的，但是它在英文和中文上表现出色。

## License

MIT.
