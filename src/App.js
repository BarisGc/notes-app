import './App.css';
import { Container } from 'react-bootstrap'
import FirstRow from './components/firstRow/Index'
import SecondRow from './components/secondRow/Index'

function App() {
  return (
    <Container fluid className='mt-0' >
      <FirstRow />
      <SecondRow />
    </Container>
  );
}

export default App;
