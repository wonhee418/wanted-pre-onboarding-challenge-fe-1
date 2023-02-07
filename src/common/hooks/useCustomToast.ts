import { useToast } from '@chakra-ui/react'

const useCustomToast = () => {
  return useToast({
    position: "top",
    duration: 5000,
    isClosable: true,
  })
}

export default useCustomToast