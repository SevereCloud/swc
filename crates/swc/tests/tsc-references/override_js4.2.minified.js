//// [override_js4.ts]
//// [a.js]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
!function(A) {
    "use strict";
    _inherits(B, A);
    var _super = _create_super(B);
    function B() {
        return _class_call_check(this, B), _super.apply(this, arguments);
    }
    return B.prototype.doSomethang = function() {}, B;
}(function() {
    "use strict";
    function A() {
        _class_call_check(this, A);
    }
    return A.prototype.doSomething = function() {}, A;
}());