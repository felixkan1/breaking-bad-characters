import store from './store';
import { Provider } from 'react-redux';
import CharacterDashboard from './components/CharacterDashboard';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CharacterDashboard />
      </div>
    </Provider>
  );
}

export default App;
