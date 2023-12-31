import React from 'react';
import ReactDOM from 'react-dom/client';
import { fireEvent, render, screen } from '@testing-library/react';
import Calculadora from './calculadora';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Calculadora', () => {


it('Deve rendereziar o componente', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculadora />, div);
  ReactDOM.unmountComponentAtNode(div);

});

it('Deve limpar o campo de numeros', () => {
  const {getByTestId, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('c'));
  expect(getByTestId('txtNumeros')).toHaveValue('0');


});

it('Deve somar 2 + 3 e obter 5', () => {
  const {getByTestId, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('5');


});

it('Deve subtrair 5 - 3 e obter 2', () => {
  const {getByTestId, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('2');


});

it('Deve dividir 6 + 3 e obter 5', () => {
  const {getByTestId, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('2');


});

it('Deve multiplicar 2 * 3 e obter 6', () => {
  const {getByTestId, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('6');


});

it('deve somar 2.5 + 3 e obter 5.5', () => {
  const { getByTestId, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('.'));
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('5.5');
});

});