var selectedArea = null;
export {selectedArea};
//add text area
document.getElementById('text_btn').onclick = function(){
    let new_area = document.createElement('div');
    new_area.id = 'text_area';
    new_area.setAttribute('contenteditable', 'true');
    new_area.style.zIndex = '2';
    //edit position&size of text area
    new_area.onmousedown = editTxtArea;
    document.getElementById('slide').appendChild(new_area);
}
//function of editting positon&size
var editTxtArea = function(ev){
    selectedArea = this;
    var that = this;
    that.style.border = "solid 1px lightblue";
    var oevent = ev || event;
    //distance between clicking position and area's border
    var distanceX = oevent.clientX - that.offsetLeft;
    var distanceY = oevent.clientY - that.offsetTop;
    //set the inline style to help change area's size
    that.style.width = that.style.width || that.offsetWidth-20;
    that.style.height = that.style.height || that.offsetHeight-20;
    var widthWhenClick = parseInt(that.style.width);
    var heightWhenClick = parseInt(that.style.height);
    var xWhenClick = oevent.clientX;
    var yWhenClick = oevent.clientY;

    //clink on left&top
    if((distanceX<10&&distanceY<10)){
        document.onmousemove = function(ev){
            var oevent = ev || event;
            that.style.left = oevent.clientX - distanceX + 'px';
            that.style.top = oevent.clientY - distanceY + 'px';
            that.style.width = (widthWhenClick - (oevent.clientX - xWhenClick)) + 'px';
            that.style.height = (heightWhenClick - (oevent.clientY - yWhenClick)) + 'px'; 
        }
    }
    //clink on left&bottom
    else if(distanceX<10&&distanceY>(that.offsetHeight-10)){
        document.onmousemove = function(ev){
            var oevent = ev || event;
            that.style.left = oevent.clientX - distanceX + 'px';
            that.style.width = (widthWhenClick - (oevent.clientX - xWhenClick)) + 'px';
            that.style.height = (heightWhenClick + (oevent.clientY - yWhenClick)) + 'px'; 
        }
    }
    //clink on right&top
    else if(distanceX>(that.offsetWidth-10)&&distanceY<10){
        document.onmousemove = function(ev){
            var oevent = ev || event;
            that.style.top = oevent.clientY - distanceY + 'px';
            that.style.width = (widthWhenClick + (oevent.clientX - xWhenClick)) + 'px';
            that.style.height = (heightWhenClick - (oevent.clientY - yWhenClick)) + 'px'; 
        }
    }
    //clink on right&bottom
    else if(distanceX>(that.offsetWidth-10)&&distanceY>(that.offsetHeight-10)){
        document.onmousemove = function(ev){
        var oevent = ev || event;
        that.style.width = (widthWhenClick + (oevent.clientX - xWhenClick)) + 'px';
        that.style.height = (heightWhenClick + (oevent.clientY - yWhenClick)) + 'px';
        }
    }
    //click on border
    else if(distanceX<10||distanceX>(that.offsetWidth-10)||distanceY<10||distanceY>(that.offsetHeight-10)){
        document.onmousemove = function(ev){
            console.log('in postion');
            var oevent = ev || event;
            that.style.left = oevent.clientX - distanceX + 'px';
            that.style.top = oevent.clientY - distanceY + 'px';
        }
    }

    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        that.style.border = "white";
    };
};



//add image
var addImageBtn = document.getElementById('image_btn');
addImageBtn.addEventListener('click',function (ev){
    let fileInput = document.getElementById('imagePath');
    fileInput.click();
    fileInput.onchange = function(){
        var file = this.files[0];
        if(window.FileReader){
            var reader = new FileReader();
            reader.readAsDataURL(file);
            //listen the end of read file
            reader.onloadend = function(e){
                if(e.target.result){
                    let new_area = document.createElement('div');
                    new_area.id = 'image_area';
                    new_area.setAttribute('contentEditable','true');
                    new_area.style.zIndex = '1';
                    new_area.onmousedown = editImgArea;
                    let new_image = document.createElement('img');
                    new_image.src = e.target.result;
                    new_image.alt = 'image';
                    new_area.appendChild(new_image);
                    document.getElementById('slide').appendChild(new_area);
                }
            }
        }
    };
});
//function of editting positon&size
var editImgArea = function(ev){
    selectedArea = this;
    var that = this;
    that.style.border = "solid 1px lightblue";
    var oevent = ev || event;
    //prevent the default event
    oevent.preventDefault();
    //distance between clicking position and area's border
    var distanceX = oevent.clientX - that.offsetLeft;
    var distanceY = oevent.clientY - that.offsetTop;
    //set the inline style to help change area's size
    that.style.width = that.style.width || that.offsetWidth;
    that.style.height = that.style.height || that.offsetHeight;
    var widthWhenClick = parseInt(that.style.width);
    var heigjtWhenClick = parseInt(that.style.height);
    var xWhenClick = oevent.clientX;
    var yWhenClick = oevent.clientY;

    //clink on left&top
    if((distanceX<10&&distanceY<10)){
        document.onmousemove = function(ev){
            var oevent = ev || event;
            that.style.left = oevent.clientX - distanceX + 'px';
            that.style.top = oevent.clientY - distanceY + 'px';
            that.style.width = (widthWhenClick - (oevent.clientX - xWhenClick)) + 'px';
            that.style.height = (heigjtWhenClick - (oevent.clientY - yWhenClick)) + 'px'; 
        }
    }
    //clink on left&bottom
    else if(distanceX<10&&distanceY>(that.offsetHeight-10)){
        document.onmousemove = function(ev){
            var oevent = ev || event;
            that.style.left = oevent.clientX - distanceX + 'px';
            that.style.width = (widthWhenClick - (oevent.clientX - xWhenClick)) + 'px';
            that.style.height = (heigjtWhenClick + (oevent.clientY - yWhenClick)) + 'px'; 
        }
    }
    //clink on right&top
    else if(distanceX>(that.offsetWidth-10)&&distanceY<10){
        document.onmousemove = function(ev){
            var oevent = ev || event;
            that.style.top = oevent.clientY - distanceY + 'px';
            that.style.width = (widthWhenClick + (oevent.clientX - xWhenClick)) + 'px';
            that.style.height = (heigjtWhenClick - (oevent.clientY - yWhenClick)) + 'px'; 
        }
    }
    //clink on right&bottom
    else if(distanceX>(that.offsetWidth-10)&&distanceY>(that.offsetHeight-10)){
        document.onmousemove = function(ev){
        var oevent = ev || event;
        that.style.width = (widthWhenClick + (oevent.clientX - xWhenClick)) + 'px';
        that.style.height = (heigjtWhenClick + (oevent.clientY - yWhenClick)) + 'px';
        }
    }
    //click on border
    else if(distanceX<10||distanceX>(that.offsetWidth-10)||distanceY<10||distanceY>(that.offsetHeight-10)){
        document.onmousemove = function(ev){
            console.log('in postion');
            var oevent = ev || event;
            that.style.left = oevent.clientX - distanceX + 'px';
            that.style.top = oevent.clientY - distanceY + 'px';
        }
    }

    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        that.style.border = "white";
    };
};