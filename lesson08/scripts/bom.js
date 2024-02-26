const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click",()=>{
    if(input.value != ""){
        displayList(input.value)
        chaptersArray.push(input.value)
        setChapterList()
        input.value = "";
        input.focus()
    }
})


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

//display list function
function displayList(item){
    let newli = document.createElement("li");
        newli.textContent = item;
					
				const deletebutton = document.createElement("button");
				deletebutton.textContent = "❌";
					
				newli.append(deletebutton);
				list.append(newli);
				input.focus();
					
					deletebutton.addEventListener("click",function(){
						list.removeChild(newli);
						input.focus();
                        deleteChapter(newli.textContent)
					})
					// input.focus();
					// input.value = "";
                    console.log('I like to copy code instead of typing it out myself and trying to understand it.')
    
}

// chanage for the event listener
function check(){
    if (input.value ===""){
        displayList(input.value)
        //push the input value into the chapter array
        chaptersArray.push(input.value);
        setChapterList();
        input.value ="";
        input.focus()
    }
}


function setChapterList(){
    localStorage.setItem("Book of Mormon Chapter",JSON.stringify(chaptersArray));
}

function getChapterList(){
    return  JSON.parse(localStorage.getItem("Book of Mormon Chapter"));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.lenght -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}