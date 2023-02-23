var containerCount = 0;

function generateImageContainer(img, titleLeft, titleRight) {
    var newContainer = document.createElement("div");
    newContainer.className = "image-container";
    //讓id會隨著動態生成的個數增加  
    newContainer.id = "image-container-" + containerCount;
    var modalcontentId = "modal-content-" + containerCount;
    var modalId = "modal-" + containerCount;

    //新增一個div裝活動圖，且ID同步imgae-container
    var newEventBlock = document.createElement("div");
    newEventBlock.className = "eventblock";
    newEventBlock.id = "event-block-" + containerCount;


    // 新增一個Modal
    var newModal = document.createElement("div");
    newModal.id = modalId;
    newModal.className = "modal";
    newModal.style.display = "none";

    // 新增一個卡池的Modalcontent
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

    //卡池圖
    var newImg = document.createElement("img");
    newImg.src = img;
    newImg.width = "90%";
    newImg.className = "your-image";
    newImg.crossOrigin = "anonymous";

    //新增一個Div 拿來裝卡池圖
    var newCardimg = document.createElement("div");
    newCardimg.className = "card-img"

    //新增一個Div 拿來裝卡池標題
    var newTitle = document.createElement("div"); 
    newTitle.className = "card-title";

    //標題裡的日期和卡池名
    var newTitleLeft = document.createElement("div");
    newTitleLeft.className = "title-left";
    newTitleLeft.innerHTML = titleLeft; 
  
    var newTitleRight = document.createElement("div");
    newTitleRight.className = "title-right";
    newTitleRight.innerHTML = titleRight;

    //新增一個Div 拿來裝卡池的圖和標題
    var newCard = document.createElement("div");
    newCard.className = "card"

    //卡池按下去的時候，會浮現modal
    newCard.onclick = function() {
        document.getElementById(modalId).style.display = "block";
        document.getElementById(modalcontentId).style.display = "block";
    };
    
    

    newTitle.appendChild(newTitleLeft);
    newTitle.appendChild(newTitleRight);
    
    newContainer.appendChild(newCard);
    newContainer.appendChild(newEventBlock);
    newCard.appendChild(newCardimg);
    newCardimg.appendChild(newImg);
    newCard.appendChild(newTitle);

    
    containerCount++;
    return newContainer;
  } 


function addNewContainer(blocknum, url, titleLeftText, titleRightText) {
    var centerBlock = document.querySelector("#center-block-" + blocknum);
    var newContainer = generateImageContainer(url, titleLeftText, titleRightText);
    centerBlock.appendChild(newContainer);
}

var eventCount = 0;
function insertEvent (eventnum, img2){
    
    var eventBlock = document.getElementsByClassName("eventblock")[eventnum]; // 获取第一个符合条件的元素
    var newEvent = document.createElement("div");
    var EventImg = document.createElement("img");
    
    EventImg.src = img2;
    newEvent.className = "event";
    newEvent.id = "event-" + eventCount;

    const EventToContainer = document.getElementById('image-container-' + eventCount);
    EventToContainer.appendChild(newEvent);
    eventBlock.appendChild(newEvent);
    newEvent.appendChild(EventImg);

    // 新增一個for event的Modal
    var neweventModal = document.createElement("div");
    var newevnetModalID = "event_modal-" + eventCount;
    neweventModal.id = newevnetModalID;
    neweventModal.className = "event_modal";
    neweventModal.style.display = "none";

    // 新增一個for evnet的Modalcontent
    var neweventModalcontent = document.createElement("div");
    var newevnetModalcontentID = "event_modal_content-" + eventCount;
    neweventModalcontent.id = newevnetModalcontentID;
    neweventModalcontent.className = "event_modal_content";
    neweventModalcontent.style.display = "none";

    eventBlock.appendChild(neweventModal);
    neweventModal.appendChild(neweventModalcontent);

    newEvent.onclick = function() {
      document.getElementById(newevnetModalcontentID).style.display = "block";
      document.getElementById(newevnetModalID).style.display = "block";
    };

    neweventModal.onclick = function() {
      document.getElementById(newevnetModalcontentID).style.display = "none";
      document.getElementById(newevnetModalID).style.display = "none";
    };

    eventCount++;
    return;
}


