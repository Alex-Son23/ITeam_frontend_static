// document.getElementById('loginForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     if (username === '1' && password === '1') {
//     document.getElementById('loginModal').classList.add('hidden');
//     document.getElementById('app').classList.remove('hidden');
//     } else {
//     alert('Неверный логин или пароль');
//     }
// });

let addManagerModal = document.getElementById("addManagerModal");

document.getElementById("addManagerBtn").addEventListener("click", () => {
    console.log("Add Manager");
    addManagerModal.classList.remove("hidden");
});

document.getElementById("addManagerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    addManagerModal.classList.add("hidden");
    const INN = document.getElementById("managerInnInput").value;
    console.log(INN);
});

document.getElementById("closeAddManagerModal").addEventListener("click", () => {
    addManagerModal.classList.add("hidden");
});

document.getElementById("cancelAddManager").addEventListener("click", () => {
    addManagerModal.classList.add("hidden");
});
