//// [propertyAccessOnTypeParameterWithoutConstraints.ts]
var i, a;
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
new (function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    return C.prototype.f = function() {
        var x;
        return x.toString() + x.toString();
    }, C;
}())().f(), i.foo.toString(), i.foo.toString(), a().toString(), a().toString(), ({
    foo: function(x) {
        return x.toString() + x.toString();
    }
}).foo(1);