//Typescript - Generics
const toArray=(x:any,y:number,z:number)
{
    return [x,y,z]
}
let array=toArray('1',2,3)
console.log(array);
const toArrayGeneric=<A>(x:A,y:A,z:A)
{
    return [x,y,z]
}
let array1=toArrayGeneric('1','2','3')
console.log(array);
