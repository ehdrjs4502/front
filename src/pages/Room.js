import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function Room() {
    const [inputValue, setInputValue] = useState(""); // 채팅 입력
    const [messageList, setMessageList] = useState([]); // 메시지 목록
    const { roomId } = useParams(); // 현재 방 번호

    useEffect(() => {
        socket.emit("joinRoom", roomId); // 클라이언트가 특정 방에 조인 요청을 보냄
        socket.on("receiveMessage", (data) => {
            console.log("대답왔음!", data); // 서버로부터 온 메시지를 출력
            const message = data;
            setMessageList((prevMessages) => [...prevMessages, message]);
        });
    }, [roomId]);

    const onClickSendBtn = () => {
        console.log("클릭");
        socket.emit("sendMessage", { message: inputValue, room: roomId }); // 클라이언트가 메시지를 특정 방으로 보냄
    };

    return (
        <div>
            <h4>{roomId}채팅방</h4>
            <div>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={onClickSendBtn}>전송</button>
            </div>
            <div>
                {messageList.map((message) => (
                    <div>{message.message}</div>
                ))}
            </div>
        </div>
    );
}
