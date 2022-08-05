import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../components/renderWithRouter';
import userEvent from '@testing-library/user-event';
import App from '../App';


describe('Teste da rota "/"', () => {
  it('deve existir um campo de input', () => {
    renderWithRouter(<App />);

    const input = screen.getByPlaceholderText('Digite o nome do usuário');
    expect(input).toBeInTheDocument();
  });

  it('deve existir um botão de buscar', () => {
    renderWithRouter(<App />);

    const btn = screen.getByText('Buscar');
    expect(btn).toBeInTheDocument();
  });

  it('quando user não existir, o botão não redireciona para outra página', () => {
    const { history } = renderWithRouter(<App />);

    const input = screen.getByPlaceholderText('Digite o nome do usuário');
    expect(input).toHaveValue('');

    const btn = screen.getByText('Buscar');
    userEvent.click(btn);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});


