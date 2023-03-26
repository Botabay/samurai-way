type AppPropTypes = {};
const App = (props: AppPropTypes) => {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
};

interface Header {}
const Header = <Header extends {}>(props: Header) => {
  return <div>header</div>;
};

interface Technologies {}
const Technologies = <Technologies extends {}>() => {
  return (
    <ul>
      <li>css</li>
      <li>html</li>
      <li>js</li>
    </ul>
  );
};

export default App;










export default App;
