import './styles/App.css'
import './styles/global.css'
import TasksContainer from './Components/TasksContainer';
import Container from 'react-bootstrap/Container'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List!</h1>
      </header>
      <Container className="App-body">
        <TasksContainer />
      </Container>
    </div>
  );
}

export default App;
