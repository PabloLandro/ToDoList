import './styles/App.css'
import './styles/global.css'
import TasksContainer from './Components/TasksContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List!</h1>
      </header>
      <body className="App-body">
        <TasksContainer />
      </body>
    </div>
  );
}

export default App;
