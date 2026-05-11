function Botao() {
  return (
    <>
      {/* <!-- Preço e Botão --> */}

      <div class="col-8 col-sm-6 col-md-7 mx-auto mx-sm-0 text-center">
        <div class="bg-dark bg-opacity-75 p-4 p-sm-5 rounded-4 shadow-lg h-100 d-flex flex-column justify-content-center border border-secondary-subtlee">
          <p
            class="improviso mb-3 mb-md-4"
            style="color: white; font-size: 25px; box-shadow: 5px 5px 5px 5px"
          >
            R$<strong class="preco fs-2 fs-sm-display-5"> 270,90 </strong>
          </p>
          <button
            class="btn btn-primary btn-lg w-100 px-4 py-3 fw-semibold hover-btn-light"
            style="
                background-color: rgb(117, 117, 211);
                color: white;
                font-family: Arial, sans-serif;
                font-size: 15px;
                border-radius: 5px;
              "
          >
            <i class="bi bi-cart me-2"></i> Adicionar ao carrinho
          </button>
        </div>
      </div>
    </>
  );
}

export default Botao;