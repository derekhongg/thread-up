import { usePostAiTextMutation } from "@/state/api";
import React, { useState } from "react";
import MessageFormUI from "./MessageFormUI";

import React from 'react'

const ai = ({ props, activeChat }) => {
    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [trigger] = usePostAiTextMutation();

    const handleChange = (e) => setMessage(e.target.value);

    return (
        <div>ai</div>
    )
}

export default ai