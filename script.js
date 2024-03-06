// create arrays for images
let images = ['img/abstract-art.webp', 'img/coding.webp', 'img/food.webp', 'img/friends-park.webp', 'img/makeUp.webp', 'img/nyt-man.webp', 'img/photography.webp', 'img/reading-white.webp', 'img/road.webp', 'img/sea.webp', 'img/spain-2.webp', 'img/spain.webp', 'img/vacation.webp'];


// fills content element with images
function load() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for(let i = 0; i < images.length; i++) {
        content.innerHTML += `
            <img onclick="openImg(${i})" class="imgbox" src="${images[i]}">
        `;
    }

}


// display full image after click on it with previous and next buttons
// parameter i represents image that is being opened
function openImg(i) {
    let content = document.getElementById('openImg');
    content.innerHTML = '';
    
    content.innerHTML = `
    <div id="fullImgContainer">
        <div class="img-container">
            <div class="arrow-container">
                <img class="icon arrow-left" onclick="previousImg(${i - 1})" src="img/icons/prevImg.png">
                <img class="icon arrow-right" onclick="nextImg(${i + 1})" src="img/icons/nextImg.png">
                </div>
            <img class="fullImg" src="${images[i]}">
                <div class="icon-container">
                <img class="icon close-icon" onclick="closeImg()" src="img/icons/back.png">
            </div>
            </div>
    `;
}

// closed the full image view and return to all images
function closeImg() {
    document.getElementById('openImg').innerHTML = '';

}


//checks if i equals length of array 'images' to set it to 0 and then retrieve function openImg(i) 
// to open the next image
function nextImg(i) {
    if (i == images.length) {
        i = 0;
    }

    openImg(i);
}

// opens the previous image in the array 'images' and looping back to the last image if i is '-1'
function previousImg(i) {
    if (i == -1) {
        i = images.length -1;
    }
    openImg(i);
}