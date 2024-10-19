function solve() {
    const taskInputRef = document.getElementById("task");
    const descriptionInputRef = document.getElementById("description");
    const dateInputRef = document.getElementById("date");

    const addBtnRef = document.getElementById("add");
    const [addTaskSectionRef, openSectionRef, inProgressSectionRef, completeSectionRef] = document.querySelectorAll("section");
    
    addBtnRef.addEventListener("click", function(event) {

        if (!taskInputRef.value || !descriptionInputRef.value || !dateInputRef.value) return;

        const newTask = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = taskInputRef.value;
        const pDesc = document.createElement("p");
        pDesc.textContent = `Description: ${descriptionInputRef.value}`;
        const pDate = document.createElement("p");
        pDate.textContent = `Due Date: ${dateInputRef.value}`;

        const btnDiv = document.createElement("div");
        btnDiv.classList.add("flex");

        const startBtn = createBtn("Start", "green", startBtnFunctionality)
        const deleteBtn = createBtn("Delete", "red", deleteBtnFunctionality)

        newTask.appendChild(h3);
        newTask.appendChild(pDesc);
        newTask.appendChild(pDate);
        btnDiv.appendChild(startBtn);
        btnDiv.appendChild(deleteBtn);
        newTask.appendChild(btnDiv);

        openSectionRef.children[1].appendChild(newTask);

        taskInputRef.value = "";
        descriptionInputRef.value = "";
        dateInputRef.value = "";

        event.preventDefault(); 
    })

    function createBtn(text, clas, eventHandler) {
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.classList.add(clas);
        btn.addEventListener("click", eventHandler)
        return btn;
    }

    function deleteBtnFunctionality(event) {
        const task = event.currentTarget.parentElement.parentElement;
        task.remove();
    }

    function startBtnFunctionality(event) {
        const task = event.currentTarget.parentElement.parentElement;
        const div = task.querySelector('.flex');

        const curBtn = div.children[0];
        curBtn.remove();
        
        const btn = createBtn("Finish", "orange", finishBtnFunctionality);
        div.appendChild(btn);

        inProgressSectionRef.children[1].appendChild(task);
    }

    function finishBtnFunctionality(event) {
        const task = event.currentTarget.parentElement.parentElement;
        const div = task.querySelector('.flex');

        div.remove();
        completeSectionRef.children[1].appendChild(task);
    };
}
