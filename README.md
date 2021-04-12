# Aurora.js

Aurora design implementation for React

## Install

`npm install --save @psudocode/aurora.js`

## Usage

```js
import Aurora from "@psudocode/aurora.js";
...
<Aurora
  opacity={0.5}
  sides={2}
  style={{ width: 300, height: 300, borderRadius: 10 }}
>
  Your other components
</Aurora>
```

Note: Aurora act like a div with some default style `{ position: 'relative', overflow: 'hidden' }`

## Props

| Props   | Descriptions         | Default |
| ------- | -------------------- | ------- |
| sides   | Total colors, 1 - 4  | 3       |
| opacity | Global color opacity | 0.8     |

## License

[MIT](http://vjpr.mit-license.org/)
