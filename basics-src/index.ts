// any 

const var_name:String = 'string_only'
let any_var;

function safeMethod(input_param: any ){

}

// Arrays - variable 
let numberArray: number[] = [1,2,2,3,3,5]
numberArray.forEach(n => n.toLocaleString())
// code commpletion for number type inside VS Code. 


// values inside array or now only number Type. 
//back comptiable any Array 
let anyArray: any[] = ['1',true,new Number(100),101,undefined,null]


// Tuples  - Type Scipt data Type:: 
let User: [number, string] = [1, "Ramesh",]  //cant hold more than 2 elememts: Fixed size array is tuple. 


// Enums - Type Script data Type: List of related CONSTANTS small= S, medium = M, large = L 
const small = 'S'
const medium = 'M'
const large = 'L'
//declare enum 
enum Size {Small = 'S', Large = 'L', XtraLarge ='XL'}

//less verbose and optimal code in index.js
const enum Sizes {Small = 'S', Large = 'L', XtraLarge ='XL'}
let mySize: Size = Size.XtraLarge

console.dir(mySize)



// functions 

function noUnused_Params_Demo (paramName: boolean, kwarg1?: number,default_arg =11): string|number {
    //default noUnusedParameters: false - hence no complains. 
    // expecting arguments: 1 - strict list of args. 

    //noUnusedLocals - unused variables alert. && Declared but never used. 
     
    if (paramName == true) return 'enabled'
    //noImplicitReturns during code branchs.
    //default return of undefined..
    
    // ? optional arguments but make sure it returns / give default values. 
    if(typeof(kwarg1) == 'number') return kwarg1*100
    // provide default value for kwarg1 incase not provided by caller. 
    if(kwarg1 = (kwarg1 || 11)) return kwarg1*100

    // kwarg1 is provided with default value to mute "undefined" scream of typescript for an argument. 

    return 'disabled'
   
    // return 'disabled' || 11;
    



}

// use function with out kwarg1
noUnused_Params_Demo(false,11)
noUnused_Params_Demo(false)


//Objects - shape is "Dynamic " && INFERRED

let user: {
    id: number,
    caste?: string,
    name:string,
    cart: Object,
    //inputParam TYPE || logic || 
    funcName:(inputParam: Date) => void;
}

// 1. assign user with some initial values. - CAN't SKIP 
user = {id: 1001,caste:'BullShit', name:'Ramesh', cart:[],funcName:(date: Date) => console.log(date) }

user.cart = ['item1','item2']

console.dir(user)

