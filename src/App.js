
import './App.css';

// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <section>
      <Header />
      <TodoForm />
      <Todos />
    </section>
  );
}

export default App;
