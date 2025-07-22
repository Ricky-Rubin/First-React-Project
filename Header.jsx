import logo from './react-logo.png';

function Header() {
    return (
      <header className='header'>
        <img src={logo} width="40px" alt="react logo"/>
        <nav>
          <ul className='list'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
        </nav>
      </header>
    );
  };

  export { Header };