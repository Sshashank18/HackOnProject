window.addEventListener("load",function(){
    var editor2=inpContent.document;
    editor2.designMode="on";

    
    var editor = theWYSIWYG.document;
    //theWYSIWYG is the name tag used here not ID and .document is used because iframe has its own document.
    editor.designMode="on";

    boldButton.addEventListener('click',()=>{
        editor.execCommand("Bold",false,null);
    },false);

    italicButton.addEventListener('click',()=>{
        editor.execCommand("Italic",false,null);
    },false);

    underlinedButton.addEventListener('click',()=>{
        editor.execCommand("Underline",false,null);
    },false);

    supButton.addEventListener('click',()=>{
        editor.execCommand("Superscript",false,null);
    },false);

    subButton.addEventListener('click',()=>{
        editor.execCommand("Subscript",false,null);
    },false);

    strikeButton.addEventListener('click',()=>{
        editor.execCommand("Strikethrough",false,null);
    },false);

    orderedListButton.addEventListener('click',()=>{
        editor.execCommand("InsertOrderedList",false, "newOL"+ Math.round(Math.random() *1000));  //For Generating new ID for every ordered list
    },false);

    unorderedListButton.addEventListener('click',()=>{
        editor.execCommand("InsertUnorderedList",false, "newOL"+ Math.round(Math.random() *1000));
    },false);

    fontColorButton.addEventListener('change',(event)=>{
        editor.execCommand("ForeColor",false,event.target.value);
    },false);

    highlightButton.addEventListener('change',(event)=>{
        editor.execCommand("BackColor",false,event.target.value);
    },false);

    fontChanger.addEventListener('change',(event)=>{
        editor.execCommand('FontName',false,event.target.value);
    },false);

    fontSizeChanger.addEventListener('change',(event)=>{
        editor.execCommand('FontSize',false,event.target.value);
    },false);

    undoButton.addEventListener('click',()=>{
        editor.execCommand("undo",false,null);
    },false);

    redoButton.addEventListener('click',()=>{
        editor.execCommand("redo",false,null);
    },false);

},false);