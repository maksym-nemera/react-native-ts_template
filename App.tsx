import { Provider } from 'react-redux';
import { MainApp } from './src/MainApp';
import store from './src/app/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
