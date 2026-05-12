import img from "../../assets/ASSASIN.jpg";


function Assassino() {
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
            Assassin's Creed 
          </h1>
          <p className="fs-6 fs-sm-5 fs-md-4 mb-0"> Embarque nessa aventura! </p>
        </div>

        <div className="position-absolute bottom-0 start-0 end-0 p-3 p-sm-4 bg-dark bg-opacity-75 text-white">
          <p
            // id="desenvolvidoPor"
            // onmouseout={desenvolvidoPor()}
            class="improviso mb-0 small"
            style={
              'color: rgb(152, 133, 133)',
              'font-size: 20px',
              'box-shadow: 5px 5px 5px 5px'
            }
          >
            <strong
              id="desenvolvidoPor"
              onmouseout={desenvolvidoPor()}
              className="preco d-block d-sm-inline fs-6 fs-sm-5"
              style={{color: 'white', 'font-size': '25px'}}
            >
              Desenvolvido por : Mojang Studios.
            </strong>
          </p>
          <button>
            <i class="bi bi-cart"></i> Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default Assassino;