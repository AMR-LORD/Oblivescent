const url = "https://randomuser.me/api/?results=50"; // جلب 50 مستخدم لاختبار التنقل
let users = [];
let currentPage = 1;
const usersPerPage = 12; // 3 أعمدة × 4 صفوف

async function fetchUsers() {
    const response = await fetch(url);
    const data = await response.json();
    users = data.results;
    displayUsers();
}

function displayUsers() {
    const userContainer = document.getElementById("user-container");
    userContainer.innerHTML = "";

    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const paginatedUsers = users.slice(startIndex, endIndex);

    paginatedUsers.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        
        userCard.innerHTML = `
            <img src="${user.picture.medium}" alt="${user.name.first}">
            <p>${user.name.first} ${user.name.last}</p>
        `;

        userContainer.appendChild(userCard);
    });

    document.getElementById("pageNumber").textContent = currentPage;
}

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayUsers();
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
        currentPage++;
        displayUsers();
    }
});

fetchUsers();
