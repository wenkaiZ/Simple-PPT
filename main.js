//set bold
document.getElementById('bold').onclick = function(){
    var selection = window.getSelection();
    console.log(selection);
    document.execCommand('bold',false,null);
};
//set italics
document.getElementById('italics').onclick = function(){
    document.execCommand('italic',false,null);
};
//set underline
document.getElementById('underline').onclick = function(){
    document.execCommand('underline',false,null);
};
//add text area
document.getElementById('text_btn').onclick = function(){
    let new_area = document.createElement('div');
    new_area.id = 'text_area';
    //edit position&size of text area
    new_area.onmousedown = function(ev){
        console.log(this);
        var that = this;
        var oevent = ev || event;
        //distance between clicking position and area's border
        var distanceX = oevent.clientX - that.offsetLeft;
        var distanceY = oevent.clientY - that.offsetTop;
        //set the inline style to help change area's size
        that.style.width = that.style.width || that.offsetWidth-20;
        that.style.height = that.style.height || that.offsetHeight-20;
        var widthWhenClick = parseInt(that.style.width);
        var heigjtWhenClick = parseInt(that.style.height);
        var xWhenClick = oevent.clientX;
        var yWhenClick = oevent.clientY;
        console.log('offsetWidth:'+that.offsetWidth);
        console.log('width:'+widthWhenClick);
        console.log('left:'+that.offsetLeft);
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
        };
    };
    document.getElementById('slide').appendChild(new_area);
}