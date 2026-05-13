import "./Hero.css";

export default function Hero() {
  return (

    <section className="hero-section position-relative d-flex flex-column align-items-center justify-content-center text-center">
      

      <div className="container position-relative z-1 d-flex flex-column align-items-center py-5">
        
        <div className="custom-badge rounded-pill mb-4 py-2 px-4 d-flex align-items-center gap-2">
          <i className="bi bi-lightning-charge-fill text-purple"></i>
          <span
            className="text-uppercase fw-bold text-white"
            style={{ fontSize: "0.8rem", letterSpacing: "1px" }}
          >
            SEJA BEM VINDO
          </span>
        </div>

        
        <h1 className="display-1 fw-bold mb-2 text-white text-uppercase">
          VIVA NOVAS
          <br />
          AVENTURAS!
        </h1>

        
        <p
          className="fs-6 text-gray-secondary mx-auto mb-5"
          style={{ maxWidth: "600px", lineHeight: "1.6" }}
        >
          Descubra os melhores jogos para PC, PlayStation, Xbox e Switch.
          <br />
          Milhares de jogos com os melhores preços e ofertas exclusivas.
        </p>

        <button className="btn custom-btn-purple btn-lg px-5 py-3 rounded-pill text-uppercase fw-bold text-white border-0">
          EXPLORAR JOGOS
        </button>
      </div>
    </section>
  );
}