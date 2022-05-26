import './App.css';
import Withaction from './components/WithSubnavigation';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider><div className="App">
    <Withaction/>
  </div></ChakraProvider>
    
  );
}

export default App;
