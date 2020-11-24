import './App.css';
import Form from './components/form.js';
// import Note from './components/note.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Your notepad
        </p>
        <div className='app-wrapper'>
          <ul className='notes-list'>
            <Form></Form>
          </ul>
        </div>



      </header>
    </div>
  );
}

export default App;
