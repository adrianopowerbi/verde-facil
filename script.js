// Mensagem quando a denúncia for enviada

const formulario = document.getElementById("formDenuncia");

if (formulario) {

    formulario.addEventListener("submit", function(evento) {

        evento.preventDefault();

        document.getElementById("mensagem").innerHTML =
            "✅ Denúncia registrada com sucesso!";

        formulario.reset();

    });

}s