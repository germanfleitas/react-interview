import { useState } from 'react';
import { Container } from '@chakra-ui/react'
import { MainScreen } from './screens/MainScreen/MainScreen'
import { GeneralContext } from './context'

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <GeneralContext value={{ isLoading, setIsLoading }}>
      <Container>
        <MainScreen />
      </Container>
    </GeneralContext>
  )
}

export default App