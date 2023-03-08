var containerCount = 0;

function generateImageContainer(img, titleLeft, titleRight, keyword) {
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

    //新增一個Div 拿來裝卡池標題
    var newTitle = document.createElement("div"); 
    newTitle.className = "card-title";

    //新增一個Div 拿來裝卡池圖
    var newCardimg = document.createElement("div");
    newCardimg.className = "card-img"
    
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
    
    //添加搜尋關鍵字
    var newText =document.createElement("span");
    newText.style.display = "none";
    newText.innerHTML = keyword;

    newTitle.appendChild(newTitleLeft);
    newTitle.appendChild(newTitleRight);

    newCard.appendChild(newText);
    newContainer.appendChild(newCard);
    newContainer.appendChild(newEventBlock);
    newCard.appendChild(newTitle);
    newCard.appendChild(newCardimg);
    newCardimg.appendChild(newImg);
    
    
    containerCount++;
    return newContainer;
  } 


function addNewContainer(blocknum, url, titleLeftText, titleRightText, keyWord) {
    var centerBlock = document.querySelector("#center-block-" + blocknum);
    var newContainer = generateImageContainer(url, titleLeftText, titleRightText, keyWord);
    centerBlock.appendChild(newContainer);
}

var eventCount = 0;
function insertEvent (eventnum, img2){
    
    var eventBlock = document.getElementById('event-block-' + eventnum);
    var newEvent = document.createElement("div");
    var EventImg = document.createElement("img");
    EventImg.src = img2;
    newEvent.className = "event";
    newEvent.id = "event-" + eventCount;

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

    eventCount ++;
    return;
}


