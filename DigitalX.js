const começar = document.getElementById("overlay");
const começarExit = document.getElementById("exit_x");

const começarBtn = document.getElementById("start_btn");

começarBtn.addEventListener("click", function(){
    começar.style.display = "flex";
})
começarExit.addEventListener("click", function closeEntrarBox() {
    começar.style.display = "none";
})

//asideBar//
const toggle = document.getElementById("toggle");          
const asideBar = document.querySelector(".aside_options");

toggle.addEventListener('click', function() {
    if(asideBar.style.display == "none"){
        asideBar.style.display = "flex";
    }
    else{
        asideBar.style.display = "none"
    }


})
//criar conta zone//

const criarConta = document.getElementById("overlay2");
const criarContaBtn = document.getElementById("criar_btn");
const exitCriarConta = document.getElementById("exit_xx");

exitCriarConta.addEventListener('click', function(){
    criarConta.style.display = "none";
})

criarContaBtn.addEventListener('click', function(){
    criarConta.style.display = "flex";
    começar.style.display = "none";
})

const novaContaBtn = document.getElementById("enviar_btn");
const userStatus = document.getElementById("user_status");

novaContaBtn.addEventListener("click", function(e){
    e.preventDefault();
    começar.style.display = "none";

    const passWord = document.getElementById("pass_wrd")
    const passValue = passWord.value;

    const userPass = document.getElementById("user_wrd");
    const userPassValue = userPass.value;
    

    if(passValue === "almoço" && userPassValue === "bison7gpo"){
        userStatus.textContent = " Admin";
    }
    else{
        userStatus.textContent = "Cliente";
    }
})


//search input auto-complete//

let searchable = [
    'Segurança',
    'Responsividade',
    'Bom Preço',
    'Serviços',
    'Projeto',
    'Análise',
    'Equipe',
    'Elasticidade'
];
const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if(input.length){
        results = searchable.filter((item) =>{
            return item.toLowerCase().includes(input.toLowerCase());

        })
    }

    renderResults(results);

});

function renderResults (results){
    if(!results.length){
     searchWrapper.classList.remove(`show`);
    }

    let content = results
    .map((item) => {
        return `<li>${item}</li>`;
    })
    .join(``);

    searchWrapper.classList.add(`show`);
    resultsWrapper.innerHTML = `<ul>${content}</ul`;

}