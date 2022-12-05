import { WrongColor } from "@/utils/theme"
import { FunctionComponent, useState } from "react"
import Chat from "../chat/chat"
import { Message, MessageType } from "../message/message"

interface HintProps {
    messages: Message[]
}


const Hint: FunctionComponent<HintProps> = ({ messages }) => {
    return (
        // TODO: Fix positioning and design of hint + add icon for hint
		<div
			style={{
				position: "absolute",
				top: "900px",
				left: "100px",
				display: "flex",
				flexDirection: "row",
			}}
		>
			<div
				style={{
					width: "250px",
					height: "250px",
					borderRadius: "1000px",
					overflow: "hidden",
					display: "flex",
					justifyContent: "center",
					filter: "drop-shadow(0px 0px 50px rgba(246, 223, 232, 1))",
				}}
			>
                <video autoPlay loop muted playsInline src="/videos/ai.mp4" style={{ transform: "scale(1.65)" }} />
			</div>
            

			<div style={{ position: "absolute", background: WrongColor, bottom: "140px", left: "300px", height: "1000px" }}>
				<Chat messages={messages} />
			</div>
		</div>
	)
}