window.onload = function() {
    

    addNewContainer("1"); 
    addNewContainer("1");
    addNewContainer("1","https://i.imgur.com/hPOFvzm.jpg", "2022 新年池", "限定", "風pf/美美/2021/12");
    addNewContainer("2","https://i.imgur.com/LIpWUVO.jpg", "2020 新年池", "復刻限定"); 
    addNewContainer("2","https://i.imgur.com/YrP33C1.jpg", "1周年池", "復刻限定");
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
    addNewContainer("5","https://i.imgur.com/tOrBcwI.jpg", "0觸風孃池", "復刻限定");
    addNewContainer("5","https://i.imgur.com/IllVQdL.jpg", "新常駐池", "");
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
    addNewContainer("14","https://i.imgur.com/JckLefF.jpg", "2021 新年池", "復刻限定");
    addNewContainer("14","https://i.imgur.com/cj7HcUk.jpg", "新常駐池", "");
    addNewContainer("14","https://i.imgur.com/4EZC9q6.jpg", "星白池", "限定 + 常駐");
    addNewContainer("14","https://i.imgur.com/ntnAVtv.jpg", "流星祭二池", "限定");
    addNewContainer("15","https://i.imgur.com/fdVYnS0.jpg", "2021 情人節池", "復刻限定");
    addNewContainer("15","https://i.imgur.com/BQpoqbh.jpg", "風舞孃復刻池", "復刻限定 + 常駐");
    addNewContainer("15","https://i.imgur.com/BHDi48z.jpg", "2023 情人節池", "限定");
    addNewContainer("15","https://i.imgur.com/4v17LCa.jpg", "2022 泳裝池", "復刻限定");

   
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
    
    
    insertEvent(2,"https://i.imgur.com/2qx1nIU.jpg");
    insertEvent(2,"https://i.imgur.com/9APBl7T.jpg");
    insertEvent(3,"https://i.imgur.com/olVLwGv.jpg");
    insertEvent(3,"https://i.imgur.com/lRaqqsz.jpg");
    insertEvent(5,"https://i.imgur.com/33g6UzB.jpg");
    insertEvent(5,"https://i.imgur.com/Drrl1gK.jpg");
    insertEvent(5,"https://i.imgur.com/CI6XUvO.jpg");
    insertEvent(5,"https://i.imgur.com/y12UheF.jpg");
    insertEvent(6,"https://i.imgur.com/RjlA4hg.jpg");
    insertEvent(6,"https://i.imgur.com/xcC9jpI.jpg");
    insertEvent(7,"https://i.imgur.com/6aNYwsH.jpg");
    insertEvent(7,"https://i.imgur.com/hBet6gf.jpg");
    insertEvent(7,"https://i.imgur.com/hitozzM.jpg");
    insertEvent(7,"https://i.imgur.com/ABjo2zK.jpg");
    insertEvent(7,"https://i.imgur.com/83sb6Eh.jpg");
    insertEvent(9,"https://i.imgur.com/qjWF311.jpg");
    insertEvent(9,"https://i.imgur.com/EYXnARb.jpg");
    insertEvent(9,"https://i.imgur.com/BuD8BMs.jpg");
    insertEvent(10,"https://i.imgur.com/nhLKrgK.jpg");
    insertEvent(10,"https://i.imgur.com/cFGqQAL.png");
    insertEvent(11,"https://i.imgur.com/bgxw4MK.jpg");
    insertEvent(11,"https://i.imgur.com/h5Wk2we.jpg");
    insertEvent(11,"https://i.imgur.com/7mGQD6K.jpg");
    insertEvent(11,"https://i.imgur.com/yitpc3C.jpg");
    insertEvent(12,"https://i.imgur.com/UrHFhYf.jpg");
    insertEvent(13,"https://i.imgur.com/hyoihGU.jpg");
    insertEvent(13,"https://i.imgur.com/HXY7qKn.png");
    insertEvent(13,"https://i.imgur.com/rC5MTF1.jpg");
    insertEvent(13,"https://i.imgur.com/Vid6Sgq.jpg");
    insertEvent(14,"https://i.imgur.com/jxnVHrG.jpg");
    insertEvent(15,"https://i.imgur.com/83Gbdu0.jpg");
    insertEvent(15,"https://i.imgur.com/I5qPtuV.jpg");
    insertEvent(17,"https://i.imgur.com/PQoLlHp.jpg");
    insertEvent(18,"https://i.imgur.com/AMl4Vvm.png");
    insertEvent(18,"https://i.imgur.com/nw2iShb.jpg");
    insertEvent(19,"https://i.imgur.com/z8xXfow.jpg");
    insertEvent(20,"https://i.imgur.com/h7xmnlZ.jpg");
    insertEvent(21,"https://i.imgur.com/kLjlFqN.jpg");
    insertEvent(22,"https://i.imgur.com/5Emfgr3.jpg");
    insertEvent(22,"https://i.imgur.com/1lgNHbG.jpg");
    insertEvent(22,"https://i.imgur.com/9ducfyv.jpg");
    insertEvent(22,"https://i.imgur.com/8wZNM83.jpg");
    insertEvent(22,"https://i.imgur.com/OA46EcU.jpg");
    insertEvent(22,"https://i.imgur.com/BGpWW2w.jpg");
    insertEvent(22,"https://i.imgur.com/Kgn3PDx.jpg");
    insertEvent(22,"https://i.imgur.com/gD6v0m5.jpg");
    insertEvent(22,"https://i.imgur.com/u2DZGXL.jpg");
    insertEvent(23,"https://i.imgur.com/eZxx2lM.jpg");
    insertEvent(23,"https://i.imgur.com/swlt8bh.jpg");
    insertEvent(24,"https://i.imgur.com/yiMXpbS.jpg");
    insertEvent(25,"https://i.imgur.com/E3jyVNS.jpg");
    insertEvent(26,"https://i.imgur.com/vDwwLCj.jpg");
    insertEvent(26,"https://i.imgur.com/9dOp5aH.jpg");
    insertEvent(26,"https://i.imgur.com/T5SJtjQ.jpg");
    insertEvent(27,"https://i.imgur.com/Bt2XdIr.jpg");
    insertEvent(28,"https://i.imgur.com/wlpgCjb.png");
    insertEvent(28,"https://i.imgur.com/NoEHHsV.jpg");
    insertEvent(30,"https://i.imgur.com/3E0xfZX.jpg");
    insertEvent(30,"https://i.imgur.com/uay3DKV.jpg");
    insertEvent(30,"https://i.imgur.com/ZLFbZ4T.jpg");
    insertEvent(31,"https://i.imgur.com/cMwF1ba.jpg");
    insertEvent(32,"https://i.imgur.com/mmS18H5.jpg");
    insertEvent(33,"https://i.imgur.com/OzOb6ry.jpg");
    insertEvent(33,"https://i.imgur.com/K5evlES.jpg");
    insertEvent(34,"https://i.imgur.com/IXqv12W.jpg");
    insertEvent(34,"https://i.imgur.com/nVZ0j7c.jpg");
    insertEvent(34,"https://i.imgur.com/ObMTiSm.jpg");
    insertEvent(34,"https://i.imgur.com/azsvBKB.jpg");
    insertEvent(34,"https://i.imgur.com/i6F0zvb.jpg");
    insertEvent(35,"https://i.imgur.com/dAWz9mW.jpg");
    insertEvent(36,"https://i.imgur.com/mRpz8YF.png");
    insertEvent(36,"https://i.imgur.com/tKLevK5.png");
    insertEvent(36,"https://i.imgur.com/kKcqhtb.jpg");
    insertEvent(37,"https://i.imgur.com/R75ykYX.jpg");
    insertEvent(37,"https://i.imgur.com/YSLYUJg.jpg");
    insertEvent(38,"https://i.imgur.com/LCY4VWI.png");
    insertEvent(38,"https://i.imgur.com/qzI6blz.jpg");
    insertEvent(38,"https://i.imgur.com/P4uBsgd.jpg");
    insertEvent(38,"https://i.imgur.com/203fgTo.jpg");
    insertEvent(39,"https://i.imgur.com/bVzxFti.jpg");
    insertEvent(39,"https://i.imgur.com/HZN2Fla.jpg");
    insertEvent(40,"https://i.imgur.com/JV2WMHf.png");
    insertEvent(40,"https://i.imgur.com/8Rc4m2i.jpg");
    insertEvent(40,"https://i.imgur.com/vdinQHn.jpg");
    insertEvent(41,"https://i.imgur.com/qzI6blz.jpg");
    insertEvent(42,"https://i.imgur.com/XXqBMkd.jpg");
    insertEvent(42,"https://i.imgur.com/LR4A9Nr.jpg");
    insertEvent(43,"https://i.imgur.com/VYPY7do.jpg");
    insertEvent(44,"https://i.imgur.com/PheQS0y.jpg");
    insertEvent(44,"https://i.imgur.com/zSb7Pkg.jpg");
    insertEvent(45,"https://i.imgur.com/Zitnlju.jpg");
    insertEvent(46,"https://i.imgur.com/n3LWq2l.jpg");
    insertEvent(46,"https://i.imgur.com/j1yfA8u.jpg");
    insertEvent(46,"https://i.imgur.com/Jcy8ELt.jpg");
    insertEvent(46,"https://i.imgur.com/H2WfdK6.jpg");
    insertEvent(46,"https://i.imgur.com/nnI0fpc.jpg");
    insertEvent(46,"https://i.imgur.com/aTA9ska.jpg");
    insertEvent(46,"https://i.imgur.com/yETePgV.jpg");
    insertEvent(47,"https://i.imgur.com/tNv0Ai2.jpg");
    insertEvent(48,"https://i.imgur.com/dfLdHqx.jpg");
    insertEvent(48,"https://i.imgur.com/ihexUo1.jpg");
    insertEvent(50,"https://i.imgur.com/7Azf24K.jpg");
    insertEvent(50,"https://i.imgur.com/AM900vn.jpg");
    insertEvent(50,"https://i.imgur.com/l7oreTF.jpg");
    insertEvent(50,"https://i.imgur.com/m7q36dz.jpg");
    insertEvent(50,"https://i.imgur.com/YdfNen4.jpg");
    insertEvent(50,"https://i.imgur.com/azzDSo2.jpg");
    insertEvent(51,"https://i.imgur.com/lxNiO8a.jpg");
    insertEvent(51,"https://i.imgur.com/8V6DbGe.jpg");
    insertEvent(51,"https://i.imgur.com/YadcKnM.jpg");
    insertEvent(52,"https://i.imgur.com/kiCSLFO.jpg");
    insertEvent(53,"https://i.imgur.com/6n0Xgj3.jpg");
    insertEvent(54,"https://i.imgur.com/QvfCcjH.png");
    insertEvent(54,"https://i.imgur.com/Xpgi12r.jpg");
    insertEvent(54,"https://i.imgur.com/oPENWWb.jpg");
    insertEvent(55,"https://i.imgur.com/29zwK6y.jpg");
    insertEvent(55,"https://i.imgur.com/A4MyqMf.jpg");
    insertEvent(56,"https://i.imgur.com/jLzdr3V.jpg");
    insertEvent(56,"https://i.imgur.com/yc5XEj9.jpg");
    insertEvent(56,"https://i.imgur.com/1cTn2ar.jpg");
    insertEvent(58,"https://i.imgur.com/Cp2zS7y.jpg");
    insertEvent(58,"https://i.imgur.com/wFTx3Yb.jpg");



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
for (let i = 0; i <= 4; i++) {
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

function searchKeyword() {
  const keywordInput = document.getElementById("searchBox");
  const keyword = keywordInput.value.toLowerCase().trim();

  // 如果搜尋框是空白的，重新整理頁面
  if (keyword === "") {
    location.reload();
    return;
  }

  // 隱藏所有的 image-container
  const allImageContainers = document.querySelectorAll(".image-container");
  allImageContainers.forEach((container) => container.style.display = "none");

  // 找到含有關鍵字的元素，並顯示對應的 image-container
  const allElements = document.querySelectorAll("body *");
  allElements.forEach((element) => {
    if (window.getComputedStyle(element).display !== "none" &&
        element.textContent.toLowerCase().includes(keyword)) {
      const container = element.closest(".image-container");
      if (container) {
        container.style.display = "block";
        // 顯示對應的 content
        const content = container.closest("[id^='content-']");
        if (content) {
          const contentId = content.id.split("-")[1];
          const contentContainer = document.getElementById(`content-${contentId}`);
          if (contentContainer) {
            contentContainer.style.display = "block";
          }
        }
      }
    }
  });

  // 清空關鍵字欄位
  keywordInput.value = "";
}

// 監聽input的keypress事件
searchBox.addEventListener("keypress", function(event) {
  // 如果按下的是enter鍵 (keyCode = 13)
  if (event.keyCode === 13) {
    // 防止表單提交
    event.preventDefault();
    // 呼叫searchKeyword()函數
    searchKeyword();
  }
});

var dropdownContent = document.getElementById("dropdownContent");

function toggleDropdown() {
  dropdownContent.classList.toggle("show");
}

function stopPropagation(event) {
  event.stopPropagation();
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    dropdownContent.classList.remove("show");
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

