# Renders json as html

**Example**

```javascript
$('body').render([
  {
  el: 'div',
  attrs: {
    'class': 'wrapper'
  },
  html: [{
    el: "h2",
    html: "This is the title"
  }, {
    el: "p",
    html: "this is some text in here."
  }]
},
  {
    el:'em',
    html:'hello there'
  }
]);
```