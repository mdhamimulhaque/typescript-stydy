//===> tuples
// const myArr:[string,number,boolean,number] =["tamal",20,true,55]

// ===> optional 
// interface MyObj{
//    readonly name: 'tamal';
//     age: number;
//     home: string;
//     married?: boolean;
// }
// const myObj:MyObj={
//     name:"tamal",
//     age:20,
//     home:"narail",
//     married:false
// }
// console.log(myObj)

// ===> normal function
// function myFun(num:number,num1:number):number{
// return num + num1
// }

// const res:number = myFun(10,20)
// console.log(res)

// ===> arrow function
// const myFun =(num:number,num1:number):number=>num + num1;
// console.log(myFun(10,50))

// ===> callback function (map)
// const arr=[10,20,30]
// const res = arr.map((ele:number)=>ele*ele)
// console.log(res)

// ===> method
// const myInfo ={
//     name:"himel",
//     age:20,
//     married:false,
//     balance:200,
//     addIncome1(money:number):number{
// return this.balance + money
//     }
//     addIncome(money:number):string{
// return `this is my total income ${this.balance + money}`
//     }
// }

// console.log(myInfo.addIncome1(300))
// console.log(myInfo.addIncome(300))

// ===> default parameter
// function paraFunc(num:number,num1:number=100){
//     return num + num1
// }
// const res =paraFunc(20)
// console.log(res)

// ===> rest parameter
// const getFriends =(...friends:string[]):void=>{
// // console.log(friends)
// friends.map((frnd:string)=>console.log(frnd))
// }

// getFriends("emon","noor","sakib","anik")

// ===> type alies with function
// type OperationTypes=(x:number,y:number)=>number

// const calculator=(
//     num:number,
//     num2:number,
//     operation:OperationTypes
//     )=>{
//  return operation(num,num2)
// }

// calculator(10,10,(x,y)=>x+y)

// ===> union types
// type NoobDeveloper ={
//     name:string
// }

// type ProDeveloper={
//     name:string,
//     age:number,
//     marrage:boolean
// }

// const newDeveloper:NoobDeveloper|ProDeveloper={
//     name:"tamal",
//     age:20,
//     marrage:true
// }
// console.log(newDeveloper)

// ===> intersection type(&)
// type CollegeInfo={
// clgName:string
// }

// type StudentInfo= CollegeInfo & {
//     name:string,
//     roll:number,
//     registration:number
// } 

// type ResultTypes = StudentInfo &{
//     grade:string,
//     marks:number
// }
// const bio:ResultTypes={
//     clgName:"govt",
//     name:"tamal",
//     roll:2324,
//     registration:53546,
//     grade:"A",
//     marks:80
// }

// ===> enums
// enum College{
//     honours,
//     degree,
//     masters
// }

// enum User{
//     seller,
//     admin,
//    buyer
// }

// type UserType ={
//     role:User.seller
// }

// ===> null types
// const searchName =(value:string|null)=>{
// if(value === null){
// console.log('there is nothing to search')
// }else{
//     console.log('searching...')
// }
// }

// searchName(null)

// ===> unknown types
// const myCarSpeed=(speed:unknown)=>{
// if(typeof speed === "number"){
//     const convertedSpeed = (speed*1000) / 3600;
//     console.log(`my speed is ${convertedSpeed}`)
// }

// if(typeof speed === "string"){
// const [value,unit] = speed.split(" ")
// const convertedSpeed = (parseFloat(value)*1000) / 3600;
//     console.log(`my speed is ${convertedSpeed}`)
// }

// }

// myCarSpeed(20)
// myCarSpeed('10 km-hr')


// ===> never types
// function throwError(message:string):never{
// throw new Error(message)
// }

// throwError('this is an custom  error')

// ===> nullish coalesnace operator
const age:number=20;
// ---> ternary operator
const isAdult = age >= 18 ? "yes" : "No";

// ---> 
// const isAuthenticateUser = null;
// const isAuthenticateUser = '';
// const userName = isAuthenticateUser ?? "guest";
// console.log({userName})


// type UserTypes={
//     name:string,
//     age:number,
//     address:{
//         village:"vhawakhali",
//         post:"ratangang",
//         road?:string
//     }
// } 

// const user:UserTypes={
//     name:"himel",
//     age:22,
//     address:{
//         post:"ratangang",
//         village:"vhawakhali",
//     }
// }

// const road = user?.address?.road ?? 'no home'
// console.log(road)


// ===> type assertion
// let num:any;
// num=102;

// (num as number).toString()
// ---
// function myFun(params:string|number):string|number|undefined{
// if(typeof params === "string"){
//     const value = parseFloat(params)*10
// return `the value is ${params}`
// }
// if(typeof params === "number"){
//     const value =params*10
// return value
// }
// }

// const res = myFun(10) as number;
// const res1 = myFun("200") as string;
// console.log(res1)

// ---
// type CustomErrorType={
//     message:string
// }

// try{

// }catch(err){
// console.log((err as CustomErrorType).message)
// }


// ===> interface
// ---> extend with interface
// interface IUser{
//     name:string,
//     age:number
// }

