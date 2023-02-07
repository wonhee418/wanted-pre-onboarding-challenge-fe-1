import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router";
import AuthForm from "./AuthForm";
import { useAuth } from "./hooks/useAuth";
const Register = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const goRegister = () => {
    navigate("/auth");
  };
  const onSubmit = (data: FieldValues) => {
    const { email, password } = data;
    auth.signUp(email, password);
  };

  return (
    <div className="flex justify-center flex-col items-center w-full h-[calc(100vh-72px)]">
      <h2 className="font-bold text-2xl pb-6 text-center">회원가입</h2>
      <AuthForm onSubmit={onSubmit} buttonValue={"회원가입"} />
      <p
        className=" pt-2 text-xs cursor-pointer text-left"
        onClick={goRegister}>
        로그인으로 돌아가기
      </p>
    </div>
  );
};

export default Register;
