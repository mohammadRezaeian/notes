---
layout: post
title: "Angular discrete notes"
tags: ["Angular"]
toc: true
lowQuality: 1
notfull: 1
icon: angular.svg
keywords: ""
---

## `:host` with `ViewEncapsulation.None`

👉 [Official doc: ViewEncapsulation](https://angular.io/api/core/ViewEncapsulation)
👉 [Official doc: :host](https://angular.io/guide/component-styles#host)

**Note**: `:host` doesn't work with `ViewEncapsulation.None`!

```css
/* With ViewEncapsulation.Emulated, use :host selector */
:host {
  color: red;
}

/* With ViewEncapsulation.None, use component selector */
app-child-encapsulation-none {
  color: green;
}
```

## Add a class

```html
<div
  class="default-class"
	[class.class-A]="condition"
>Content</div>
```

```html
<div
  class="default-class"
	[className]="'class-a'"
>Content</div>
```

```html
<div
  class="default-class"
	[className]="condition ? 'class-a' : 'other-class'"
>Content</div>
```

```html
<div
  class="default-class"
  [ngClass]="{
  	'class-a': condition-a,
    'class-b': condition-b
  }"
>Content</div>
```

