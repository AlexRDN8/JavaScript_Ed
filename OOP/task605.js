// __proto__ Object.create
// prototype
// Object.defineProperty (set/get/descriptors)

// this-1 (new, default behavior)
// this-2 (apply/call/bind)

// https://www.youtube.com/watch?v=Qn3Qah7W6Vs

/*
In this Kata, you have to design a simple routing class for a web framework.

The router should accept bindings for a given url, http method and an action.

Then, when a request with a bound url and method comes in, it should return the result of the action.

Example usage:

var router = new Router;
router.bind('/hello', 'GET', function(){ return 'hello world'; });

router.runRequest('/hello', 'GET') // returns 'hello world';
When asked for a route that doesn't exist, router should return:

'Error 404: Not Found'
The router should also handle modifying existing routes. See the example tests for more details.
*/
var Router = function()
{

}