//// [mergedInheritedClassInterface.ts]
var child, grandchild;
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
!function(BaseClass) {
    "use strict";
    _inherits(Child, BaseClass);
    var _super = _create_super(Child);
    function Child() {
        return _class_call_check(this, Child), _super.apply(this, arguments);
    }
    return Child.prototype.method = function() {}, Child;
}(function() {
    "use strict";
    function BaseClass() {
        _class_call_check(this, BaseClass);
    }
    return BaseClass.prototype.baseMethod = function() {}, BaseClass;
}()), child.required, child.optional, child.additional, child.baseNumber, child.classNumber, child.baseMethod(), child.method(), grandchild.required, grandchild.optional, grandchild.additional2, grandchild.classString, grandchild.method2();