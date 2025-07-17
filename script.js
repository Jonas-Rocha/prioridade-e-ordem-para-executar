// PRIORIDADE E ORDEM DE EXECUÇÃO (Event Loop)
/*
Nesta aula, vamos fazer um experimento para entender a ordem de execução das tarefas no JavaScript, 
explorando a prioridade do event loop. Este experimento vai proporcionar insights sobre o funcionamento interno do JavaScript.
*/

// (1) Executa o código de forma síncrona e o valor 1 é impresso imediatamente no console.
console.log(1);

// (3) Microtaskes são executadas antes de temporizadores e promessas.
queueMicrotask(() => {
  console.log(2);
});

// (5) Macrotask que aguarda o evento de temporizador ser acionado.
setTimeout(() => {
  console.log(3);
}, 1000);

// (2) Execução síncrona.
console.log(4);

// (4) Adiciona uma microtask. (quando a promise é resovlida)
Promise.resolve(true).then(() => {
  console.log(5);
});
