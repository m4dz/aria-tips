# Aria-tips

A simple tooltip component using aria for declarative instanciation.

We often want some tooltips to get extra-information about what an element does. Guess what…? We already have an ARIA role to describe those kind of helper: [`role=tooltip`](http://www.w3.org/TR/wai-aria/roles#tooltip). Linked with the [`aria-describedby`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby) property, we can simply link tooltips to elements. What we need is just a little engine to use those declarations, and _Aria-tips_ is what you need (: or, at least, what I need :).


## Installation

Simply put the `aria-tips.js` and `aria-tips.css` (available in the `public/lib` directory, or from the release page) to your `vendors` scripts and styles. Then, link them in you document:

```html
<head>
    <link rel="stylesheet" href="lib/aria-tips.css">
    <script async src="lib/aria-tips.js"></script>
</head>
```

_Note_: If you use a builder tool, you'll probably want to wrap the script / css files direclty in your final build.


## Use

First, simply declares your element and its attached tooltip:

```html
<button aria-describedby="tooltip-bottom" aria-label="ctrl+o">hover me ↓</button>
<p role="tooltip" id="tooltip-bottom" data-tooltip-direction="bottom" aria-hidden="true">this is the hover description in a tooltip :]</p>
```

What's important here are:
- on the element:
    - `aria-describedby`: must contains the element `id` of the dedicated tooltip
- on the tooltip:
    - `role=tooltip`: describes it as a tooltip
    - `id`: the id used to link it the the element
    - `data-tooltip-direction`: the direction the tooltip will be attached to the element. Must be one of [`top`, `right`, `bottom`, `left`]
    - `aria-hidden=true`: because we don't want the tooltip always be visible, do we?

Note that:
- the tooltip isn't nor need to be nested in the element in any kind of manner
- the tooltip can be declared everywhere in the document as we use the `id` to find it
- many elements can use the same tooltip ;)

If you bind a same tooltip to many elements, and you want it to be attached in a different direction for some elements, you can override the tooltip direction value by passing the same `data-attribute` to the element, as in:

```html
<span aria-describedby="tooltip-bottom" data-tooltip-direction="left">another element for same tooltip, will appear attached to the left side</span>
```

You can also pass extra content to the tooltip using the [`aria-label`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-label) attribute. I originally use it to describe the keyboard shortcuts bound to an element. So if a `aria-label` attribute is on the element, _aria-tips_ will append it in a `pre` element inside the tooltip when it appears.


## Styles

The given stylesheet provides basic styles for tips (such as colors) and animatio. You should probably want to keep it as it, but you can also build your own styles and transition effects.

If you just want to customize tips rendering, you can simply deal with background-color / shadow-color / arrow-width to adapt it to your design. You can do it in another stylesheet or use the provided stylus one and change top-variables values.
