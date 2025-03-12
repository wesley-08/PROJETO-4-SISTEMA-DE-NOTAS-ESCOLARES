const { calcularMedia, verificaAprovacao, adicionarNota } = require('./src/notas');

describe('Sistema de Notas Escolares', () => {
  let notas;

  beforeEach(() => {
    notas = [7, 8, 9];
  });

  test('calcularMedia deve retornar a média correta', () => {
    expect(calcularMedia(notas)).toBe(8);
  });

  test('verificaAprovacao deve retornar "Aprovado" para média >= 6', () => {
    expect(verificaAprovacao(8)).toBe('Aprovado');
  });

  test('verificaAprovacao deve retornar "Reprovado" para média < 6', () => {
    expect(verificaAprovacao(5)).toBe('Reprovado');
  });

  test('adicionarNota deve adicionar uma nova nota ao array', () => {
    const novasNotas = adicionarNota(notas, 10);
    expect(novasNotas).toEqual([7, 8, 9, 10]);
  });

  test('adicionarNota deve lançar um erro para nota inválida', () => {
    expect(() => adicionarNota(notas, 11)).toThrow('Nota inválida');
  });

  test('calcularMedia deve lançar um erro para lista de notas vazia', () => {
    expect(() => calcularMedia([])).toThrow('Lista de notas vazia');
  });
});