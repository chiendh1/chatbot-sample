import React from "react";
import { Widget } from "rasa-webchat";

const divStyle = {
  zIndex: 10,
  right: 0
};

export default class ChatBotWidget extends React.Component {
  render() {
    return (
      <Widget
        // onSocketEvent={{
        //   bot_uttered: () => console.log("the bot said something"),
        //   connect: () => console.log("connection established"),
        //   disconnect: () => console.log("connection disconnect")
        // }}
        // onWidgetEvent={{
        //   onChatOpen: () => {
        //     console.log("onChatOpen")
        //   },
        //   onChatClose: ()=>{
        //     console.log("onChatClose")
        //   },
        //   onChatHidden: ()=> {
        //     console.log("onChatHidden")
        //   }

        // }}
        hideWhenNotConnected={false}
        initPayload={"/get_started"}
        socketUrl={this.props.address}
        socketPath={"/socket.io/"}
        customData={{ language: "en" }} // arbitrary custom data. Stay minimal as this will be added to the socket
        title={"AFWERX Bot"}
        params={{
          images: {
            dims: {
              width: 300,
              height: 200
            }
          },
          storage: "local"
        }}
      />
    );
  }
}
