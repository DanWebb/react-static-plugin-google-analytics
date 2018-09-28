# react-static-plugin-google-analytics

A [React-Static](https://react-static.js.org) plugin that adds [Google Analytics tracking](https://analytics.google.com/analytics/web/)

## Installation

In an existing React-Static site run:

```bash
$ yarn add react-static-plugin-google-analytics
```

Then add the plugin to the default export of your `static.config.js` and specify your [Google Analytics traking ID](https://support.google.com/analytics/answer/7476135?hl=en) inside an options variable:

```javascript
export default {
  plugins: [
    ["react-static-plugin-google-analytics", {id: 'GOOGLE ANALYTICS ID'}]
  ]
};
```

For more info on React-Static plugins [see the docs](https://github.com/nozzle/react-static/blob/v6/docs/plugins.md).