const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value !== "") {
        let newli = document.createElement("li");
        newli.textContent = input.value;
					
					const deletebutton = document.createElement("button");
					deletebutton.textContent = "❌";
					
				newli.append(deletebutton);
				list.append(newli);
				input.focus();
					
					deletebutton.addEventListener("click",() =>{
						list.removeChild(newli);
						input.focus();
					})
					input.focus();
					input.value = "";
					
    }
});

