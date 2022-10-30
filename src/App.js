import './App.css';
import ReactPlayer from 'react-player/lazy';
import FancyText from '@carefully-coded/react-text-gradient';



function App() {
  return (
    <div className='container-lg flex justify-center items-center h-screen w-screen select-none cursor-crosshair'>
      <div className="App">
        <div className='rounded-2xl'>
          <div className='header'>
            <div className='fancytext font-extrabold font-mono text-3xl bg-black flex justify-center items-center p-5 pb-0 rounded-t-xl'>
              <FancyText
                gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
                animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
                animateDuration={2000}
              >
                MOTRI LIVE VIDEOS
              </FancyText>
            </div>
          </div>
          <div className='player flex rounded-b-xl overflow-hidden justify-center items-center'>
            <ReactPlayer controls="true" width="400px" url='https://www.youtube.com/playlist?list=PLfR3SclqQjGK6Qwk6VIqmrLrJsHjv3OES' />
          </div>

        </div>
      </div>
    </div>
  );
}
export default App;