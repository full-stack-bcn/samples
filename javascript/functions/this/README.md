
The ``this`` variable inside functions
======================================

Functions **always** have a ``this`` variable, which is *implicit*.

If you call a function without a "left object", ``this`` will be [the global object](https://github.com/full-stack-bcn/samples/blob/master/javascript/functions/this/this-no-left-object.js), or, in the browser, [the window object](https://github.com/full-stack-bcn/samples/blob/master/javascript/functions/this/this-no-left-object-browser.js).

If you call a function with a "left object", ``this`` [will be that object](https://github.com/full-stack-bcn/samples/blob/master/javascript/functions/this/this-left-object.js).

