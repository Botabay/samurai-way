import Header from './components/Header'
import Technologies from './components/Technologies'

type AppPropTypes = {};
const App = (props: AppPropTypes) => {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
};

export default App;
