import logo from './logo.svg';
import './App.css';
import useBoop from 'use-boop';
import { animated } from 'react-spring';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import SomeComponent from './components/SomeComponent';
function App() {
  const [style, trigger] = useBoop({ rotation: 3 });
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0px 0px 40px 0px' }}>
            {/* Child can be anything */}
            <ConnectButton accountStatus='full' label='Metamask' />
        </div>
        <img src='https://www.rainbowkit.com/rainbow.svg' style={{ borderRadius: '190px' }} className="App-logo" alt="logo" />
        <p>
          Wagmi Wallet Practice
        </p>
        <a
          className="App-link"
          href="https://www.rainbowkit.com/docs/installation"
          target="_blank"
          rel="noopener noreferrer"
        >
          RainbowKit
        </a>
      </header>
    </div>

  );
}

export default App;