// interface IExtendUser extends IUser{
//     village:string,
//     district:string
// }
// const user:IExtendUser={
// name:"dfds",
// age:32,
// village:"vhakhali",
// district:"narail"
// }

// ---> extend with types
// type User ={
//     name:string,
//     age:number
// }

// type extendUser = User & {
//     village:string,
//     district:ScrollSetting
// }


// ---> function
// interface IAddNumber{
//     (x:number,y:number):number
// }
// -->
// type AddNumberType = (x:number,y:number) =>number

// const addNumber:AddNumberType=(x,y)=>x+y
// const res= addNumber(10,20)
// console.log(res)

// ---> indexing nature
// interface IRollNumbers{
//     [index:number] : number
// }
// const rollNumber:IRollNumbers = [1,5,9]

// ===> Generic type
// const rollNumber:Array<number> =[10,20,30];
// const rollNumber1:Array<string> =["aaa","bbb","ccc"];
// const rollNumber2:Array<boolean> =[true,false];
// --->
// type GenericArray<T> = Array<T>

// const rollNumber:GenericArray<number> = [11,22,33];
// const rollNumber2:GenericArray<string> = ["aaa","bbb","ccc"];
// const rollNumber3:GenericArray<boolean> = [true,false];

// type NameRollType ={name:string,roll:number}

// const userNameAndRollNumber:GenericArray<NameRollType>=[
//     {
//         name:"tamal",
//         roll:23
//     },
//     {
//         name:"himel",
//         roll:43
//     }
// ]

// --->
// type GenericTuple<X,Y,Z> =[X,Y,Z]

// interface IDoc{
//     name:string,
//     age:number
// }

// const friends:GenericTuple<string,number,IDoc>=["emon",22,{name:"himel",age:22}]

// ---> generic interface
// interface IGenericUser<T,F,C,G = null>{
//     name: string;
//     married: T;
//     gf?:G;
//     friends:F,
//     classmates:C
// }
// interface IFriends{name:string,age:number}
// const user:IGenericUser<boolean,IFriends,IFriends> ={
//     name:"himel",
//     married:false,
//     friends:{
//       name:"emon",
//       age:20
//   },
//   classmates:{
//       name:"biplob",
//       age:23
//   }
// }

// ===> generic with function
// const myFun=<T>(params:T):T[]=>{
//     return [params]
// }

// const res = myFun<string>("sfd")
// const res1 = myFun<number>(234)
// const res3 = myFun<boolean>(true)

// console.log(res,res1,res3)

// ===> tuples generic with function
// const createFriendsFunc =<X,Y>(params:X,params2:Y):[X,Y]=>{
// return [params,params2]
// }

// const res = createFriendsFunc<string,string>("emon","minhaz");
// const res1 = createFriendsFunc<number,number>(12,56);
// console.log(res1)

// --->
// const myFunc =<T>(params:T)=>{
// const college= "MM College"
// const newInfo ={...params,college}
// return newInfo
// }

// const myObj={
//     name:"himel",
//     age:23
// }
// const res = myFunc(myObj)
// console.log(res.name)

// ===> normal function
// function myFunc<X,Y>(params:X,params2:Y):[X,Y]{
// return [params,params2]
// }

// ===>
// interface IMyInfo{
//     name: string;
//     age: number;
//     school:string
// }
// interface IMyInfo1{
//     name: string;
//     school:string
// }

// const myInfo:IMyInfo={
//     name:"himel",
//     age:21,
// school:"govt high"
// }
// const myInfo1:IMyInfo1={
//     name:"himel",
//     school:"govt high"
// }

// interface IMandatoryType { name:string,age:number}

// const myFunc=<T extends IMandatoryType>(myInfo:T)=>{
//     const village="vhakhali";
//     const newData = {...myInfo,village}
//     return newData
// }

// const res=myFunc(myInfo)
// const res1=myFunc(myInfo1)
// console.log(res)

// ===> key of
// ---> manually
// type NewType = "himel" | "Tamal" | "Hasnain"
// ---> use
// interface IPerson{
//    name:string,
//    age:number,
//    school:string
// }

// type newTypes = keyof IPerson
// const a:newTypes ="school"
// ---
// const myFunc=<X,Y extends keyof X>(obj:X,key:Y)=>{
//   return  obj[key]
// }

// interface IObj{
//     name:string,
//     age:number
// }
// const obj:IObj={
//     name:"himel",
//     age:22
// }
// const res = myFunc(obj,"age")

// ===> asynchronous typescript
// type DataType={
//   data:string
// }
// const makePromise =():Promise<DataType>=>{
//     return new Promise<DataType>((resolve,reject)=>{
//         const data:DataType = {data:"data is fetching"}
//    if(data){
//         resolve(data)
//       }else{
//     reject('failed to fetching data')
//     }
//     })
// }

// const res=makePromise()
// const getPromise=async():Promise<void>=>{
//   const data = await makePromise()
//   console.log(data)
// }
// getPromise()


// ===> conditional types
// type a = null;
// type b = undefined;
// type c = number;

// type a2 = a extends string ? string : null;
// type d = a extends null ? null: b extends number ? number : c extends null ? null : never;

// ---> exp-1:
