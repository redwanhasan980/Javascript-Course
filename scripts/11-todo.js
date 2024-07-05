const tlist1 = [];
const tlist2 = [];
const tlist3 = [];
render();
function addtodo() {
  let input = document.querySelector('.js-input');
  tlist1.push(input.value);
  console.log(tlist1);
  input.value = '';

}
function addtodo2() {
  let input = document.querySelector('.js-input2');
  tlist2.push(input.value);
  input.value = '';
  let todohtml = '';
  for (let i = 0; i < tlist2.length; i++) {
    html = `<p>${tlist2[i]}</p>`;
    todohtml += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todohtml;
}
function addtodo3() {
  let input = document.querySelector('.js-input3');
  let date = document.querySelector('.js-date');
  tlist3.push({name:input.value,date:date.value});
  input.value = '';
  render();
}
function render()
{
  
  let todohtml = '';
  tlist3.forEach(function(obj,index){
    let name=obj.name;
    let deudate = obj.date;
    html = `<div>
     ${name}</div>
     <div>${deudate}</div>

     <button onclick="
       tlist3.splice(${index},1);
       render();
         " class="delete">Delete</button>
     
      `;
    todohtml += html;
  });
  document.querySelector('.js-todo-list3').innerHTML = todohtml;
}
document.querySelector('.js-add3').addEventListener('click',()=>{
    addtodo3();
});