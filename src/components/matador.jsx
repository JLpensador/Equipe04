function Matador() {
    return (
       <div class="container text-center mt-5">
      <div class="row">
        <div class="col-6">
          <img class="matador-scred col-6" src="./imagens/ASSASIN.jpg"></img>
          <h3> Assassin's Creed  </h3>
          <div class="maior-idade bg-black mt-2 d-inline-flex">18</div>
          <h6 class="texto-god">
            {" "}
            Não recomendado para menores de 18 anos, Violência extrema, conteúdo
            sexual.{" "}
          </h6>
        </div>

        <div class="col-6 text-center">
          <p> Uma série de jogos eletrônicos de ação e aventura histórica, publicada pela Ubisoft e desenvolvida principalmente pelo seu estúdio Ubisoft Montreal. </p>
          <h5 class="texto-god"> Criadores: </h5>
          <p class="texto-god"> 	
                   Patrice Désilets
                   Jade Raymond
                   Corey May </p>
          <br /> <br />
          <h5 class="texto-god"> Gênero: </h5>
          <p class="texto-god"> Ação, Aventura </p>
          <br /> <br />
          <h5 class="texto-god">Português: </h5>
          <p class="texto-god">
            {" "}
            Dublagem (português de Portugal), interface e legendas{" "}
          </p>
          <br /> <br />
          <h5 class="texto-god">Plataformas: </h5>
          <p class="texto-god">
            {" "}
            <button class="disp-game"> PS4 </button>{" "}
            <button class="disp-game"> PS5 </button>{" "}
          </p>
          <br /> <br />
          <div class="container">
            <h5 class="preco"> R$: 210,00 </h5>
            <h5 class="preco">  </h5>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Matador;