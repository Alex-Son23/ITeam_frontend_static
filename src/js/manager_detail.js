document.getElementById("reload").addEventListener("click", () => {
    console.log("Click");
    location.reload();
});

let editManagerModal = document.getElementById("editManagerModal")

document.getElementById("editManagerBtn").addEventListener("click", () => {
    editManagerModal.classList.remove("hidden")
});

document.getElementById("closeEditManagerModal").addEventListener("click", () => {
    editManagerModal.classList.add("hidden");
});

document.getElementById("cancelEditManager").addEventListener("click", () => {
    editManagerModal.classList.add("hidden");
});