import img from "../../assets/kratos e cronos.png";
import Header from "../../components/Header/header.jsx";
import Sobreojogo from "../../components/SobreOjogo/SobreGod.jsx";
import ConteudoMeio from "../../components/Informacoes/ConteudoMeio.jsx";
import Footer from "../../components/Footer/footer.jsx";
import Botao from "../../components/BotaoPreco/botaoGod.jsx";

function KratosImagem() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="hero position-relative overflow-hidden">
          <img
            src={img}
            alt="banner"
            className="w-100 d-block"
            style={{
              height: "60vh",
              minheight: "350px",
              maxheight: "75vh",
              objectfit: "cover",
              objectposition: "center",
            }}
          />
          <div className="hero-text position-absolute top-50 start-50 translate-middle text-white text-shado z-2">
            <h1 className="display-6 fs-4 fs-sm-3 fs-md-2 fw-bold mb-2">
              God of War Remastered
            </h1>
            <p className="fs-6 fs-sm-5 fs-md-4 mb-0">
              Uma jornada épica te espera
            </p>
          </div>

          <div className="position-absolute bottom-0 start-0 end-0 p-3 p-sm-4 bg-dark bg-opacity-75 text-white">
            <p
              id="desenvolvidoPor"
              className="improviso mb-0 small"
              style={{ color: "rgb(152, 133, 133)", fontSize: "20px" }}
            >
              <strong
                id="desenvolvidoPor"
                className="preco d-block d-sm-inline fs-6 fs-sm-5"
                style={{ color: "white", fontSize: "25px" }}
              >
                Desenvolvido por : Santa Monica Studio.
              </strong>
            </p>
          </div>
        </div>
        <Sobreojogo />
        <ConteudoMeio />
        <Footer />
      </div>
    </>
  );
}

export default KratosImagem;
