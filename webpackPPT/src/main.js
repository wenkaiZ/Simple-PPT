import '../style/main.css';
import './addArea';
import {selectedArea} from './addArea';

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

//delete area
var deleteBtn = document.getElementById('delete');
deleteBtn.onclick = function(){document.getElementById('slide').removeChild(selectedArea)};