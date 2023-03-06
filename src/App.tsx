import { RecoilRoot } from "recoil";
import Layout from "./components/UI/Layout";
import Section from "./components/UI/Section";
import Header from "./components/UI/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Layout>
            <Section />
          </Layout>
          <ToastContainer
            autoClose={2000}
            position="top-center"
            closeOnClick
            limit={1}
          />
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
