import React, { useState } from "react";
import MessageFormUI from "./MessageFormUI";
import { XMarkIcon } from "@heroicons/react/24/solid";

const standardMessageForm = () => {

    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [preview, setPreview] = useState("");

    const handleChange = (e) => setMessage(e.target.value);
    
    return (
    <div className = "message-form-container">
        {preview && (
            <div>
                <img
                    alt="message-form-preview"
                    className="message-form-preview-image"
                    src={preview}
                    onLoad={() => URL.revokeObjectURL(preview)}
                />
                <XMarkIcon
                    className="message-form-icon-x"
                    onClick = {() => {
                        setPreview("");
                        setAttachment("");
                    }}

                />
            </div>
        )}
        <div>message form
            <div className="message-form-input-container">
                <input
                    className="message-form-input"
                    type="text"
                    value={message}
                    onChange={handleChange}
                    placeholder="Send a topic for Thread"
                />
            </div>
        </div>
    </div>
    )
}

export default standardMessageForm;


/* Notes:

- URL.revokeObjectURL will free up space when you don't need the image anymore

*/