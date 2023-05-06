const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
		dias: 10,
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
		dias: 5,
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
		dias: 60,
  }
  
]
const titulosconcluidos = tarefas.filter((x) => x.concluida)
.map((x) => x.titulo);

const titulosNaoConcluidos = tarefas.filter((x) => !x.concluida)
.map((x) => x.titulo);

const tarefasConcluidasMenos30Dias = tarefas.filter((x)=>x.concluida && x.dias<30)
.map((x) => titulo);

console.log(titulosconcluidos);
console.log(titulosNaoConcluidos);
console.log(tarefasConcluidasMenos30Dias);