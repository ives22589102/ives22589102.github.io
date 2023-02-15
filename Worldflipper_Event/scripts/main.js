
var modal = document.getElementById("modal");
var closeButton = document.getElementById("close-button");
var image = document.getElementById("your-image");

closeButton.onclick = function() {
    modal.style.opacity = 0;
    setTimeout(function() {
      modal.style.display = "none";
    }, 100);
  };

window.onclick = function(event) {
if (event.target == modal) {
modal.style.opacity = 0;
setTimeout(function() {
modal.style.display = "none";
}, 100);
}   
};

image.onclick = function() {
modal.style.display = "block";
setTimeout(function() {
modal.style.opacity = 1;
}, 10);
};


function showModal() {
    modal.style.display = "block";
    setTimeout(function() {
      modal.style.opacity = 1;
    }, 10);
  }

  function generateImageContainer(img, titleLeft, titleRight, alt) {
    var newContainer = document.createElement("div");
    newContainer.className = "image-container";
  
    var newImg = document.createElement("img");
    newImg.src = img;
    newImg.alt = alt;
    newImg.width = "90%";
    newImg.className = "your-image";
    newImg.onclick = function() {
      showModal();
    };
  
    var newTitle = document.createElement("div");
    newTitle.className = "image-title";
    newTitle.onclick = function() {
      showModal();
    };
  
    var newTitleLeft = document.createElement("div");
    newTitleLeft.className = "title-left";
    newTitleLeft.innerHTML = titleLeft;
  
    var newTitleRight = document.createElement("div");
    newTitleRight.className = "title-right";
    newTitleRight.innerHTML = titleRight;
  
    newTitle.appendChild(newTitleLeft);
    newTitle.appendChild(newTitleRight);
  
    newContainer.appendChild(newImg);
    newContainer.appendChild(newTitle);
  
    return newContainer;
  }

  window.onload = function() {
    var imageContainer = generateImageContainer("https://i.imgur.com/9odlnDR.jpg", "流星祭一池", "2022/11/28", "Your image");
    document.body.appendChild(imageContainer);
};
