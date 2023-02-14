import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { signInRequest, signUpRequest } from "../../../api/auth";
import { hasTokenState } from "../../../atom/atom";
import useCustomToast from "../../../common/hooks/useCustomToast";
import {
  clearStorageUser,
  setStorageUser,
} from "../../../common/user/userStorage";
import { Auth } from "../../../types/AuthType";

export const useAuth = () => {
  const toast = useCustomToast();
  const navigate = useNavigate();
  const setHasToken = useSetRecoilState(hasTokenState);

  const { mutate: signInMutate } = useMutation(
    (data: Auth) => signInRequest(data),
    {
      onSuccess: (received: AxiosResponse<any, any>) => {
        const { data } = received;
        const title = "message" in data && data.message;
        toast({
          title,
          status: "success",
        });
        if (data.token) {
          setHasToken(data.token);
          setStorageUser(data.token);
          navigate("/");
        }
      },
      onError: (error: AxiosError) => {
        toast({
          title: error.message,
          status: "error",
        });
      },
    }
  );

  const { mutate: signUpMutate } = useMutation(
    (data: Auth) => signUpRequest(data),
    {
      onSuccess: (received) => {
        const { data } = received;
        const title = "message" in data && data.message;
        toast({
          title,
          status: "success",
        });
        navigate("/auth");
      },
      onError: (error: AxiosError) => {
        toast({
          title: error.message,
          status: "error",
        });
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
    toast({
      position: "top",
      title: "로그아웃 하셨습니다.",
      status: "info",
    });
  };

  return {
    signIn,
    signUp,
    signOut,
  };
};
