import { Navigate, useNavigate,BrowserRouter, Route, Routes, useParams, useLocation, useSearchParams, Link } from 'react-router-dom';
import React, {useState, useEffect, useRef} from 'react';
import GameView from './GameView';
import styled from "styled-components";
import Nav from "./Nav"
import Pong from './Pong'
import FriendView from './FriendView'

const Img = styled.img`
    border-radius: 50%;
    height: 50%;
    width: 50%;
`;

const Log = styled.div`
    display:grid;
    justify-content:center;
    margin:2rem;
`;

const Loged =()=>{
    const [state, setState] = useState(false);
    if (state === false)
        window.history.pushState("", "", `/`)
    const imgUrl = "https://i0.wp.com/42place.innovationacademy.kr/wp-content/uploads/2021/12/2.jpg?resize=500%2C500&ssl=1"
    const handleClick =()=>{
        setState(true);
    }
    return (
        <>
        {state? (
            <>
            <Nav/>
            <Routes>
                <Route path="/" element={<></>}>ddd</Route>
                <Route path="/game" element={<GameView/>}>ddd</Route>
                <Route path="/friend" element={<FriendView/>}>ddd</Route>
            </Routes>
            </>
        ):(
        <Log>
        <div>
        <input placeholder='닉네임을 입력하세요'></input>
        <button>닉네임 입력</button>
        </div>
        <div>
            <Img src={imgUrl}alt='기본 이미지'></Img>기본이미지
        </div>
        <div>
        <input placeholder='이미지 주소를 입력하세요'></input>
        <button>이미지 주소입력</button>
        </div>
        <button onClick={handleClick}>설정 완료</button>
        </Log>
        )}
        </>
    )
    
}

const Login=()=>{
    const [searchParams,setSearchParams] = useSearchParams();
    // const code = searchParams.get('code');
    const code = "123";
    const redirectUrl = "https://api.intra.42.fr/oauth/authorize?client_id=49de17de65492eaafa8ad61d5baa32ca118adc3e998c0c011956860f154a2f3d&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code";

    return (
        <>
        {code? (
            <Loged></Loged>
        ): (
            <>
            <a href={redirectUrl}>42 Login</a>
            </>
        )}
        </>
    )
}
export default Login;

{/* 
// <Routes>
//         <Route path="/" element={<Loged/>}></Route>
        
//         </Routes> */}