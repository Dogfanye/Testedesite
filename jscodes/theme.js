var savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.className = savedTheme;
} else {
    document.body.className = 'dark-theme';
}

document.getElementById('elipse1').addEventListener('click', function() {
    var body = document.body;

    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
});
