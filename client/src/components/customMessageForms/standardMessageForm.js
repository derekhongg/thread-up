import React, { useState } from "react";
import MessageFormUI from "./MessageFormUI";
import { XMarkIcon } from "@heroicons/react/24/solid";

const standardMessageForm = () => {

    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [preview, setPreview] = useState("");

    return
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
    </div>
}

export default standardMessageForm;


/* Notes:

- URL.revokeObjectURL will free up space when you don't need the image anymore

*/