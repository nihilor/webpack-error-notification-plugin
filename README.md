# ErrorNotificationPlugin

A simple Webpack plugin to notify developers with beeps and platform native toasts about build errors. As soon as the build process of Webpack fails, the plugins beeps and toasts the error message, so the developers won't miss build errors.

## Installation

Install the `ErrorNotificationPlugin` from [npm](https://www.npmjs.com/):

```console
npm install --save-dev webpack-error-notification-plugin
```

## Activation

Two steps are neccessary to activate the plugin. Both happen in the `webpack.config.js` - or whatever you named your configuration file for webpack.

Import the plugin by adding the following line to the to of the configuration file.

```javascript
var ErrorNotificationPlugin = require('../../webpack-error-notification-plugin')
```

Add the `ErrorNotificationPlugin` to the configuration object:

```javascript
plugins: [
    new ErrorNotificationPlugin()
]
```

## Configuration

You can choose the plugin should beep or show toasts by providing the corresponding parameters in your configuration file of webpack.

```javascript
plugins: [
    new ErrorNotificationPlugin({
        beep: true,
        toast: false
    })
]
```

## Prerequisites

The `ErrorNotificationPlugin` makes use of [node-notifier](https://www.npmjs.com/package/node-notifier). This module wraps different notification options for the operating systems Windows, Linux and Mac OS X. In some cases it's neccessary to install a third-party tool like [Growl](http://growl.info/) to see toasts.