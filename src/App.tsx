import {MainPage} from "@/pages/MainPage.tsx";
import system from "@/theming/theme.ts";
import {ChakraProvider} from "@chakra-ui/react";

function App() {

  return (
    <ChakraProvider value={system}>
      <MainPage />
    </ChakraProvider>
  )
}

export default App
