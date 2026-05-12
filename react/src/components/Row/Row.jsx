import './Row.css';

export default function Row() {
    return(

        <section
          className="row g-4 text-start mt-5 mb-5 mx-auto"
          style={{ maxWidth: "1000px" }}
        >
          <div className="col-md-4">
            <article className="card custom-card h-100 p-4">
              <h3>Catalogo completo</h3>
              <p className="text-gray-secondary mb-0 fs-6">
                Varios jogos para varias plataformas
              </p>
            </article>
          </div>

          <div className="col-md-4">
            <article className="card custom-card h-100 p-4">
              <h3>Catalogo completo</h3>
              <p className="text-gray-secondary mb-0 fs-6">
                Varios jogos para varias plataformas
              </p>
            </article>
          </div>

          <div className="col-md-4">
            <article className="card custom-card h-100 p-4">
              <h3>Catalogo completo</h3>
              <p className="text-gray-secondary mb-0 fs-6">
                Varios jogos para varias plataformas
              </p>
            </article>
          </div>
        </section>

    );
}