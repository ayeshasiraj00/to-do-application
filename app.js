let addBtn = document.querySelector("#addTask");
let task = document.querySelector("#task");
let userTasks = document.querySelector("#tasks");
let editTarget = null; // Track which element is currently being edited

addBtn.addEventListener("click", () => {
    let todo = task.value.trim();

    if (todo === "") {
        alert("Please write something");
        return;
    }

    if (addBtn.innerHTML === "Add") {
        // Create and append a new task
        userTasks.innerHTML += `
            <div class="flex"> 
                <li>${todo}</li> 
                <div> 
                    <button onclick="edit(event)" class="editBtn">Edit</button> 
                    <button onclick="dlt(event)">Delete</button> 
                </div>
            </div>`;
    } else if (addBtn.innerHTML === "Save" && editTarget) {
        // Update the existing task text
        editTarget.innerHTML = todo;
        addBtn.innerHTML = "Add";
        editTarget = null;
    }

    task.value = ""; // Clear input field
});

const edit = (event) => {
    // Target the <li> element containing the text
    editTarget = event.target.parentNode.parentNode.children[0];
    task.value = editTarget.innerHTML;
    addBtn.innerHTML = "Save";
};

const dlt = (event) => {
    event.target.parentNode.parentNode.remove();
    
    // Reset form state if the item being edited gets deleted
    if (addBtn.innerHTML === "Save") {
        task.value = "";
        addBtn.innerHTML = "Add";
        editTarget = null;
    }
};