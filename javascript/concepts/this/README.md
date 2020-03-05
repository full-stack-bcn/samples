
The ``this`` variable inside functions
======================================

The ``this`` variable exists everywhere. In the global context, 
[it points to the global object](https://github.com/full-stack-bcn/samples/blob/master/javascript/concepts/this/this-global-object.js).

Functions **always** have a ``this`` variable, which is *implicit* (it is not declared).

* If you call a function without a "left object", ``this`` will be 
  [the global object](https://github.com/full-stack-bcn/samples/blob/master/javascript/concepts/this/this-no-left-object.js), 
  or, in the browser, 
  [the window object](https://github.com/full-stack-bcn/samples/blob/master/javascript/concepts/this/this-no-left-object-browser.html). In strict mode (with ``"use strict";``), 
  [this does not happen](https://github.com/full-stack-bcn/samples/blob/master/javascript/concepts/this/this-global-object-use-strict.html),
  the ``this`` within a function is ``undefined``.

* If you call a function with a "left object", ``this`` 
  [will be that object](https://github.com/full-stack-bcn/samples/blob/master/javascript/concepts/this/this-left-object.js).

Therefore, "all functions are methods", but if they are called without an object, they use the global object (in non-strict mode).


Constructors
------------

A function 
[can be used as a constructor](https://github.com/full-stack-bcn/samples/blob/master/javascript/concepts/this/function-constructor.js)
by using the ``new`` operator, which creates a new object and binds it to the function's ``this``.


Unbinding and ``bind``
----------------------

Even if we declare a method inside an object, it is an independent ``function`` object, so
[if we use it standalone](https://github.com/full-stack-bcn/samples/blob/master/javascript/concepts/this/method-unbind.js) 
we loose the connection with its original object, because binding is done at the moment of the call.

However, functions have a ``bind`` method which 
[sets the ``this`` variable](https://github.com/full-stack-bcn/samples/blob/master/javascript/concepts/this/function-bind.js) 
inside the function. ``bind`` returns a *new* function which is bound permanently.


Arrow functions
---------------

By definition arrow functions don't have a ``this`` variable. But we can still use it because
[it is taken from the lexical context](https://github.com/full-stack-bcn/samples/blob/master/javascript/concepts/this/arrow-this-from-lexical-scope.js). 
Inside a function which does have ``this``, 
[an arrow function will use it](https://github.com/full-stack-bcn/samples/blob/master/javascript/concepts/this/arrow-this-from-method.js).


Event Handlers
--------------

In the browser, event handlers 
[receive the target element in the ``this`` variable](https://github.com/full-stack-bcn/samples/blob/master/javascript/concepts/this/event-handler-this.html).
