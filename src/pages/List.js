import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate();
    const roomList = [
        {
            id: 1,
            name: "1번방",
        },
        {
            id: 2,
            name: "2번방",
        },
        {
            id: 3,
            name: "3번방",
        },
    ];

    return (
        <div className="App">
            <h3>채팅 웹 구현</h3>
            <h4>방 목록</h4>
            <div>
                {roomList.map((room, idx) => (
                    <div key={idx}>
                        <span>{room.name}</span>
                        <button onClick={() => navigate(`/room/${room.id}`)}>입장</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
