function toggleTheme() {
    const li = document.getElementById('theme');
    const ico = document.getElementById('icon');

    li.classList.toggle('dark');
    li.classList.toggle('light');

    ico.classList.toggle('fa-sun');
    ico.classList.toggle('fa-moon');
}
