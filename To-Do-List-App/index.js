"use strict";

const sumbitBtn = document.getElementById("submit-btn");
const listItems = document.getElementById("0-SavedItem");
const textAreaField = document.getElementById("textAreaField");
const itemUl = document.getElementById("itemUl");

let myNotes = [];

console.log(listItems);

const saveText = function (e) {
  if (!textAreaField.value) {
    alert("Enter A Task!");
  } else {
    var ul = document.getElementById("itemUl");
    const newLi = document.createElement("li");
    const newNote = textAreaField.value;
    const textnode = document.createTextNode(newNote);
    newLi.appendChild(textnode);
    ul.appendChild(newLi);
    textAreaField.value = "";
    myNotes.push(newNote);
    console.log(myNotes);
  }
};

sumbitBtn.addEventListener("click", saveText);
