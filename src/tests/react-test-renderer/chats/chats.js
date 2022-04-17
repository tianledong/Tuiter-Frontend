import Chat from "./chat";

const Chats = ({chats = []}) => {
    return (
        <div>
            {
                chats.map(chat =>
                    <Chat
                        key={chat._id}
                        chat={chat}
                    />
                )
            }
        </div>
    )
}
export default Chats;
