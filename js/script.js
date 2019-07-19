'use strict';

let students =[];
let liItems = "";


let inputs = document.getElementsByClassName("student-input");

function Student (name, surname, email, phone, age){
  this.name = name; 
  this.surname = surname;
  this.email = email;
  this.phone = phone;
  this.age = age;
  this.displayInfo = function(){
    this.name + ' ' + this.surname + ' ' + this.email + ' ' + this.phone + ' ' + this.age;
  }
}

function addToList(){
  let student1 = new Student (inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value, );
  if(inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value && inputs[4].value){
    students.push(student1);
  
  students.forEach(generateLiItems);

  document.getElementsByClassName("student-list")[0].innerHTML = liItems;
    liItems = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";
    document.getElementsByClassName("error")[0].innerHTML = '';

  }else{
    document.getElementsByClassName("error")[0].innerHTML = 'Butun xanalari doldurun';
  }
  

}

function generateLiItems(val) {
  liItems += `<li class="list-group-item">${val.name} - ${val.surname} - ${val.email} - ${val.phone} - ${val.age}</li>`;   
}
// sorting
function sortingName(){
return function ( a, b ) {
  if ( a['name'] < b['name'] ){
    return -1;
  }
  if ( a['name'] > b['name'] ){
    return 1;
  }
  return 0;
}
}

function sortName(){
  students.sort(sortingName());
  students.forEach(generateLiItems);

  document.getElementsByClassName("student-list")[0].innerHTML = liItems;
    liItems = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";

}
// SURNAME
function sortingSurname(){
return function ( a, b ) {
  if ( a['surname'] < b['surname'] ){
    return -1;
  }
  if ( a['surname'] > b['surname'] ){
    return 1;
  }
  return 0;
}
}

function sortSurname(){
  students.sort(sortingSurname());
  students.forEach(generateLiItems);

  document.getElementsByClassName("student-list")[0].innerHTML = liItems;
    liItems = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";

}

// Email
function sortingEmail(){
return function ( a, b ) {
  if ( a['surname'] < b['surname'] ){
    return -1;
  }
  if ( a['surname'] > b['surname'] ){
    return 1;
  }
  return 0;
}
}

function sortEmail(){
  students.sort(sortingEmail());
  students.forEach(generateLiItems);

  document.getElementsByClassName("student-list")[0].innerHTML = liItems;
    liItems = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";

}
// Phone
function sortingPhone(){
return function ( a, b ) {
  if ( a['surname'] < b['surname'] ){
    return -1;
  }
  if ( a['surname'] > b['surname'] ){
    return 1;
  }
  return 0;
}
}

function sortPhone(){
  students.sort(sortingPhone());
  students.forEach(generateLiItems);

  document.getElementsByClassName("student-list")[0].innerHTML = liItems;
    liItems = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";

}
// AGE
function sortingAge(){
  return function ( a, b ) {
    if ( a['surname'] < b['surname'] ){
      return -1;
    }
    if ( a['surname'] > b['surname'] ){
      return 1;
    }
    return 0;
  }
  }
  
  function sortAge(){
    students.sort(sortingAge());
    students.forEach(generateLiItems);
  
    document.getElementsByClassName("student-list")[0].innerHTML = liItems;
      liItems = "";
      inputs[0].value = "";
      inputs[1].value = "";
      inputs[2].value = "";
      inputs[3].value = "";
      inputs[4].value = "";
  
  }

