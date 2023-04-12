

const cep = document.getElementById("cep");
const rua = document.getElementById("street");
const bairro = document.getElementById("neighborhood");
const cidade =  document.getElementById("city");
const estado = document.getElementById("state");
const numero = document.getElementById("number");


cep.addEventListener('blur' , async (event) =>{

    event.preventDefault();

    await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(Response =>{
            return Response.json().then(
                data =>{
                    
                    rua.value = data.logradouro;
                    bairro.value = data.bairro;
                    cidade.value = data.localidade;
                    estado.value = data.uf;

                    sessionStorage.setItem("address" , JSON.stringify(data));

                }
            )
        });

    });