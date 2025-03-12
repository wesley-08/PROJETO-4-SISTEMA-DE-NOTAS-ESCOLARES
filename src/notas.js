function calcularMedia(notas) {
    if (notas.length === 0) throw new Error('Lista de notas vazia');
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
  }
  
  function verificaAprovacao(media) {
    return media >= 6 ? 'Aprovado' : 'Reprovado';
  }
  
  function adicionarNota(notas, novaNota) {
    if (novaNota < 0 || novaNota > 10) throw new Error('Nota inválida');
    return [...notas, novaNota];
  }
  
  module.exports = { calcularMedia, verificaAprovacao, adicionarNota };