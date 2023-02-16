var containerCount = 0;

function generateImageContainer(img, titleLeft, titleRight, alt) {
    var newContainer = document.createElement("div");
    newContainer.className = "image-container";
    //讓id會隨著動態生成的個數增加  
    newContainer.id = "image-container-" + containerCount;
    var modalcontentId = "modal-content-" + containerCount;
    var modalId = "modal-" + containerCount;

    // 新增一個Modal
    var newModal = document.createElement("div");
    newModal.id = modalId;
    newModal.className = "modal";
    newModal.style.display = "none";

    // 新增一個Modalcontent
    var newModalcontent = document.createElement("div");
    newModalcontent.id = modalcontentId;
    newModalcontent.className = "modal-content";
    newModalcontent.style.display = "none";

    newModal.onclick = function() {
        document.getElementById(modalcontentId).style.display = "none";
        document.getElementById(modalId).style.display = "none";
    };


    //把()的東西 + 到前面的元素
    newModal.appendChild(newModalcontent);
    document.body.appendChild(newModal);
 
    newContainer.onclick = function() {
        document.getElementById(modalId).style.display = "block";
        document.getElementById(modalcontentId).style.display = "block";
    };
    
    var newImg = document.createElement("img");
    newImg.src = img;
    newImg.alt = alt;
    newImg.width = "90%";
    newImg.className = "your-image";
    newImg.crossOrigin = "anonymous";

    var newTitle = document.createElement("div"); 
    newTitle.className = "image-title";

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

function addNewContainer(blocknum, url, titleLeftText, titleRightText) {
    var centerBlock = document.querySelector("#center-block-" + blocknum);
    var newContainer = generateImageContainer(url, titleLeftText, titleRightText);
    centerBlock.appendChild(newContainer);
}



window.onload = function() {
    
    addNewContainer("1","https://i.imgur.com/9odlnDR.jpg", "流星祭一池", "2022/11/28"); 
    addNewContainer("1","https://i.imgur.com/0PIluTR.jpg", "風翔太池", "2023/1/31");
    addNewContainer("1","https://i.imgur.com/2DyxkFC.jpg", "新年池", "2023/1/31");
    addNewContainer("1","https://i.imgur.com/8IZvQr5.jpg", "耶誕池", "2023/1/31");
    addNewContainer("2","https://i.imgur.com/9odlnDR.jpg", "流星祭一池", "2022/11/28"); 
    addNewContainer("2","https://i.imgur.com/0PIluTR.jpg", "風翔太池", "2023/1/31");
    addNewContainer("2","https://i.imgur.com/2DyxkFC.jpg", "新年池", "2023/1/31");
    addNewContainer("2","https://i.imgur.com/8IZvQr5.jpg", "耶誕池", "2023/1/31");
    insertNote(1,"我我我");
    insertNote(2,"你妳你");
    
    
    function applyTextShadow(img, titleLeft, titleRight) {
        const colorThief = new ColorThief();
        const palette = colorThief.getPalette(img, 10);
        titleLeft.style.textShadow = `1px 1px 10px rgb(${palette[1].join(',')})`;
        titleRight.style.textShadow = `1px 1px 10px rgb(${palette[1].join(',')})`;
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

    // 新增內文
    for (var i = 0; i < 100; i++) {
        var modalContentId = "modal-content-" + i;
        var contentId = "content-" + i;
        var contentDiv = document.getElementById(contentId);
        var modalContentDiv = document.getElementById(modalContentId);
        modalContentDiv.appendChild(contentDiv);
      }
    
  function insertNote (blocknum, Note) {
        // 找到 center-block 元素
        const newNote = document.getElementById('center-block-' + blocknum);
        // 在 center-block 前面新增一個 div 元素
        newNote.insertAdjacentHTML('beforebegin', '<div id="note-' + blocknum + '" class="Note">'+ Note + '</div>');
    }
}   

