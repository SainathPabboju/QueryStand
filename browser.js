//const { text } = require("express")
function questionTemplate(question){
  return `<li id="list-item" class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
  <span class="item-text">${question.text}</span>
  <div>
  <button data-id="${question._id}" id="view-me" class="view-me btn btn-secondary btn-sm mr-1">View Answers</button>
  <button data-id="${question._id}" class="answer-me btn btn-secondary btn-sm mr-1">Answer</button>
  <button data-id="${question._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
  <button data-id="${question._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
  </div>
  </li>`
}


// initial page load render
let OurHtml = questions.map((question)=>{
  return questionTemplate(question)
}).join('')
document.getElementById("question-list").insertAdjacentHTML("beforeend",OurHtml)
//create
let createField = document.getElementById("our-field")
document.getElementById("our-form").addEventListener("submit",(e)=>{
e.preventDefault()
axios.post("/queries",{text:createField.value}).then((response)=>{
  document.getElementById("question-list").insertAdjacentHTML("beforeend",questionTemplate(response.data))
  createField.value = ""
  createField.focus()
}).catch(()=>{
  console.log("please try again later.")
})
})



document.addEventListener("click", function(e) {

  //delete


  if(e.target.classList.contains("delete-me")){
    if(confirm("Do you really want to delete this query?")){
      axios.post("/delete-question",{id: e.target.getAttribute("data-id")}).then(()=>{
        e.target.parentElement.parentElement.remove()
      }).catch(()=>{
        console.log("please try again later.")
      })
      
    }
  }



//edit 
    if (e.target.classList.contains("edit-me")) {
      let userInput = prompt("Enter your desired new text",e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
      if(userInput){
        axios.post('/edit-question', {text: userInput, id: e.target.getAttribute("data-id")}).then(()=> {
          e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
        }).catch(()=>{
          console.log("please try again later.")
        })
      }
    }

    if(e.target.classList.contains("edit-me1")){
      console.log("test")
      let userInput = prompt("Enter your desired new text",e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
      if(userInput){
        axios.post('/edit-answer', {text: userInput, id: e.target.getAttribute("data-id")}).then(()=> {
          e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
        }).catch(()=>{
          console.log("please try again later.")
        })
      }
    }
  
    if (e.target.classList.contains("view-me")) {
        axios.get('/view-answers', {id: e.target.getAttribute("data-id")}).then(()=> {
         this.location.href="/view-answers"
          // let OurHtml1 = answers.map((answer)=>{
          //   return answerTemplate(answer)
          // }).join('')
          // document.getElementById("answer-list").insertAdjacentHTML("beforeend",OurHtml1)
          
        }).catch(()=>{
          console.log("please try again later.")
        })
      
    }

//answer

if (e.target.classList.contains("answer-me")) {
  let userInput = prompt("Enter the answer here")
  if(userInput){
    axios.post('/answers', {text: userInput, id: e.target.getAttribute("data-id")}).then(()=> {
      //e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
      alert("Answered Succesfully")
    }).catch(()=>{
      console.log("please try again later.")
    })
  }
}



// if (e.target.classList.contains("view-me")) {
//   //let userInput = prompt("Enter the answer here")
//   //if(userInput){
//     axios.post('/view-answers').then(()=> {
//       //e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
//       console.log("wow")
//     }).catch(()=>{
//       console.log("please try again later.")
//     })
//   //}
// }
})

