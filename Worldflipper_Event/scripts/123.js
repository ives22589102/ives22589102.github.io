var containerCount = 0;


function generateImageContainer(img, titleLeft, titleRight, alt) {
    var newContainer = document.createElement("div");
    newContainer.className = "image-container";
    newContainer.id = "image-container-" + containerCount;
    newContainer.onclick = function() { showModal(newContainer.id.split("-")[2]); };
  
    var newImg = document.createElement("img");
    newImg.src = img;
    newImg.alt = alt;
    newImg.width = "90%";
    newImg.className = "your-image";
    newImg.crossOrigin = "anonymous";

    var newModal = document.createElement("div");
    newModal.className = "modal";
    newModal.id = "modal-" + containerCount;
    newModal.innerHTML = "Modal " + containerCount;

    var newTitle = document.createElement("div"); 
    newTitle.className = "image-title";
    
    var modalsContainer = document.getElementById("modals");
    modalsContainer.appendChild(newModal);

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
    containerCount++;
    return newContainer;
  } 

  function showModal(id) {
    var modal = document.getElementById("modal-" + id);
    modal.style.display = "block";
    modal.style.opacity = "1";
  
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    
}

  function generateAndAppendImageContainer(url, titleLeftText, titleRightText) {
    var centerBlock = document.querySelector(".center-block");
    var newContainer = generateImageContainer(url, titleLeftText, titleRightText);
    centerBlock.appendChild(newContainer);
  }
  
  function generateModal(modalId, modalText) {
    var newModal = document.createElement("div");
    newModal.className = "modal";
    newModal.id = modalId;

    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";
  
    var modalTextNode = document.createTextNode(modalText);
    modalContent.appendChild(modalTextNode);


    newModal.appendChild(modalContent);
    return newModal;
    
  }
  
  window.onload = function() {
    generateAndAppendImageContainer("https://i.imgur.com/9odlnDR.jpg", "流星祭一池", "2022/11/28");
    generateAndAppendImageContainer("https://i.imgur.com/0PIluTR.jpg", "風翔太池", "2023/1/31");
    generateAndAppendImageContainer("https://i.imgur.com/2DyxkFC.jpg", "新年池", "2023/1/31");
    generateAndAppendImageContainer("https://i.imgur.com/8IZvQr5.jpg", "耶誕池", "2023/1/31");

    const modalCloseButtons = document.querySelectorAll('.modal-close');
  for (let i = 0; i < modalCloseButtons.length; i++) {
    modalCloseButtons[i].addEventListener('click', function(event) {
      event.target.closest('.modal').style.display = 'none';
    });
  }
  
    function applyTextShadow(img, titleLeft, titleRight) {
        const colorThief = new ColorThief();
        const palette = colorThief.getPalette(img, 10);
        titleLeft.style.textShadow = `1px 1px 10px rgb(${palette[2].join(',')})`;
        titleRight.style.textShadow = `1px 1px 10px rgb(${palette[2].join(',')})`;
    }
  
    const images = document.querySelectorAll('.your-image');
    images.forEach(function(img) {
        const imageContainer = img.parentElement;
        const titleLeft = imageContainer.querySelector('.title-left');
        const titleRight = imageContainer.querySelector('.title-right');
        img.addEventListener('load', function() {
            applyTextShadow(img, titleLeft, titleRight);
        });
    });
  }
  
  
  
  