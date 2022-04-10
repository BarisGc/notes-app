import './App.css';
import { Container } from 'react-bootstrap'
import FirstRow from './components/firstRow/FirstRowIndex'
import SecondRow from './components/secondRow/SecondRowIndex'

function App() {
  return (
    <Container fluid >
      <FirstRow />
      <SecondRow />
    </Container>
  );
}

export default App;
