import img from "../../assets/kratos e cronos.png";
// import Sobreojogo from "../../components/SobreOjogo/Sobre.jsx";
import ConteudoMeio from "../../components/Informacoes/ConteudoMeio.jsx";
import Footer from "../../components/Footer/footer.jsx";

function KratosImagem() {
  return (
    <div className="container-fluid">
      <div className="hero position-relative overflow-hidden">
        <img
          src={img}
          alt="banner"
          className="w-100 d-block"
          style={{height: '60vh', minheight: '350px', maxheight: '75vh', objectfit: 'cover', objectposition: 'center',}}
        />

        <div className="hero-text position-absolute top-50 start-50 translate-middle text-white text-shado z-2">
          <h1 className="display-6 fs-4 fs-sm-3 fs-md-2 fw-bold mb-2">
            God of War Remastered
          </h1>
          <p className="fs-6 fs-sm-5 fs-md-4 mb-0">Uma jornada épica te espera</p>
        </div>

        <div className="position-absolute bottom-0 start-0 end-0 p-3 p-sm-4 bg-dark bg-opacity-75 text-white">
          <p
            id="desenvolvidoPor"
            className="improviso mb-0 small"
           style={{ color: 'rgb(152, 133, 133)', fontSize: '20px' }}

          >
            <strong
              id="desenvolvidoPor"
              className="preco d-block d-sm-inline fs-6 fs-sm-5"
              style={{ color: 'white', fontSize: '25px' }}
            >
              Desenvolvido por : Mojang Studios.
            </strong>
          </p>
          <button>
            <i className="bi bi-cart"></i> Adicionar ao carrinho
          </button>
        </div>
      </div>
      {/* <Sobreojogo /> */}
      <ConteudoMeio />
      <Footer />
    </div>
  );
}

export default KratosImagem;