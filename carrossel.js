const imgs = document.getElementById("img");

const img = document.querySelectorAll("#img img");


let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
    console.log("idx=" + idx);
    console.log("img.length=" + img.length);

}

setInterval(carrossel, 2500);