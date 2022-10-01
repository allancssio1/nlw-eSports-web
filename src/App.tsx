import './public/main.css';
import logoImg from './assets/Logo.svg';
import game1 from './assets/game-1.png';
import game2 from './assets/game-2.png';
import game3 from './assets/game-3.png';
import game4 from './assets/game-4.png';
import game5 from './assets/game-5.png';
import game6 from './assets/game-6.png';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo eSport" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative">
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong>game 1</strong>
            <span>4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="/game-2.png" alt="" />
        </a>
        <a href="" className="relative">
          <img src="/game-3.png" alt="" />
        </a>
        <a href="" className="relative">
          <img src="/game-4.png" alt="" />
        </a>
        <a href="" className="relative">
          <img src="/game-5.png" alt="" />
        </a>
        <a href="" className="relative">
          <img src="/game-6.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;
