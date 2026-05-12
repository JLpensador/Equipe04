import './Hero.css';

export default function Hero() {
    return(
    <section className="hero-section mb-5 pb-4">
          <div className="custom-badge rounded-pill mb-4 py-2 px-4">
            <span>Seja bem vindo</span>
          </div>

          <h1 className="display-3 fw-bold mb-3 text-white">
            VIVA NOVAS
            <br />
            <span className="text-purple">AVENTURAS!</span>
          </h1>
          <p
            className="fs-5 text-gray-secondary mx-auto mb-5"
            style={{ maxWidth: "650px" }}
          >
            Descubra os melhores jogos para PC, PlayStation, Xbox e Switch.
            Milhares de títulos com os melhores preços e ofertas exclusivas.
          </p>
          <button className="btn custom-btn-purple btn-lg px-5 py-3 rounded-pill">
            Explorar jogos &rarr;{" "}
          </button>
        </section>

);
}