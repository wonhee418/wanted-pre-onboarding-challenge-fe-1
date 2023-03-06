import { isAxiosError } from "axios";
import { QueryClient } from "react-query";
import { toast } from "react-toastify/dist/core";

const errorNotify = (value: string) => toast.error(value, { autoClose: 2000 });

const queryErrorHandler = (error: unknown) => {
  console.log("asdasd");
  if (isAxiosError(error)) {
    if (error.response?.status === 400)
      errorNotify(error.response.data.details.toString());
  } else {
    errorNotify(JSON.stringify(error));
  }
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000, // 10분
      cacheTime: 900000, // 15분
      refetchOnMount: false, // 마운트시 리페치 여부
      refetchOnReconnect: false, // 재연결시 리페치 여부
      refetchOnWindowFocus: false, // 윈도우포커스시 리페치 여부, (브라우저 클릭)
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
});
