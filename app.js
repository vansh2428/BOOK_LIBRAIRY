let form=document.querySelector("#book-form")
let tableadd=document.querySelector("#book-list")

// console.log(form)



// delete button 
tableadd.addEventListener("click",deletevalue)



form.addEventListener("submit",getvalues)

window.addEventListener("load",showbook)




function getvalues(e){
    // console.log("vansh")
    e.preventDefault()
    let title =document.querySelector("#title").value
    let author =document.querySelector("#author").value
    let isbn =document.querySelector("#isbn").value
    // console.log(title,author,isbn)
    

    if(title=="" || author=="" || isbn==""){
        showalert("please fill all value","danger")
    }
    else{
    addvalue(title,author,isbn) //or adding to the table
    addtomemory(title,author,isbn)
    // alert("book added succefully")
showalert("Book added succesfully","success")
    }
}

function addvalue(title,author,isbn){

    let van=document.createElement("tr")
    // console.log(tableadd)
    van.innerHTML=`<td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <button  class="btn btn-danger delete">X</button>
 `

tableadd.appendChild(van)


document.querySelector("#title").value=""
document.querySelector("#author").value=""
document.querySelector("#isbn").value=""

}

function deletevalue(e){
    if(e.target.classList.contains("delete")){
        tableadd.removeChild(e.target.parentElement)
        // alert("book deleted succefully")
        showalert("Book deleted succesfully","danger")

        // console.log(document.querySelectorAll("tr"))
        removefromstorage(e)
        


        
    
    }


}




function showalert(msg,className){ 
    const div=document.createElement("div");
    div.className=`alert alert-${className}`;
    div.appendChild(document.createTextNode(msg));
    let container=document.querySelector(".container")
    let form=document.querySelector("#book-form")
    container.insertBefore(div, form);


    setTimeout(function(){
        document.querySelector(".alert").remove();
    },2000)

}

// we should take object like (title:title,author:author,isbn:isbn)bur if value and key are same in js we can write it just by name
function addtomemory(title,author,isbn){
    let book={title,author,isbn}
    let  prearray=getbookfromstore()

    if(prearray==null){
        prearray=[]
    }
    prearray.push(book)
    localStorage.setItem("book",JSON.stringify(prearray))
}



function getbookfromstore(){
    let books=JSON.parse(localStorage.getItem("book"))
    return books
}

function showbook(){
    let allbook=getbookfromstore()
    allbook.forEach(function(book,index){
        addvalue(book.title,book.author,book.isbn)
        

    })
}





function removefromstorage(e){

    let books=getbookfromstore()
    let deletevalue=e.target.previousElementSibling.innerHTML;
    // console.log(deletevalue,books)
    books.forEach(function(book,index){
        if(book.isbn==deletevalue){
            books.pop(book)
        }
    })
    localStorage.setItem("book",JSON.stringify(books))

}