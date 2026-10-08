import React, { useState } from 'react';
import { Headphones, Play, Pause, ExternalLink, Radio, Sparkles, Volume2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Episode {
  id: string;
  number: string;
  title: string;
  duration: string;
  description: string;
  spotifyUrl: string;
  spotifyEmbedId: string;
  date: string;
}

const EPISODES: Episode[] = [
  {
    id: 'ep-01',
    number: 'EP. #01',
    title: 'Por Que o Teu Intestino Incha no Fim do Dia? (E o Que Fazer)',
    duration: '28 min',
    description: 'Descobre a relação entre a fermentação alimentar, motilidade intestinal lenta e o acúmulo de gases ao entardecer.',
    spotifyUrl: 'https://open.spotify.com',
    spotifyEmbedId: '7ouMYWpwJ422jRcDASZB7P',
    date: 'Temporada 1',
  },
  {
    id: 'ep-02',
    number: 'EP. #02',
    title: 'Menopausa, Estrogénio e o Estroboloma: O Elo Invisível',
    duration: '34 min',
    description: 'Como as alterações hormonais após os 40 anos influenciam a flora intestinal e por que os afrontamentos começam na digestão.',
    spotifyUrl: 'https://open.spotify.com',
    spotifyEmbedId: '4rG3kFhK9X1v2wQ5',
    date: 'Temporada 1',
  },
  {
    id: 'ep-03',
    number: 'EP. #03',
    title: 'Ansiedade e Intestino: O Nervo Vago e a Mente Calma',
    duration: '31 min',
    description: 'A comunicação bidirecional entre cérebro e intestino. Técnicas práticas de respiração e nutrientes para modular o nervo vago.',
    spotifyUrl: 'https://open.spotify.com',
    spotifyEmbedId: '5e9rT7uP3aZ8bM1',
    date: 'Temporada 1',
  }
];

export const PodcastSection: React.FC = () => {
  const [activeEpisode, setActiveEpisode] = useState<Episode>(EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="podcast" className="py-20 bg-[#3F5B45] text-[#FDFBF7] relative overflow-hidden">
      {/* Detalhes de Fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D8C4A8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B86F4B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDFBF7]/10 text-[#D8C4A8] text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-[#FDFBF7]/15">
            <Radio className="w-4 h-4 text-[#B86F4B]" />
            <span>Podcast Oficial • O Intestino Fala</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDFBF7]">
            Conversas Profundas sobre Saúde Digestiva e Hormonal
          </h2>
          <p className="text-base text-[#FDFBF7]/80 leading-relaxed">
            Episódios quinzenais apresentados por Dulce Canivari. Ciência desmistificada, relatos práticos e conselhos para transformar a tua digestão.
          </p>
        </div>

        {/* Player em Destaque & Lista de Episódios */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coluna Esquerda: Player Spotify Integrado */}
          <div className="lg:col-span-6 space-y-6">
            <Card className="bg-[#FDFBF7] text-[#6B4F3F] p-6 sm:p-8 rounded-3xl shadow-2xl border-2 border-[#D8C4A8] space-y-6 text-left">
              <div className="flex items-center justify-between border-b border-[#D8C4A8]/50 pb-4">
                <div className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-[#B86F4B]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3F5B45]">
                    Em Reprodução: {activeEpisode.number}
                  </span>
                </div>
                <span className="text-xs font-semibold bg-[#3F5B45]/10 text-[#3F5B45] px-2.5 py-1 rounded-full">
                  {activeEpisode.duration}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#3F5B45]">
                  {activeEpisode.title}
                </h3>
                <p className="text-xs text-[#6B4F3F]/80 leading-relaxed">
                  {activeEpisode.description}
                </p>
              </div>

              {/* Player Simulado Spotify Interativo */}
              <div className="p-4 rounded-2xl bg-[#3F5B45]/10 border border-[#3F5B45]/20 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 rounded-full bg-[#1DB954] text-white flex items-center justify-center hover:scale-105 transition-all shadow-md"
                      aria-label={isPlaying ? 'Pausar' : 'Ouvir'}
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>
                    <div>
                      <p className="text-xs font-bold text-[#3F5B45]">Ouvir no Spotify Player</p>
                      <p className="text-[11px] text-[#6B4F3F]/70">Dulce Canivari • Saúde Intestinal</p>
                    </div>
                  </div>
                  <Volume2 className="w-4 h-4 text-[#3F5B45]" />
                </div>

                <div className="w-full bg-[#D8C4A8]/50 h-1.5 rounded-full overflow-hidden">
                  <div className={`bg-[#1DB954] h-full transition-all ${isPlaying ? 'w-2/3 animate-pulse' : 'w-1/4'}`} />
                </div>
              </div>

              {/* Botão de Redirecionamento Spotify Oficial */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 bg-[#1DB954] hover:bg-[#19a34a] text-white font-bold py-3 px-5 rounded-xl text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Abrir no Spotify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://podcasts.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#3F5B45] hover:bg-[#324937] text-white font-bold py-3 px-5 rounded-xl text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
                >
                  <span>Apple Podcasts</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Coluna Direita: Lista de Episódios Recentes */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <h3 className="font-serif text-xl font-bold text-[#D8C4A8] mb-4">
              Episódios Mais Recentes
            </h3>

            {EPISODES.map((ep) => {
              const isCurrent = ep.id === activeEpisode.id;
              return (
                <div
                  key={ep.id}
                  onClick={() => setActiveEpisode(ep)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-[#FDFBF7] text-[#6B4F3F] border-[#B86F4B] shadow-lg translate-x-1'
                      : 'bg-[#FDFBF7]/10 text-[#FDFBF7] border-[#FDFBF7]/20 hover:bg-[#FDFBF7]/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${isCurrent ? 'text-[#B86F4B]' : 'text-[#D8C4A8]'}`}>
                      {ep.number} • {ep.date}
                    </span>
                    <span className={`text-[11px] flex items-center gap-1 ${isCurrent ? 'text-[#6B4F3F]/70' : 'text-[#FDFBF7]/70'}`}>
                      <Clock className="w-3 h-3" />
                      <span>{ep.duration}</span>
                    </span>
                  </div>

                  <h4 className={`font-serif text-base font-bold ${isCurrent ? 'text-[#3F5B45]' : 'text-white'}`}>
                    {ep.title}
                  </h4>
                  <p className={`text-xs mt-1 line-clamp-2 ${isCurrent ? 'text-[#6B4F3F]/80' : 'text-[#FDFBF7]/80'}`}>
                    {ep.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};