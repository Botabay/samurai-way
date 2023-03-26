interface Header {}
const Header = <Header extends {}>(props: Header) => {
  return <div>header</div>;
};

export default Header;