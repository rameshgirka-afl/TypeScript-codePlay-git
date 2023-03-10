// Type aliases - DRY: Don't repeat yourself. 
type Employee = {
    id: number,
    caste?: string,
    name:string,
    cart: Object,
    //inputParam TYPE || logic || 
    funcName:(inputParam: Date) => void;

}

//caller 
//TODO:: let emp1: Employee = {}

// Type Unions and Intersections 
function UnionType(name: string | number){
    //narrow it down if needed
    if (typeof(name) == 'number')
        name.toFixed(2) //fixing to 2 decimals 
    else {
        name.charCodeAt(3) //string method to recieve char code at index:3 of the string. 

    }

}

type Resizeable = {
    resize: (width?: number) => void ;
}

type draggable = {
    drag: (width?: number) => void ;
}



type UIWidget = Resizeable & draggable

let uiwidth: UIWidget = {
    resize: () => 20 ,
    drag: () => 20
}


// Type Narrowing. 

// literal types - numbers or string literal types 
type Quantity = 10 | 20 | 50 | 100 
type Metric = 'kg' | 'grams' | 'kilo'

let weight: Metric = 'kg'


// Nullable types. - caller can't set null 
// strictNullChecks: false. 
//user.funcName(null)
function accomodate_null_Undefined(...inputParam: number[] | null[] | undefined[]){

}

//accomodate_null_Undefined([10,null,undefined])



// Unknown Type 


// Never Type. 