import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { hasTokenState } from "../../atom/atom";
import { useAuth } from "../auth/hooks/useAuth";
const Header = () => {
  const tokenIsValid = useRecoilValue(hasTokenState);
  const navigate = useNavigate();
  const auth = useAuth();

  const goHoem = () => {
    navigate("/");
  };

  const goLogin = () => {
    navigate("/auth");
  };

  const logoutHandler = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 flex flex-row justify-center px-4 py-5 bg-slate-200 z-10 text-gray-700">
      <div className="flex justify-between max-w-screen-lg w-full">
        <div
          className=" font-bold text-2xl text-gray-700 cursor-pointer"
          onClick={goHoem}>
          MyTodo
        </div>
        <div className="flex items-center">
          <ul className="flex flex-row">
            <li
              className="pr-6 cursor-pointer"
              onClick={!tokenIsValid ? goLogin : logoutHandler}>
              {!tokenIsValid ? "로그인" : "로그아웃"}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default React.memo(Header);
