import posterImage from "../assets/starwarsPoster.jpg";
import posterStyles from "../App.module.css";


export function Poster({title,postersrc}) {
  return (
    <>
      <div className={posterStyles.poster}>
        <img
          className={posterStyles.posterImg}
          src={postersrc}
          alt={title}          
        />

        <div className={posterStyles.texto}>
          <h2 className={posterStyles.h2}>{title}</h2>

          <p className={posterStyles.p}>
            Um poster decorativo épico do filme Star Wars, com moldura de MDF e
            tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de
            todos os tempos. Este clássico poster trará aventura , nostalgia, e
            a magia de Star Wars para qualquer lugar que você decidir pendurar,
            Não perca a chance de adicionar essa linda memória ao seu acervo.
          </p>

          <button className={posterStyles.button}>Comprar agora</button>
        </div>
      </div>
    </>
  );
}
