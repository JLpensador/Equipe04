import './bootstrap-5.3.8/bootstrap-5.3.8-dist/css/bootstrap.min.css'
import './botaoWitcher.css';

function Botao() {
  return (
    <>
      {/* <!-- Preço e Botão --> */}
<div class="col-12 col-md-12 col-sm-6 p-3">
      
          <p
            className="improviso mb-3 mb-md-4"
            style={{color: 'white', fontSize: '25px', boxShadow: '5px 5px 5px 5px'}}
          >
            R$<strong className="preco fs-2 fs-sm-display-5"> 210,90 </strong>
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
      
    </>
  );
}

export default Botao;