// import logo from './react-logo.png';

function Header() {
    return (
      <header className='header'>
        <img src={`${import.meta.env.BASE_URL}react-logo.png`} width="40px" alt="react logo"/>
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