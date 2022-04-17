import {act, create} from "react-test-renderer";
import Chats from "./react-test-renderer/chats/chats";
import chatsJson from "./react-test-renderer/chats/chats.json";

test('chats render on chat screen', () => {
    let chatsRender
    act(() => {
        chatsRender = create(
            <Chats
                chats={chatsJson}/>
        )
    })
    const root = chatsRender.root
    const ttrChats = root.findAllByProps({
        className: "ttr-chat"})
    expect(ttrChats.length).toBe(chatsJson.length)
    ttrChats.forEach((ttrChat, ndx) => {
        expect(ttrChat.props.children).toBe(chatsJson[ndx].message)
    })
})
