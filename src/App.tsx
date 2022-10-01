import './public/main.css';
import logoImg from './assets/Logo.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';
import { GameBanner } from './Components/GameBanner';
import { useEffect, useState } from 'react';

interface Games {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((res) => res.json())
      .then((data) => setGames(data.games));
  }, []);

  return (
    <div className="max-w-[1034px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo eSport" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
              key={game.id}
            />
          );
        })}
      </div>

      <div className="pt-1 bg-nlw-gradient rounded-lg mt-8 self-stretch overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúcio para encontrar novos players!
            </span>
          </div>
          <div>
            <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
              <MagnifyingGlassPlus size={20} />
              Publicar anúncio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
