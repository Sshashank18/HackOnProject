import React, { Component } from 'react';

import classes from './StudentTextEditor.css';

class StudentTextEditor extends Component {
    constructor(props) {
        super(props);

        this.socket = this.props.socket;

        this.state = {
            textEditor: "",
            input: ""
        }
    }

    componentDidMount() {
        this.socket.on('getInput', data => {
            this.setState({
                input: data.input
            });
        });
        
        
        this.socket.on('getTextEditor', data => {
            this.setState({
                textEditor: data.textEditor
            });
        });
    }

    render() {
        return (
            <div id="textEditor" className={classes.textEditor}>
                <div id="theRibbon" className={classes.theRibbon}>
                    {/* <button id="boldButton" title="Bold" className={classes.boldButton}><b>B</b></button>
                    <button id="italicButton" title="Italic" className={classes.italicButton}><em>I</em></button>
                    <button id="underlinedButton" title="Underline" className={classes.underlinedButton}><u>U</u></button>
                    <button id="supButton" title="Superscript" className={classes.supButton}>X<sup>2</sup></button>
                    <button id="subButton" title="Subscript" className={classes.subButton}>X<sub>2</sub></button>
                    <button id="strikeButton" title="Strikethrough" className={classes.strikeButton}><s>abc</s></button>
                    <button id="orderedListButton" title="Numbered List" className={classes.orderedListButton} >(i)</button>
                    <button id="unorderedListButton" title="Bulleted List" className={classes.unorderedListButton} >&bull;</button>
                    
                    <input type="color" id="fontColorButton" title="Change Font Color" className={classes.fontColorButton}/>
                    <input type="color" id="highlightButton" title="Highlight Text" className={classes.hightlightButton}/> */}
                    
                    {/* <select id="fontChanger" className={classes.fontChanger}>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Consolas">Consolas</option>
                        <option value="Tahoma">Tahoma</option>
                        <option value="Monospace">Monospace</option>
                        <option value="Cursive">Cursive</option>
                        <option value="Sans-serif">sans-serif</option>
                        <option value="Calibri">Calibri</option>
                    </select> */}
                    
                    {/* <button id="undoButton" title="Undo" className={classes.undoButton}>&larr;</button>
                    <button id="redoButton" title="Redo" className={classes.redoButton} >&rarr;</button>
                     */}
                </div>
                
                <div id="richTextArea" className={classes.richTextArea}>
                    {this.state.textEditor.split('\n').map((item, i) => <p key={i}>{item}</p>)}                        
                </div>
                
                <div id="outputBox" className={classes.outputBox}>
                    <div id="outputHeading" className={classes.outputHeading}>
                        <h3 id="inpHead" className={classes.inpHead} >Input</h3>
                        <h3 id="outHead"className={classes.outHead} >Output</h3>
                    </div>
                    <div id="input" className={classes.input}>
                        {this.state.input.split('\n').map((item, i) => <p key={i}>{item}</p>)}  
                    </div>
                    <div id="output" className={classes.output}>
                        
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default StudentTextEditor;