function pesquisar(event) {
           // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
           let section = document.getElementById("resultados-pesquisa");

           let campoPesquisa = document.getElementById("campo-pesquisa").value;
           let resultados = "";
   if (event.key === 'Enter') {
  
        

        campoPesquisa = campoPesquisa.toLowerCase();

        // Inicializa uma string vazia para armazenar os resultados da pesquisa
        
        let nome = "";
        let descricao = "";
        let tags = "";

        // Itera sobre cada personagem na lista de personagens
        for (let dado of personagem) {
            nome = dado.nome.toLowerCase();
            descricao = dado.descricao.toLowerCase();
            tags = dado.tags.toLowerCase();
            // se o nome includes campoPesquisa
            if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                // Constrói o HTML para cada resultado da pesquisa
                resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#">${dado.nome}</a> 
          </h2>
          <p class="descricao-meta">${dado.descricao}</p> 
          <a href=${dado.linkWiki} target="_blank">Mais sobre ${dado.nome}</a> 
        </div>
      `;
            }

        }

        if (!resultados) {
            resultados = "<p>Nada foi encontrado</p>"
        }
        
        // Atribui o HTML gerado para a seção de resultados
        section.innerHTML = resultados;
    }
    // se o campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Nenhuma personagem ou informação inserida</p>"
        return
    }
    
}