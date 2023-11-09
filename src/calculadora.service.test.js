import React from "react";
import ReactDOM from "react-dom";
import CalculadoraService from './calculadoraService';

describe('Teste CalculadoraService', () => {

    const[calcular, concatenarNumero, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO, OPERACAO] =  CalculadoraService();

    it('Deve garantir que 1 + 4 = 5', () => {
        let soma = calcular(1, 4, SOMA);
        // expect é o que espero do retorno
        expect(soma).toEqual(5);

    });

    it('Deve garantir que 1 - 4 = - 3', () => {
        let subtracao = calcular(1, 4, SUBTRACAO);
        expect(subtracao).toEqual(-3);
    });

    it('Deve garantir 1 * 4 = 4', () => {
        let multiplicacao = calcular(1, 4, MULTIPLICACAO);
        expect(multiplicacao).toEqual(4);
    });

    it('Deve garantir 1 / 4 = 0.25', () => {
        let divisao = calcular(1, 4, DIVISAO);
        expect(divisao).toEqual(0.25);
    });

     it('Deve retornar zero para operação inválida', () =>{
        let operacaoInvalida = calcular(1, 4, '%');
        expect(operacaoInvalida).toEqual(0);
     });  
    
});