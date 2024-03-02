import React, { useState } from 'react';
 
function TextForm(props) {
    const [text, setText] = useState("");
 
    const handleUpClick = () => {
        setText(text.toUpperCase());
        text === "" ? props.showAlert("Enter text in the textarea to perform the operation!", "warning") : props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        text === "" ? props.showAlert("Enter text in the textarea to perform the operation!", "warning") : props.showAlert("Converted to lowercase!", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleClear = () => {
        setText("");
    }
    const handleCopy = () => {
        var copyText = document.getElementById("textBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        text === "" ? props.showAlert("Enter text in the textarea to perform the operation!", "warning") : props.showAlert("Text copied to clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let newString = text.replace(/ {2,}/g, ' ').replace(/\n /g, '\n').trim();
        setText(newString);
        text === "" ? props.showAlert("Enter text in the textarea to perform the operation!", "warning") : props.showAlert("Extra spaces are removed!", "success");
    }
    const handleLineBreaks = () => {
        let newString = text.replace(/\n/g, ' ');
        setText(newString);
        text === "" ? props.showAlert("Enter text in the textarea to perform the operation!", "warning") : props.showAlert("Line breaks are gone!", "success");
 
    }
    const handleReverseCharacters = () => {
        let newString = text.split('').reverse().join('');
        setText(newString);
        text === "" ? props.showAlert("Enter text in the textarea to perform the operation!", "warning") : props.showAlert("Text reversed!", "success");
    }
    const handleReverseWords = () => {
        let newString = text.split(/\s+/).reverse().join(' ');
        setText(newString);
        text === "" ? props.showAlert("Enter text in the textarea to perform the operation!", "warning") : props.showAlert("Words reversed!", "success");
    }
    const handleTextToHtml = () => {
        const formattedText = text
            .replace(/\r?\n/g, "<br/>")  // Convert newlines to <br/> tags
            .replace(/\s\s+/g, " &nbsp;") // Convert multiple spaces to non-breaking spaces
            .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;") // Convert tabs to 4 non-breaking spaces
            .replace(/\*([^\*]+)\*/g, "<strong>$1</strong>")
            .replace(/_([^_]+)_/g, "<em>$1</em>");
        setText(formattedText);
        text === "" ? props.showAlert("Enter text in the textarea to perform the operation!", "warning") : props.showAlert("Text is converted to html!", "success");
 
    }
 
    const handleHtmlToText = () => {
        var doc = new DOMParser().parseFromString(text, 'text/html');
        let plaintext = doc.body.textContent || "";
        setText(plaintext);
        text === "" ? props.showAlert("Enter text in the textarea to perform the operation!", "warning") : props.showAlert("Html is converted to text!", "success");
    }
 
 
 
    return (
        <>
            <div className="container my-3">
 
                <div>
                    <label htmlFor="textBox" className="form-label"><h3>{props.heading}</h3></label>
                    <button className="btn btn-danger mx-1 my-1" style={{ float: 'right' }} onClick={handleClear}>Clear Text</button>
                    <button className="btn btn-success mx-1 my-1" style={{ float: 'right' }} onClick={handleCopy}>Copy Text</button>
                </div>
                <textarea className="form-control" id="textBox" rows="8" placeholder='Enter the text here' value={text} onChange={handleOnChange}></textarea>
                <div>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleLineBreaks}>Remove Linebreaks</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleReverseCharacters}>Reverse characters</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleReverseWords}>Reverse words</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleTextToHtml}>Generate html</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleHtmlToText}>Generate plain text</button>
                </div>
 
                <div className='my-3'>
                    <h3>Your text summary</h3>
                    <p>{text.trim() !== "" ? text.trim().split(/\s+/).length : 0} words and {text.length} characters.</p>
                    <p>{0.008 * (text.trim() !== "" ? text.trim().split(/\s+/).length : 0)} minutes read.</p>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
 
    )
}
 
export default TextForm