function playSong(songPath) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = songPath;
    audioPlayer.play();
}
function openNewPage() {
    window.location.href = 'login.html';
}
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar a[data-url]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
});