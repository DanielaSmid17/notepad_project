import './App.css';
import NoteForm from './components/form.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Container fluid>
      <div className="context">
      </div>
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="App">
          <header className="App-header">
            <Row>
              <p>Your notepad</p>
            </Row>
            <Row>
              <div className='app-wrapper'>
                <ul className='notes-list'>
                  <NoteForm></NoteForm>
                </ul>
              </div>
            </Row>

          </header>
        </div >
      </div>

    </Container>

  );
}

export default App;
