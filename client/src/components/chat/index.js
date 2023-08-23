import React from "react";
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced";
import Header from '@/components/customHeader';
import standardMessageForm from "../customMessageForms/standardMessageForm";
import Ai from "../customMessageForms/ai";
// import AiCode from "@/components/customMessageForms/AiCode";
// import AiAssist from "@/components/customMessageForms/AiAssist";

const Chat = () => {

  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "testuser",
    "1234"
  );

  return (
    <div style={{ flexBasis: "100%"}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {

          if(chatProps.chat?.title.startsWith("aiChat_")) {
            return <Ai props={props} activeChat={chatProps.chat} />
          }

          return(
            <standardMessageForm props = {props} activeChat={chatProps.chat} />
          )
        }}
      />
    </div>
  )
}

export default Chat;