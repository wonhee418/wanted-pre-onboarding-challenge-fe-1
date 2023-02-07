import { useForm } from "react-hook-form";
import { AuthRequestFn } from "../../types/AuthType";

const AuthForm = (props: AuthRequestFn) => {
  const { onSubmit, buttonValue } = props;
  const {
    register, // 등록한 요소에 변경사항을 추적
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className=" max-w-xs w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className=" pb-3 relative">
        <label className="block pb-1" htmlFor="email">
          이메일
        </label>
        <input
          className={`${
            errors.email && "focus:outline-red-600"
          } outline outline-1 outline-slate-500 w-full rounded-sm p-1 pl-2 mb-1 ease-in duration-100 focus:ease-in focus:outline-2 focus:outline-blue-500`}
          placeholder="example@naver.com"
          type="email"
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,
              message: "이메일 형식이 아닙니다.",
            },
          })}
        />
        {errors.email && (
          <span className="block text-xs text-red-600 ">
            {errors!.email!.message!.toString()}
          </span>
        )}
      </div>
      <div className=" pb-3 relative">
        <label className="block pb-1" htmlFor="password">
          비밀번호
        </label>
        <input
          className={`${
            errors.password && "focus:outline-red-600"
          } outline outline-1 outline-slate-500 w-full rounded-sm p-1 pl-2 mb-1 ease-in duration-100 focus:ease-in focus:outline-2 focus:outline-blue-500`}
          placeholder="최소8자 ~ 16자 사이"
          type="password"
          id="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8글자입니다.",
            },
            maxLength: {
              value: 16,
              message: "비밀번호는 최대 16자입니다.",
            },
          })}
        />
        {errors.password && (
          <span className="block text-xs text-red-600">
            {errors!.password!.message!.toString()}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="w-full mt-4 bg-indigo-500 p-2 text-white rounded-lg disabled:bg-neutral-500 cursor-pointer disabled:text-black">
        {buttonValue}
      </button>
    </form>
  );
};

export default AuthForm;
