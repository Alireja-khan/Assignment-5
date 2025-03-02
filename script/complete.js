


document.getElementById("Discover").addEventListener("click", function () {
    window.location.href = "./blog.html";
})


document.getElementById("Complete-btn-1").addEventListener("click", function () {
    alert("Board Updated Successfully  !");
    document.getElementById("Complete-btn-1").style.backgroundColor = "rgba(55, 82, 253, 0.2)";
    this.disabled = true;
    let currentTime = new Date().toLocaleTimeString();
    const taskNumbs = document.getElementById("task-numbs").innerText;
    const convertedTaskNumbs = parseInt(taskNumbs);
    const taskTotalNumbs = document.getElementById("task-total-numbs").innerText;
    const convertedTaskTotalNumbs = parseInt(taskTotalNumbs);
    const updateTaskNumbs = convertedTaskNumbs - 1;
    const updateTaskTotalNumbs = convertedTaskTotalNumbs + 1;

    document.getElementById("task-numbs").innerText = updateTaskNumbs;
    document.getElementById("task-total-numbs").innerText = updateTaskTotalNumbs;
    document.getElementById("Massage-1").style.display = "block";
    document.getElementById("msg-1-time").innerText = currentTime;
})



document.getElementById("Complete-btn-2").addEventListener("click", function () {
    alert("Board Updated Successfully  !");
    document.getElementById("Complete-btn-2").style.backgroundColor = "rgba(55, 82, 253, 0.2)";
    this.disabled = true;
    let currentTime = new Date().toLocaleTimeString();
    const taskNumbs = document.getElementById("task-numbs").innerText;
    const convertedTaskNumbs = parseInt(taskNumbs);
    const taskTotalNumbs = document.getElementById("task-total-numbs").innerText;
    const convertedTaskTotalNumbs = parseInt(taskTotalNumbs);
    const updateTaskNumbs = convertedTaskNumbs - 1;
    const updateTaskTotalNumbs = convertedTaskTotalNumbs + 1;

    document.getElementById("task-numbs").innerText = updateTaskNumbs;
    document.getElementById("task-total-numbs").innerText = updateTaskTotalNumbs;
    document.getElementById("Massage-2").style.display = "block";
    document.getElementById("msg-2-time").innerText = currentTime;
})


document.getElementById("Complete-btn-3").addEventListener("click", function () {
    alert("Board Updated Successfully  !");
    document.getElementById("Complete-btn-3").style.backgroundColor = "rgba(55, 82, 253, 0.2)";
    this.disabled = true;
    let currentTime = new Date().toLocaleTimeString();
    const taskNumbs = document.getElementById("task-numbs").innerText;
    const convertedTaskNumbs = parseInt(taskNumbs);
    const taskTotalNumbs = document.getElementById("task-total-numbs").innerText;
    const convertedTaskTotalNumbs = parseInt(taskTotalNumbs);
    const updateTaskNumbs = convertedTaskNumbs - 1;
    const updateTaskTotalNumbs = convertedTaskTotalNumbs + 1;

    document.getElementById("task-numbs").innerText = updateTaskNumbs;
    document.getElementById("task-total-numbs").innerText = updateTaskTotalNumbs;
    document.getElementById("Massage-3").style.display = "block";
    document.getElementById("msg-3-time").innerText = currentTime;
})


document.getElementById("Complete-btn-4").addEventListener("click", function () {
    alert("Board Updated Successfully  !");
    document.getElementById("Complete-btn-4").style.backgroundColor = "rgba(55, 82, 253, 0.2)";
    this.disabled = true;
    let currentTime = new Date().toLocaleTimeString();
    const taskNumbs = document.getElementById("task-numbs").innerText;
    const convertedTaskNumbs = parseInt(taskNumbs);
    const taskTotalNumbs = document.getElementById("task-total-numbs").innerText;
    const convertedTaskTotalNumbs = parseInt(taskTotalNumbs);
    const updateTaskNumbs = convertedTaskNumbs - 1;
    const updateTaskTotalNumbs = convertedTaskTotalNumbs + 1;

    document.getElementById("task-numbs").innerText = updateTaskNumbs;
    document.getElementById("task-total-numbs").innerText = updateTaskTotalNumbs;
    document.getElementById("Massage-4").style.display = "block";
    document.getElementById("msg-4-time").innerText = currentTime;
})


document.getElementById("Complete-btn-5").addEventListener("click", function () {
    alert("Board Updated Successfully  !");
    document.getElementById("Complete-btn-5").style.backgroundColor = "rgba(55, 82, 253, 0.2)";
    this.disabled = true;
    let currentTime = new Date().toLocaleTimeString();
    const taskNumbs = document.getElementById("task-numbs").innerText;
    const convertedTaskNumbs = parseInt(taskNumbs);
    const taskTotalNumbs = document.getElementById("task-total-numbs").innerText;
    const convertedTaskTotalNumbs = parseInt(taskTotalNumbs);
    const updateTaskNumbs = convertedTaskNumbs - 1;
    const updateTaskTotalNumbs = convertedTaskTotalNumbs + 1;

    document.getElementById("task-numbs").innerText = updateTaskNumbs;
    document.getElementById("task-total-numbs").innerText = updateTaskTotalNumbs;
    document.getElementById("Massage-5").style.display = "block";
    document.getElementById("msg-5-time").innerText = currentTime;
})


document.getElementById("Complete-btn-6").addEventListener("click", function () {
    alert("Board Updated Successfully  !");
    document.getElementById("Complete-btn-6").style.backgroundColor = "rgba(55, 82, 253, 0.2)";
    this.disabled = true;
    let currentTime = new Date().toLocaleTimeString();
    const taskNumbs = document.getElementById("task-numbs").innerText;
    const convertedTaskNumbs = parseInt(taskNumbs);
    const taskTotalNumbs = document.getElementById("task-total-numbs").innerText;
    const convertedTaskTotalNumbs = parseInt(taskTotalNumbs);
    const updateTaskNumbs = convertedTaskNumbs - 1;
    const updateTaskTotalNumbs = convertedTaskTotalNumbs + 1;

    document.getElementById("task-numbs").innerText = updateTaskNumbs;
    document.getElementById("task-total-numbs").innerText = updateTaskTotalNumbs;
    document.getElementById("Massage-6").style.display = "block";
    document.getElementById("msg-6-time").innerText = currentTime;
    alert("Congrats !!! You have completed all the current task");
}) 



