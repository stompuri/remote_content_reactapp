'use strict';

class App extends React.Component {
  render() {
    return (
      <div className='App-container'>
        <h1>Hello from React App!</h1>
        <img src={window.xforwardedhost + 'resources/logo.svg'} className='React-logo' alt='ReactApp' width='200' height='200' />
      </div>
    );
  }
}
