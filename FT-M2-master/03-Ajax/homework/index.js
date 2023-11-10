/*Escribe codigo en los archivos index.html y index.js para que la pagina tenga las siguientes funcionalidades:

Utiliza el evento click en un boton para hacer que al hacer click 
en el mismo aparezca en el DOM una lista con todos los amigos que 
el servidor nos devolvera al hacer un GET a la ruta http://localhost:5000/amigos

Un campo de busqueda (input) que reciba el id de un amigo y un boton "buscar". 
Al hacer click en el boton, buscaremos el amigo que tiene ese id en el servidor, 
y lo mostraremos en el DOM. Para conseguir los datos de un amigo en particular del servidor,
 puedes hacer un GET nuestro servidor concatenando el id del amigo que queremos encontrar,
  Por ej: http://localhost:5000/amigos/1 le pediria al servidor el amigo con id = 1

Un input que reciba el id de un amigo y un boton "borrar". 
Al hacer click en el boton, borraremos el amigo del servidor haciendo un DELETE a nuestro servidor,
 concatenando el id del usuario que queremos borrar. 
 Por ej: http://localhost:5000/amigos/2 le pediria al servidor el amigo con id = 2


Recordatorio
Para manipular un elemento de html en con jquery debes usar $('#id-elemento') 
agregandole como arguemnto el id del elemento que quieres manipular */

const btn = document.getElementById('boton')
const URL = `http://localhost:5000/amigos`
const list = document.getElementById('lista')

function viewList() {
    lista.innerHTML = "";
    $.get(`${URL}`, (res) => {

        console.log("-----> ", res);
        res.forEach((element) => {

            let li = document.createElement("li");
            li.innerHTML = element.name;
            lista.appendChild(li);

        });
    });
}
btton.addEventListener("click", (viewList));

const search = document.getElementById("search");​
function searchFriend() {

    let id = document.getElementById("input").value;
    let amigo = $("#amigo");

    amigo.empty();

    $.get(`${URL}/${id}`, (res) => {
        console.log("amigo es", res);
        amigo.text(res.name);
    });
    document.getElementById("input").value = "";
}​
search.addEventListener("click", searchFriend);

const deleteBtton = document.getElementById("delete");​
function deleteUser() {
    let id = document.getElementById("inputDelete").value; // 78
    // console.log("====>", id);
    if (id) {
        var searchDelete;
        $.get(`${URL}`, (res) => {
            res.forEach((element) => {
                console.log("01", element);
                if (element.id === Number(id)) {
                    searchDelete = element;
                } //! Los values que vienen de los INPUTS llegan como string
            });
            console.log("02", searchDelete);
            if (searchDelete) {
                let span = $("#success");
                $.ajax({
                    url: `${URL}/${id}`,
                    method: "DELETE",
                    dataType: "json",
                    success: function(response) {
                        console.log(response);
                        span.text(searchDelete.name)
                        viewList()
                    },
                    error: function(xhr, status, error) {
                        console.log(error);
                    },
                });
            } else {
                alert("ese amigo ya no existe");
            }
        });
    } else {
        alert("no hay id");
    }
    document.getElementById("inputDelete").value = ""
}
deleteBtton.addEventListener("click", deleteUser);