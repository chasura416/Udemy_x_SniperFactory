import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from './Auth';

const Home = (props) => {
  const { setLoginState } = props;
  const navigate = useNavigate();

  return (
    <div>
      로그인 성공!
      <button onClick={ ()=> {
        setLoginState(false)
        navigate(<Auth />)
      }
      }>
        로그아웃
      </button>
    </div>
  );
};

export default Home;