import './bootstrap-5.3.8/bootstrap-5.3.8-dist/css/bootstrap.min.css'
import './botao.css';

function Botao() {
  return (
    <>
      {/* <!-- Preço e Botão --> */}

      <div className="col-6 col-sm-6 col-md-7 mx-auto mx-sm-0 text-center">
        <div className="bg-dark bg-opacity-35 p-4 p-sm-5 rounded-4 shadow-lg h-100 d-flex flex-column justify-content-center border border-secondary-subtlee">
          <p
            className="improviso mb-3 mb-md-4"
            style={{color: 'white', fontSize: '25px', boxShadow: '5px 5px 5px 5px'}}
          >
            R$<strong className="preco fs-2 fs-sm-display-5"> 270,90 </strong>
          </p>
          <button
            className="btn btn-primary btn-lg w-100 px-4 py-3 fw-semibold hover-btn-light"
            style={{
              backgroundColor: 'rgb(117, 117, 211)',
              color: 'white',
              fontFamily: 'Arial, sans-serif',
              fontSize: '15px',
              borderRadius: '5px',
            }}>
               
            <i className="bi bi-cart me-2"> </i> Adicionar ao carrinho
          </button>
        </div>
      </div>
    </>
  );
}

export default Botao;