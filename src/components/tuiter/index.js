import React from "react";
import Navigation from "../navigation";
import WhatsHappening from "../whats-happening";
import {Routes, Route, HashRouter, Link} from "react-router-dom";
import Home from "../home";
import Bookmarks from "../bookmarks";
import Profile from "../profile";
import './tuiter.css'
import EditProfile from "../profile/edit-profile";
import Explore from "../explore";
import Notifications from "../notifications";
import Messages from "../messages";
import Lists from "../lists";
import More from "../more";
import {Login} from "../profile/login";
import Signup from "../profile/signup";
import TuitScreen from "../tuits/tuit-screen";
import Chat from "../chat/Chat";
import {Badge, Button} from "@mui/material";
import Avatar from "@material-ui/core/Avatar";

function Tuiter() {
    return (
        <HashRouter>
            <div className="container-fluid">
                <div className="ttr-tuiter">
                    <div className="ttr-left-column">
                        <Navigation/>
                    </div>
                    <div className="ttr-center-column">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/signup" element={<Signup/>}/>
                            <Route path="/tuiter" element={<Home/>}/>
                            <Route path="/tuiter/:uid" element={<Home/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/home/:uid" element={<Home/>}/>
                            <Route path="/explore" element={<Explore/>}/>
                            <Route path="/notifications" element={<Notifications/>}/>
                            <Route path="/messages" element={<Messages/>}/>
                            <Route path="/bookmarks" element={<Bookmarks/>}/>
                            <Route path="/lists" element={<Lists/>}/>
                            <Route path="/profile/*" element={<Profile/>}/>
                            <Route path="/profile/edit" element={<EditProfile/>}/>
                            <Route path="/more" element={<More/>}/>
                            <Route path="/tuit/:tid" element={<TuitScreen/>}/>
                            <Route path="/chats/*" element={<Chat/>}/>
                        </Routes>
                    </div>
                    <div className="ttr-right-column">
                        <WhatsHappening/>
                    </div>
                </div>
                <Button style={{position: "absolute", left: '88%', top: '88%'}} component={Link} key='chat' to='/chats'>
                    <Badge
                        color="error" badgeContent={1} anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    >
                        <Avatar style={{
                            backgroundColor: '#0d6efd',
                            color: '#fff',
                            width: 50,
                            height: 50,
                            padding: 29,
                            margin: -6
                        }}>Chat</Avatar>
                    </Badge>
                </Button>
            </div>
        </HashRouter>
    );
}

export default Tuiter;
