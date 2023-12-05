const URL = "http://localhost:5000";
const verAmigos = $("#boton");
verAmigos.click(() => {
    const urlAmigos = `${URL}/amigos`;
    const lista = $("#lista");
    $.get(urlAmigos, (arrayAmigos) => {
        for (const amigo of arrayAmigosW) {
            lista.append(`<li>${amigo.id} - ${amigo.name}</li>`)
        }
    })
})