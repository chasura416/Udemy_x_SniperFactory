import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProfileData = {
  donghun: {
    id:1,
    name: "정동훈",
    description: "리액트 강의를 담당하고 있는 사람입니다.",
  },

  herry: {
    id:2,
    name: "민호",
    description: "인사이드 아웃 이사장입니다.",
  },
}

const Profile = () => {
  const {username} = useParams();
  const navigate = useNavigate();
  const profile = ProfileData[username];

  console.log(profile);
  // console.log(useParams());
  // console.log(username);
  // console.log(useNavigate());

  return (
    <div>
      <h3>
        {profile.name}({username}) 이 무엇을 하는 사람일까요?
      </h3>
      <p>{profile.description}</p>
      Profile 입니다.
      <div onClick={() => navigate(-1)}>뒤로가기</div>
    </div>
  );
}

export default Profile;