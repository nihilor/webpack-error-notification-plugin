/*
webpack-error-notification-plugin -- Simple Webpack plugin to notify developers about build errors.
Copyright (c) 2018 Mark Lubkowitz <me@mlu.io>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const notifier = require('node-notifier');
const pluginName = 'ErrorNotificationPlugin'

module.exports = class ErrorNotificationPlugin {
    constructor(options) {
        Object.assign(this, {
            beep: true,
            toast: true
        }, options);
    }

    apply(compiler) {
        compiler.hooks.failed.tap(pluginName, error => {
            if (this.beep && typeof (process) !== "undefined") {
                process.stderr.write('\x07')
            }
            if (this.toast) {
                notifier.notify({
                    title: 'Webpack - Build Failed',
                    message: `${error}`,
                    wait: false
                })
            }
        })

        compiler.hooks.done.tap(pluginName, stats => {
            if (stats.hasErrors()) {
                if (this.beep && typeof (process) !== "undefined") {
                    process.stderr.write('\x07')
                }
                if (this.toast) {
                    console.log(stats.compilation.errors)
                    notifier.notify({
                        title: 'Webpack - Build Ended With Errors',
                        message: `Compilation ended with ${stats.compilation.errors.length} error${stats.compilation.errors.length > 1 ? 's': ''}`,
                        wait: false
                    })
                }
            }
        })
    }
}