// Logowanie - Modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');

loginBtn.onclick = () => loginModal.style.display = 'flex';
loginModal.onclick = (e) => { if (e.target === loginModal) loginModal.style.display = 'none'; };

// Przełącznik motywu
const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? "🌙" : "🌞";
};

// Forum - dodawanie tematów
const newTopicForm = document.getElementById('newTopicForm');
const topicsContainer = document.getElementById('topicsContainer');

if (newTopicForm) {
    newTopicForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('topicTitle').value;
        const content = document.getElementById('topicContent').value;
        const topic = document.createElement('div');
        topic.className = 'topic';
        topic.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        topicsContainer.appendChild(topic);
        newTopicForm.reset();
    });
}
