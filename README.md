# Aurora.js

[![install size](https://packagephobia.com/badge?p=@psudocode/aurora.js)](https://packagephobia.com/result?p=@psudocode/aurora.js)

![npm bundle size](https://img.shields.io/bundlephobia/min/@psudocode/aurora.js)

![npm](https://img.shields.io/npm/dm/@psudocode/aurora.js)

![GitHub issues](https://img.shields.io/github/issues/psudocode/aurora.js)

![NPM](https://img.shields.io/npm/l/@psudocode/aurora.js)

![npm](https://img.shields.io/npm/v/@psudocode/aurora.js)

Aurora design implementation for React.

NOTE: for now it's just give you random colors

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

### Props

| Props   | Descriptions         | Default |
| ------- | -------------------- | ------- |
| sides   | Total colors, 1 - 4  | 3       |
| opacity | Global color opacity | 0.8     |

## TODO

- add feature to implement other than div component
- add feature to generate color and position by seeds

## License

[MIT](http://vjpr.mit-license.org/)
