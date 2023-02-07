import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { useAuth } from "./hooks/useAuth";
const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const goRegister = () => {
    navigate("/auth/register");
  };

  const onSubmit = (data: FieldValues) => {
    const { email, password } = data;
    auth.signIn(email, password);
  };

  return (
    <div className="flex justify-center flex-col items-center h-[calc(100vh-72px)]">
      <h2 className="font-bold text-2xl pb-6">로그인</h2>
      <AuthForm onSubmit={onSubmit} buttonValue={"로그인"} />
      <p
        className=" pt-2 text-xs cursor-pointer text-left"
        onClick={goRegister}>
        회원가입
      </p>
    </div>
  );
};

export default Login;
