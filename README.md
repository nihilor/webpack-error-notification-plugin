# ErrorNotificationPlugin

A simple Webpack plugin to notify developers with beeps and platform native toasts about build errors. As soon as the build process of Webpack fails or completes with errors, the plugin beeps and toasts the errors. Developers won't miss build errors again, unless they're afk.

## Installation

Install the `ErrorNotificationPlugin` from [npm](https://www.npmjs.com/package/webpack-error-notification-plugin):

```console
npm install --save-dev webpack-error-notification-plugin
```

## Activation

Two steps are neccessary to activate the plugin. Both take place in the `webpack.config.js` - or whatever you named your configuration file for webpack.

First, import the plugin by adding the following line to the top of the configuration file.

```javascript
var ErrorNotificationPlugin = require('webpack-error-notification-plugin')
```

Second, add the `ErrorNotificationPlugin` to the configuration object:

```javascript
plugins: [
    new ErrorNotificationPlugin()
]
```

## Configuration

You can choose how the plugin notifies the developers: with beeps, with toasts or both. Just provide the parameters `beep` and `toast` in your configuration file of webpack. Set `true` to activate and `false` to disable the notification type.

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