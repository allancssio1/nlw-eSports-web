import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./public/main.css";
import logoImg from "./assets/Logo.svg";
import { GameController, MagnifyingGlassPlus } from "phosphor-react";
import { GameBanner } from "./Components/GameBanner";
import { Input } from "./Components/Form/Input";

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
    fetch("http://localhost:3333/games")
      .then((res) => res.json())
      .then((data) => setGames(data.games));
  }, []);

  return (
    <div className="max-w-[1034px] mx-auto flex flex-col items-center my-6">
      <img src={logoImg} alt="Logo eSport" />
      <h1 className="text-4xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-4 mt-8">
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
        <Dialog.Root>
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
              <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
                <MagnifyingGlassPlus size={20} />
                Publicar anúncio
              </Dialog.Trigger>
            </div>
          </div>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/30">
              <Dialog.Title className="text-3xl font-black">
                Prublique um anúncio!
              </Dialog.Title>
              <form className="mt-8 flex flex-col gap-4 ">
                <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="fornt-semibold">
                    Qual o game
                  </label>
                  <Input
                    id="game"
                    placeholder="Selecione o game que deseja jogar"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">O seu nome (ou nickname)</label>
                  <Input
                    id="name"
                    placeholder="Como te chamam dentro do game?"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Joga a quanto tempo?</label>
                    <Input
                      id="yearsPlaying"
                      type="number"
                      placeholder="Tudo bem ser ZERO"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Qual o seu discord?</label>
                    <Input id="discord" placeholder="Usuario#0000" />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                    <div className="grid grid-cols-4 gap-2">
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Domingo"
                      >
                        D
                      </button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Segunda"
                      >
                        S
                      </button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Terça"
                      >
                        T
                      </button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Quarta"
                      >
                        Q
                      </button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Quinta"
                      >
                        Q
                      </button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Sexta"
                      >
                        S
                      </button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Sábado"
                      >
                        S
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="discord">Qual o horário do dia?</label>
                    <div className="grid grid-cols-2 gap-1">
                      <Input type="time" placeholder="De" id="hourStart" />
                      <Input type="time" placeholder="Até" id="hourEnd" />
                    </div>
                  </div>
                </div>
                <div>
                  <Input type="checkbox" />
                  Costumo me conectar ao chat de voz.
                </div>
                <footer>
                  <button>Cancelar</button>
                  <button type="submit">
                    <GameController />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}

export default App;
