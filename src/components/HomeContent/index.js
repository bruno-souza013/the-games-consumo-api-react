import { useState, useEffect } from "react";
import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";

const HomeContent = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([])
  
  
  useEffect(() => {
    const fetchGames = async () => {
      try{
        const response = await axios.get("http://localhost:4000/games")
        setGames(response.data.games);
        setLoading(false)
      }catch(error){
        console.log(error)
      }
    };
    fetchGames();
  }, []);

  // Função para deletar o jogo

  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>

          {/* Componente Loading */}
          <Loading loading={loading} />
          {/* Não esquecer de fazer as modificações no componente Loading */}

          <div className={styles.games} id={styles.games}>
            {/* Lista de jogos. Começar o map aqui */}
            {games.map((game) => (
              <ul className={styles.listGames} key={game.id}>
                <div className={styles.gameImg}>
                  <img src="images/game_cd_cover.png" alt="Jogo em estoque" />
                </div>
                <div className={styles.gameInfo}>
                  <h3>Título: {game.title}</h3>
                  <li>Plataforma:{game.platform} </li>
                  <li>Ano: {game.year}</li>
                  <li>Preço: {game.price}</li>

                  {/* Inserir aqui o botão de deletar */}
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
