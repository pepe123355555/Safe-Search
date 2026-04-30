function buscar() {
    let texto = document.getElementById("pesquisa").value;

    let fontes = [
        { nome: "G1", site: "g1.globo.com" },
        { nome: "BBC Brasil", site: "bbc.com/portuguese" },
        { nome: "CNN Brasil", site: "cnnbrasil.com.br" },
        { nome: "Agência Brasil", site: "agenciabrasil.ebc.com.br" }
    ];

    let html = "<h2>🔎 Resultados confiáveis:</h2>";

    fontes.forEach(fonte => {
        let url = `https://www.google.com/search?q=site:${fonte.site}+${encodeURIComponent(texto)}`;

        html += `
            <div class="card">
                <h3>${fonte.nome}</h3>
                <a href="${url}" target="_blank">Ver notícias</a>
            </div>
        `;
    });

    document.getElementById("resultado").innerHTML = html;
}