import { AxiosError, isAxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { toast } from "react-toastify";
import { signInRequest, signUpRequest } from "../../../api/auth";
import { hasTokenState } from "../../../atom/atom";
import {
  clearStorageUser,
  setStorageUser,
} from "../../../common/user/userStorage";
import { Auth } from "../../../types/AuthType";

export const useAuth = () => {
  const successNotify = (value: string) =>
    toast.success(value, { autoClose: 2000 });
  const errorNotify = (value: string) => toast.error(value);
  const infoNotify = (value: string) => toast.info(value);
  const navigate = useNavigate();
  const setHasToken = useSetRecoilState(hasTokenState);

  const { mutate: signInMutate } = useMutation(
    (data: Auth) => signInRequest(data),
    {
      onSuccess: (received) => {
        const { data } = received;
        const title = "message" in data && data.message;
        successNotify(title);
        if (data.token) {
          setHasToken(data.token);
          setStorageUser(data.token);
          navigate("/");
        }
      },
      onError: (error: unknown) => {
        if (isAxiosError(error)) {
          if (error.response?.status === 400)
            errorNotify(error.response.data.details.toString());
        }
      },
    }
  );

  const { mutate: signUpMutate } = useMutation(
    (data: Auth) => signUpRequest(data),
    {
      onSuccess: (received) => {
        const { data } = received;
        const title = "message" in data && data.message;
        successNotify(title);
        navigate("/auth");
      },
      onError: (error: unknown) => {
        if (isAxiosError(error)) {
          if (error.response?.status === 400)
            errorNotify(error.response.data.details.toString());
        }
      },
    }
  );

  const signIn = async (email: string, password: string) => {
    signInMutate({ email, password });
  };

  const signUp = async (email: string, password: string) => {
    signUpMutate({ email, password });
  };

  const signOut = async () => {
    clearStorageUser();
    setHasToken(null);
    infoNotify("로그아웃 하셨습니다.");
  };

  return {
    signIn,
    signUp,
    signOut,
  };
};