window.onload = function() {
    

    addNewContainer("1","https://i.imgur.com/FnviXS5.jpg", "2021 聖誕池", "限定"); 
    addNewContainer("1","https://i.imgur.com/hmqQTsx.jpg", "2020 聖誕池", "復刻限定");
    addNewContainer("1","https://i.imgur.com/hPOFvzm.jpg", "2022 新年池", "限定");
    addNewContainer("2","https://i.imgur.com/LIpWUVO.jpg", "2020 新年池", "復刻限定"); 
    addNewContainer("2","https://i.imgur.com/YrP33C1.jpg", "1.5周年池", "復刻限定");
    addNewContainer("2","https://i.imgur.com/q8fGbgU.jpg", "RE0池", "復刻限定");
    addNewContainer("2","https://i.imgur.com/9VuwKf6.jpg", "新常駐池", "");
    addNewContainer("3","https://i.imgur.com/Ig0466p.jpg", "2022 情人節池", "限定");
    addNewContainer("3","https://i.imgur.com/Kkr8PuK.jpg", "2020 情人節池", "復刻限定");
    addNewContainer("3","https://i.imgur.com/oW55bln.jpg", "新常駐池", "");
    addNewContainer("4","https://i.imgur.com/Y64JKKE.jpg", "2021 泳裝一池", "復刻限定");
    addNewContainer("4","https://i.imgur.com/YlPfgMT.jpg", "2022 白色情人節池", "限定");
    addNewContainer("4","https://i.imgur.com/OYuFybp.jpg", "2021 泳裝一池", "復刻限定");
    addNewContainer("4","https://i.imgur.com/CWOq4RG.jpg", "正義兔兔池", "限定 + 常駐");
    addNewContainer("5","https://i.imgur.com/N1KrEGz.jpg", "狗拳池", "復刻限定");
    addNewContainer("5","https://i.imgur.com/IllVQdL.jpg", "新常駐池(疊下池)", "");
    addNewContainer("5","https://i.imgur.com/tOrBcwI.jpg", "0觸風孃池", "復刻限定");
    addNewContainer("5","https://i.imgur.com/jKyIVzE.jpg", "2021 萬聖池", "復刻限定");
    addNewContainer("5","https://i.imgur.com/80Ojvqn.jpg", "新常駐池", "");
    addNewContainer("6","https://i.imgur.com/tMZajBz.jpg", "2021 白色情人節池", "復刻限定");
    addNewContainer("6","https://i.imgur.com/TvoEoXE.jpg", "新常駐池", "");
    addNewContainer("6","https://i.imgur.com/RyBFuDi.jpg", "2020 泳裝池", "復刻限定");
    addNewContainer("6","https://i.imgur.com/TifT6Wg.jpg", "2.5周年池", "限定");
    addNewContainer("7","https://i.imgur.com/ZJVlb4D.jpg", "2周年池", "復刻限定");
    addNewContainer("7","https://i.imgur.com/b6sNfOW.jpg", "新常駐池", "");
    addNewContainer("7","https://i.imgur.com/5t2W9DI.jpg", "2021 聖誕池", "復刻限定");
    addNewContainer("7","https://i.imgur.com/dQQcGcE.jpg", "為美好的世界獻上祝福池", "限定");
    addNewContainer("8","https://i.imgur.com/K8LMJnp.jpg", "2022 新年池", "復刻限定");
    addNewContainer("8","https://i.imgur.com/UXN0FV7.jpg", "2022 泳裝1池", "限定");
    addNewContainer("8","https://i.imgur.com/cqCRwfE.jpg", "1周年池", "復刻限定");
    addNewContainer("8","https://i.imgur.com/A1I3iew.jpg", "2022 泳裝2池", "限定");
    addNewContainer("9","https://i.imgur.com/zr6IFat.jpg", "2019 聖誕池", "復刻限定");
    addNewContainer("9","https://i.imgur.com/HuKnPJl.jpg", "盧卡池", "限定 + 常駐");
    addNewContainer("9","https://i.imgur.com/5trX4wm.jpg", "2020 新年池", "復刻限定");
    addNewContainer("9","https://i.imgur.com/rLA1Cma.jpg", "火獅子池", "限定 + 常駐");
    addNewContainer("10","https://i.imgur.com/yStAZpj.jpg", "2021 泳裝池", "復刻限定");
    addNewContainer("10","https://i.imgur.com/Ptm8fV4.jpg", "新常駐池", "");
    addNewContainer("10","https://i.imgur.com/mIYvIIf.jpg", "2022 情人節池", "復刻限定");
    addNewContainer("10","https://i.imgur.com/UGl8EFW.jpg", "新常駐池", "");
    addNewContainer("11","https://i.imgur.com/olUThfD.jpg", "2021 泳裝池", "復刻限定");
    addNewContainer("11","https://i.imgur.com/YBvtbar.jpg", "2022 萬聖池", "限定");
    addNewContainer("11","https://i.imgur.com/5MqqJlY.jpg", "2020 萬聖池", "復刻限定");
    addNewContainer("11","https://i.imgur.com/Hd2L1bo.jpg", "黑色五葉草池", "限定");
    addNewContainer("12","https://i.imgur.com/zRBWkjo.jpg", "2020 聖誕池", "復刻限定");
    addNewContainer("12","https://i.imgur.com/ZuYAKSs.jpg", "新常駐池", "");
    addNewContainer("12","https://i.imgur.com/EKfo2z4.jpg", "2.5周年池", "復刻限定");
    addNewContainer("12","https://i.imgur.com/RvcdjdD.jpg", "流星祭一池", "限定");
    addNewContainer("13","https://i.imgur.com/QUqBj7I.jpg", "1.5周年池", "復刻限定");
    addNewContainer("13","https://i.imgur.com/bdz2WUk.jpg", "2022 聖誕池", "限定");
    addNewContainer("13","https://i.imgur.com/KReS0UH.jpg", "2021 聖誕池", "復刻限定");
    addNewContainer("13","https://i.imgur.com/YanFxcM.jpg", "2023 新年池", "限定");
    addNewContainer("13","https://i.imgur.com/PwA7Rb2.jpg", "水Pick UP池", "");
    addNewContainer("14","https://i.imgur.com/JckLefF.jpg", "2021 新年池", "復刻限定");
    addNewContainer("14","https://i.imgur.com/cj7HcUk.jpg", "新常駐池", "");
    addNewContainer("14","https://i.imgur.com/4EZC9q6.jpg", "星白池", "限定 + 常駐");
    addNewContainer("14","https://i.imgur.com/ntnAVtv.jpg", "流星祭二池", "限定");

    insertNote(1,"2021/12");
    insertNote(2,"2022/1");
    insertNote(3,"2022/2");
    insertNote(4,"2022/3");
    insertNote(5,"2022/4");
    insertNote(6,"2022/5");
    insertNote(7,"2022/6");
    insertNote(8,"2022/7");
    insertNote(9,"2022/8");
    insertNote(10,"2022/9");
    insertNote(11,"2022/10");
    insertNote(12,"2022/11");
    insertNote(13,"2022/12");
    insertNote(14,"2023/1");
    insertNote(15,"2023/2");
    
    insertEvent(0,"https://i.imgur.com/q8fGbgU.jpg");
    insertEvent(0,"https://i.imgur.com/q8fGbgU.jpg");
    insertEvent(1,"https://i.imgur.com/q8fGbgU.jpg");
    insertEvent(2,"https://i.imgur.com/q8fGbgU.jpg");
    insertEvent(2,"https://i.imgur.com/q8fGbgU.jpg");
    insertEvent(2,"https://i.imgur.com/q8fGbgU.jpg");
    insertEvent(3,"https://i.imgur.com/q8fGbgU.jpg");

    function applyTextShadow(img, titleLeft, titleRight) {
        const colorThief = new ColorThief();
        const palette = colorThief.getPalette(img, 10);
        titleLeft.style.textShadow = `1px 1px 10px rgb(${palette[0].join(',')})`;
        titleRight.style.textShadow = `1px 1px 10px rgb(${palette[0].join(',')})`;
    }
  
    const images = document.querySelectorAll('.card img');
    images.forEach(function(img) {
        const imageContainer = img.closest('.image-container');
        const titleLeft = imageContainer.querySelector('.title-left');
        const titleRight = imageContainer.querySelector('.title-right');
        img.addEventListener('load', function() {
            applyTextShadow(img, titleLeft, titleRight);
        });
    });

    
    // 新增日期
    function insertNote (blocknum, Note) {
        // 找到 center-block 元素
        const newNote = document.getElementById('center-block-' + blocknum);
        // 在 center-block 前面新增一個 div 元素
        newNote.insertAdjacentHTML('beforebegin', '<div id="note-' + blocknum + '" class="Note">'+ Note + '</div>');
    }

    
//隱藏0-50的元素
for (let i = 0; i <= 1; i++) {
  const el = document.getElementById(`image-container-${i}`);
  if (el) {
    el.style.display = "none";
  }
}

//顯示50-110的元素
for (let i = 51; i <= 110; i++) {
  const el = document.getElementById(`image-container-${n}`);
  if (el) {
    el.style.display = "block";
  }
}
}   


//新增內文到卡池跟活動
window.addEventListener("load", function() {
  for (let n = 0; n < 100; n++) {
    var eventcontent = document.getElementById(`eventcontent-${n}`);
    var eventmodalContent = document.getElementById(`event_modal_content-${n}`);
    eventmodalContent.appendChild(eventcontent);

    var content = document.getElementById(`content-${n}`);
    var modalContent = document.getElementById(`modal-content-${n}`);
    modalContent.appendChild(content);
  }
  
});


