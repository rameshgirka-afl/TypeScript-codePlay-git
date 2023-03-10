"use strict";
// any 
const var_name = 'string_only';
let any_var;
function safeMethod(input_param) {
}
// Arrays - variable 
let numberArray = [1, 2, 2, 3, 3, 5];
numberArray.forEach(n => n.toLocaleString());
// code commpletion for number type inside VS Code. 
// values inside array or now only number Type. 
//back comptiable any Array 
let anyArray = ['1', true, new Number(100), 101, undefined, null];
// Tuples  - Type Scipt data Type:: 
let user = [1, "Ramesh",]; //cant hold more than 2 elememts: Fixed size array is tuple. 
// Enums - Type Script data Type: List of related CONSTANTS small= S, medium = M, large = L 
const small = 'S';
const medium = 'M';
const large = 'L';
//declare enum 
var Size;
(function (Size) {
    Size["Small"] = "S";
    Size["Large"] = "L";
    Size["XtraLarge"] = "XL";
})(Size || (Size = {}));
let mySize = Size.XtraLarge;
console.dir(mySize);
// functions 
function noUnused_Params_Demo(paramName, kwarg1) {
    //default noUnusedParameters: false - hence no complains. 
    // expecting arguments: 1 - strict list of args. 
    //noUnusedLocals - unused variables alert. && Declared but never used. 
    if (paramName == true)
        return 'enabled';
    //noImplicitReturns during code branchs.
    //default return of undefined..
    // ? optional arguments but make sure it returns / give default values. 
    if (typeof (kwarg1) == 'number')
        return kwarg1 * 100;
    // provide default value for kwarg1 incase not provided by caller. 
    if (kwarg1 = (kwarg1 || 11))
        return kwarg1 * 100;
    // kwarg1 is provided with default value to mute "undefined" scream of typescript for an argument. 
    return 'disabled';
    // return 'disabled' || 11;
}
// use function with out kwarg1
noUnused_Params_Demo(false, 11);
noUnused_Params_Demo(false);
//Objects 
