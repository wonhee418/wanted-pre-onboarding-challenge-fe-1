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

export const useAuth = () => {
  const toast = useCustomToast();
  const navigate = useNavigate();
  const setHasToken = useSetRecoilState(hasTokenState);

  const { mutate: signInMutate } = useMutation((data) => signInRequest(data), {
    onSuccess: (received) => {
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
    onError: (err) => {
      const { data } = err.response;
      const title = "details" in data && data.details;
      toast({
        title,
        status: "error",
      });
    },
  });

  const { mutate: signUpMutate } = useMutation((data) => signUpRequest(data), {
    onSuccess: (received) => {
      const { data } = received;
      const title = "message" in data && data.message;
      toast({
        title,
        status: "success",
      });
      navigate("/auth");
    },
    onError: (error) => {
      const title =
        "details" in error.response.data && error.response.data.details;
      toast({
        title,
        status: "error",
      });
    },
  });

  const signIn = async (email, password) => {
    signInMutate({ email, password });
  };

  const signUp = async (email, password) => {
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
