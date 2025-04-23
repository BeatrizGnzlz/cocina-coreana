let likeCountJapchae = 0;
let likeCountKimchi = 0;

document.getElementById('like-japchae').addEventListener('click', () => {
    likeCountJapchae++;
    document.getElementById('like-count-japchae').textContent = likeCountJapchae;
});

document.getElementById('like-kimchi').addEventListener('click', () => {
    likeCountKimchi++;
    document.getElementById('like-count-kimchi').textContent = likeCountKimchi;
});