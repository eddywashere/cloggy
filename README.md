# cloggy

A minimal debugging utility to replace console statements with [debug](https://github.com/visionmedia/debug) powered logging. This works well with libraries like [redux-logger](https://github.com/evgenyrodionov/redux-logger#logger-object);

## Getting Started

```sh
npm install cloggy
```

In your code, require cloggy and pass in a namespace for your debug statements.

```js
import cloggy from 'cloggy';

const log = cloggy('app');

log.info('Doing something');
log.error('An error happened');
log.debug('Doing something');
log.log('Doing something');
log.warn('Doing something');
```

Debugging can be enabled with space or comma-delimited names in the following ways:

- ***Browser***: Open the browser console and set the following local storage item
    - `localStorage.debug = '*'`
    - `localStorage.debug = '*,-not_this'`
    - `localStorage.debug = 'app:*,section:*'`
- ***Node***: Set `DEBUG` environment variable
    - `DEBUG=* node app.js`
    - `DEBUG=*,-not_this node app.js`
    - `DEBUG=app:*,section:* node app.js`


For more information about `debug`, [check out the docs](https://github.com/visionmedia/debug#usage).

### Methods

 The returned debug object contains the following namespaced log statements.

- `info`
- `debug`
- `log`
- `warn`
- `error`

There's nothing really special about the different methods other than debug assigning unique colors per function.

### Screenshot

Example running in [redux-logger](https://github.com/evgenyrodionov/redux-logger#logger-object) via custom logger object.

![image](https://cloud.githubusercontent.com/assets/399776/16369944/88544f10-3bf0-11e6-92e3-9589e05c460e.png)
