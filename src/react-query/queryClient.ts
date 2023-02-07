import {
  createStandaloneToast,
  CreateStandaloneToastReturn,
} from "@chakra-ui/react";
import { AxiosError } from "axios";
import { QueryClient } from "react-query";

// TODO: react-query의 전역 에러처리할것 !
//       현재 에러가 발생하는 시점에서 toast창이 출력되지 않음.

// const toast: CreateStandaloneToastReturn = createStandaloneToast();

// const queryErrorHandler = (error: Axio) => {
//   if ("details" in error.response.data) {
//     const title =
//       "details" in error.response.data && error.response.data.details;
//     // toast({
//     //   title,
//     //   status: "error",
//     // });
//   }
//   // toast({
//   //   title: "Error !",
//   //   status: "error",
//   // });
// };

export const queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      // onError: ,
      staleTime: 600000, // 10분
      cacheTime: 900000, // 15분
      refetchOnMount: false, // 마운트시 리페치 여부
      refetchOnReconnect: false, // 재연결시 리페치 여부
      refetchOnWindowFocus: false, // 윈도우포커스시 리페치 여부, (브라우저 클릭)
    },
    mutations: {
      // onError: queryErrorHandler,
    },
  },
});
