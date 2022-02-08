const todoele = document.getElementById('todo-site')
console.log(todoele);

const meuTitulo = document.getElementById('meu-titulo')
console.log(meuTitulo);

meuTitulo.innerHTML = "O dark e light mode"

function dark() {
    todoele.classList.add('dark');
    todoele.classList.remove('light')
}

function light() {
    todoele.classList.remove('dark');
    todoele.classList.add('light')
}