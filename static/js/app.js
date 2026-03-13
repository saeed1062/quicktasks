document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("opacity-0")
})

document.addEventListener("DOMContentLoaded", () => {

    const tasks = document.querySelectorAll(".task-item")

    tasks.forEach((task, index) => {
        setTimeout(() => {
            task.classList.remove("opacity-0", "translate-y-2")
            task.classList.add("transition", "duration-300")
        }, index * 80)
    })

})

document.querySelectorAll(".delete-btn").forEach(btn => {

    btn.addEventListener("click", function(e) {

        const confirmDelete = confirm("Delete this task?")

        if (!confirmDelete) {
            e.preventDefault()
        }

    })

})

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("mousedown", () => {
        btn.classList.add("scale-95")
    })

    btn.addEventListener("mouseup", () => {
        btn.classList.remove("scale-95")
    })

})