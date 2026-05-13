import './bootstrap-5.3.8/bootstrap-5.3.8-dist/css/bootstrap.min.css'
import img from "../../assets/kratos e cronos.png";
import "./Sobreojogo.css";

function Sobreojogo() {
  return (
    <div className="descricao col-12 col-md-12 col-lg-4">
      <div className="row">
      <div className="col-6 ps-2 ps-lg-3">
        <img src={img} alt="capa do jogo" className="capa-jogo img-fluid" />
        
        <h6
          className="text-muted text-uppercase ls-sm fw-bold mb-2"
          style={{ color: "white" }}
        >
        </h6>
        </div>
        <div className="col-6 ps-2 ps-lg-3">
          Sobre o jogo:
        <h2 className="h3 h2-md fw-bold mb-3 lh-tight">
          Uma aventura que marcou gerações.
        </h2>
        <p className="text-light opacity-75 mb-4 fs-6 fs-sm-5 lh-lg">
          No topo da montanha, Zeus, Poseidon, Hades, Hermes e Hélio se preparam
          para a batalha. Kratos em seguida aparece fazendo seu caminho passando
          pelo braço direito de Gaia, quando um Hipocampo aparece e começa a
          atacar Kratos.
        </p>
        </div>
        
        <button className="btn btn-primary">
          <a
            href="https://jogandocasualmente.com.br/revisitando-god-of-war-iii-remastered-ps4/"
            className="text-white text-decoration-none"
          >
            Saiba mais
          </a>
        </button>
        </div>
    </div>
  );
}

export default Sobreojogo;