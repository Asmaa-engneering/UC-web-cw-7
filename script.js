/* ------------------------------------------ */
let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0]; //المصفوفة

let all_grades_div = document.getElementById("all-grades");
let random_grade_div = document.getElementById("random-grade");

grades.pop()
grades.push(99);
// grades.forEach(item => {
// all_grades_div.innerHTML += `<span>${item}<span>`});
 for (let i = 0; i < grades.length; i++) {
  all_grades_div.innerHTML += `<span>${grades[i]}<span>`}

  

/* لا تقم بتعديل الأسطر المكتوبة بالأعلى */


/*  الجزء الأول والثاني من التمرين */

randomIndex = Math.floor(Math.random() * grades.length)
random_grade_div.innerHTML = `<span>#${randomIndex}: ${grades[randomIndex]}<span>`







/* الجزء الثالث من التمرين */

let course = {
  name: "UniCODE",
  track : "",
  studentsCount : 0,
  location : "Kuwait University"


//Change studentsCount,track property here
}
course.track= "web"
course.studentsCount="40"

//Console log here
console.log("hello my name is " +"")

console.log("i am in " + course.track +"")
console.log("at " +course.name +"")
console.log(`Hello my name is Asmaa, i'm in ${course.track} at ${course.name}`)


//Create student object here
let student = {
  myname: "asmaa",
  myuniversity : "Kuwait University"}
  console.log("my name is" + student.myname +"" +"my university"+ student.myuniversity +"")

// array use foreach(meaning for loop it move for each element in the array )
let UniCODE =["track","location","unversity"];

UniCODE.forEach(myFunction)
let text = "";



document.getElementById("myFunction").innerHTML = text;
 
function myFunction(item, index) {
  for (let i = 0; i < grades.length; i++) {
    document.getElementById("myFunction").innerHTML += `<span>${UniCODE[i]}<span>`}
  
}
// let projects=["talabat","tap","coffee"]
// function addtext(name){console.log("name is:"+ name)}
// projects.forEach(addtext)

// 
// document.getElementById("titel").innerHTML +="THE CROWN!";

// 
// let personname ="somia";
// let personMajor="GIS";
// let personwealth=100000;
// can be like a top this is object for same vairable or can use like in down
// let person= {
  // name:"somia",
  // major:"GIS",
  // wealth:100000,
  // it is function but i dont but function becouse it is in the object 
  // greeting(){
    // console.log("slame");
  // }
// }
// person.greeting();
// this in the top or in the down it is same think
// document.getElementById()
// call to print in the console
// console.log(person.name)
// console.log(person.major)
// console.log(person.wealth)