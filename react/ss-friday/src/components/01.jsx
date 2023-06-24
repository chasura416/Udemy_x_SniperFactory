import React from "react";
import { useState } from "react";

const LoginForm = () => {
  const [loginid, setLoginid] = useState("");
  const [password, setPassword] = useState("");

  const onLoginHandler = (event) => {
    setLoginid(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }



  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(loginid === 'admin' && password === 'password') {
      console.log("로그인 성공!");
      alert('로그인 성공!');
    }
    else {
      console.log("로그인 실패!");
      alert('로그인 실패!');
    }
  }


  return (
  <div style={{
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center',
      // flexDirection: 'column',
      width: '100%',
      // height: '100vh',
  }}>
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
      }} 
      onSubmit={onSubmitHandler
    }>
      
      <label>ID</label>
      <input 
        type="text" 
        value={loginid} 
        placeholder="사용자명"
        onChange={onLoginHandler}
      /> 


      <label>PASSORD</label>
      <input 
        type="password" 
        value={password} 
        placeholder="비밀번호"
        onChange={onPasswordHandler}
      />

      <button formAction="">로그인</button>

    </form>
  </div>
 );
}

// const StLoginContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

export default LoginForm;