import React, { Component } from 'react';

import classes from './TextEditor.css';

class TextEditor extends Component {

    constructor(props) {
        super(props);
        this.socket = this.props.socket;

        this.state = {
            textEditor: "",
            input: ""
        }
    }

    inputHandler = event => {
        this.setState({
            input: event.target.value
        });

        this.socket.emit('shareInput', {
            input: this.state.input
        });
    }

    textEditorHandler = event => {
        this.setState({
            textEditor: event.target.value
        }, () => {
            this.socket.emit('shareTextEditor', {
                textEditor: this.state.textEditor
            });

        });

    }

    componentDidMount() {
        /*
        // var editor2=inpContent.document;
        // editor2.designMode="on";

        
        // var editor = theWYSIWYG.document;
        // //theWYSIWYG is the name tag used here not ID and .document is used because iframe has its own document.
        // editor.designMode="on";

        // boldButton.addEventListener('click',()=>{
        //     editor.execCommand("Bold",false,null);
        // },false);

        // italicButton.addEventListener('click',()=>{
        //     editor.execCommand("Italic",false,null);
        // },false);

        // underlinedButton.addEventListener('click',()=>{
        //     editor.execCommand("Underline",false,null);
        // },false);

        // supButton.addEventListener('click',()=>{
        //     editor.execCommand("Superscript",false,null);
        // },false);

        // subButton.addEventListener('click',()=>{
        //     editor.execCommand("Subscript",false,null);
        // },false);

        // strikeButton.addEventListener('click',()=>{
        //     editor.execCommand("Strikethrough",false,null);
        // },false);

        // orderedListButton.addEventListener('click',()=>{
        //     editor.execCommand("InsertOrderedList",false, "newOL"+ Math.round(Math.random() *1000));  //For Generating new ID for every ordered list
        // },false);

        // unorderedListButton.addEventListener('click',()=>{
        //     editor.execCommand("InsertUnorderedList",false, "newOL"+ Math.round(Math.random() *1000));
        // },false);

        // fontColorButton.addEventListener('change',(event)=>{
        //     editor.execCommand("ForeColor",false,event.target.value);
        // },false);

        // highlightButton.addEventListener('change',(event)=>{
        //     editor.execCommand("BackColor",false,event.target.value);
        // },false);

        // fontChanger.addEventListener('change',(event)=>{
        //     editor.execCommand('FontName',false,event.target.value);
        // },false);

        // fontSizeChanger.addEventListener('change',(event)=>{
        //     editor.execCommand('FontSize',false,event.target.value);
        // },false);

        // undoButton.addEventListener('click',()=>{
        //     editor.execCommand("undo",false,null);
        // },false);

        // redoButton.addEventListener('click',()=>{
        //     editor.execCommand("redo",false,null);
        // },false);

        */
    }

    render() {
        return (
            <div id="textEditor" className={classes.textEditor}>
                <div id="theRibbon" className={classes.theRibbon}>
                    <button id="boldButton" title="Bold" className={classes.boldButton}><b>B</b></button>
                    <button id="italicButton" title="Italic" className={classes.italicButton}><em>I</em></button>
                    <button id="underlinedButton" title="Underline" className={classes.underlinedButton}><u>U</u></button>
                    <button id="supButton" title="Superscript" className={classes.supButton}>X<sup>2</sup></button>
                    <button id="subButton" title="Subscript" className={classes.subButton}>X<sub>2</sub></button>
                    <button id="strikeButton" title="Strikethrough" className={classes.strikeButton}><s>abc</s></button>
                    <button id="orderedListButton" title="Numbered List" className={classes.orderedListButton} >(i)</button>
                    <button id="unorderedListButton" title="Bulleted List" className={classes.unorderedListButton} >&bull;</button>
                    
                    <input type="color" id="fontColorButton" title="Change Font Color" className={classes.fontColorButton}/>
                    <input type="color" id="highlightButton" title="Highlight Text" className={classes.hightlightButton}/>
                    
                    <select id="fontChanger" className={classes.fontChanger}>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Consolas">Consolas</option>
                        <option value="Tahoma">Tahoma</option>
                        <option value="Monospace">Monospace</option>
                        <option value="Cursive">Cursive</option>
                        <option value="Sans-serif">sans-serif</option>
                        <option value="Calibri">Calibri</option>
                    </select>
                    
                    <button id="undoButton" title="Undo" className={classes.undoButton}>&larr;</button>
                    <button id="redoButton" title="Redo" className={classes.redoButton} >&rarr;</button>
                    
                </div>
                
                <div id="richTextArea" className={classes.richTextArea}>
                    <textarea onInput={this.textEditorHandler} id="theWYSIWYG" name="theWYSIWYG" frameBorder="0" className={classes.theWYSIWYG}></textarea>
                </div>
                
                <div id="outputBox" className={classes.outputBox}>
                    <div id="outputHeading" className={classes.outputHeading}>
                        <h3 id="inpHead" className={classes.inpHead} >Input</h3>
                        <h3 id="outHead"className={classes.outHead} >Output</h3>
                    </div>
                    <div id="input" className={classes.input}>
                        <textarea onInput={this.inputHandler} id="inpContent" name="inpContent" frameBorder="0" className={classes.inpContent}></textarea>
                    </div>
                    <div id="output" className={classes.output}>
                        
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default TextEditor;