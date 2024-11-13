import { useState, useEffect } from "react";
import axios from "axios"
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
  const deleteGame = async (gameId) =>{
    try{
      const response =  await axios.delete(`http://localhost:4000/game/${gameId}`)
      if (response.status === 204){
        alert("Jogo deletado com sucesso!")
        setGames(games.filter((game) => game._id !== gameId));
      }
    }catch(error){
      console.log(error)
    }
  }

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

          <div className={styles.games} id={styles.games}>
            {/* Lista de jogos.*/}
            {games.map((game) => (
              <ul className={styles.listGames} key={game.id}>
                <div className={styles.gameImg}>
                  <img src="images/image_cd.png" alt="Jogo em estoque" />
                </div>
                <div className={styles.gameInfo}>
                  <h3>Título: {game.title}</h3>
                  <li>Plataforma:{game.platform} </li>
                  <li>Ano: {game.year}</li>
                  <li>Preço: {game.price}</li>

                  {/* Botão deletar */}
                  <button onClick={() =>{
                    const confirmed = window.confirm(`Deseja excluir o jogo ?`)
                    if (confirmed){
                      deleteGame(game._id)
                    }
                  }}>Deletar Jogo
                  </button>
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
