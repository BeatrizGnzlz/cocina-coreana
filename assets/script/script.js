let likeCountJapchae = 0;
let likeCountKimchi = 0;
let likeCountKimbap = 0;

document.getElementById('like-japchae').addEventListener('click', () => {
    likeCountJapchae++;
    document.getElementById('like-count-japchae').textContent = likeCountJapchae;
});

document.getElementById('like-kimchi').addEventListener('click', () => {
    likeCountKimchi++;
    document.getElementById('like-count-kimchi').textContent = likeCountKimchi;
});
document.getElementById('like-kimbap').addEventListener('click', () => {
    likeCountKimbap++;
    document.getElementById('like-count-kimbap').textContent = likeCountKimbap;
});