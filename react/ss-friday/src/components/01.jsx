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
    }
    else {
      console.log("로그인 실패!");
    }
  }


  return (
  <div>
    <form onSubmit={onSubmitHandler}>
      
      <label>ID : </label>
      <input 
        type="text" 
        value={loginid} 
        placeholder="사용자명"
        onChange={onLoginHandler}
      /> 
      <br/><br/>

      <label>PW : </label>
      <input 
        type="password" 
        value={password} 
        placeholder="비밀번호"
        onChange={onPasswordHandler}
      />
      <br/><br/>

      <button formAction="">로그인</button>

    </form>
  </div>
 );
}

export default LoginForm;