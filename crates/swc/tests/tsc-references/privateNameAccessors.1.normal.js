//// [privateNameAccessors.ts]
import _class_private_field_get from "@swc/helpers/src/_class_private_field_get.mjs";
import _class_private_field_init from "@swc/helpers/src/_class_private_field_init.mjs";
import _class_private_field_set from "@swc/helpers/src/_class_private_field_set.mjs";
var _prop = /*#__PURE__*/ new WeakMap(), _roProp = /*#__PURE__*/ new WeakMap();
class A1 {
    constructor(name){
        _class_private_field_init(this, _prop, {
            get: get_prop,
            set: set_prop
        });
        _class_private_field_init(this, _roProp, {
            get: get_roProp,
            set: void 0
        });
        _class_private_field_set(this, _prop, "");
        _class_private_field_set(this, _roProp, ""); // Error
        console.log(_class_private_field_get(this, _prop));
        console.log(_class_private_field_get(this, _roProp));
    }
}
function get_prop() {
    return "";
}
function set_prop(param) {}
function get_roProp() {
    return "";
}