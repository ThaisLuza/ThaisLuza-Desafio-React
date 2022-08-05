import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ContextUser from '../context/ContextUser';
import ContextRepo from '../context/ContextRepo';
const axios = require('axios');

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 60%;
  height: 250px;
  background: #d0d0d0;
  border-radius: 10px;
  font-style: normal;
  padding: 10px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  @media only screen and (min-width: 600px) {
    width: 28%;
    font-size: 20px;
  }
`;


const Button = styled.button`
  border: none;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 5px;
  background: #161b22;
  width: 50%;
  color: #ffff;
  margin-top: 20px;
  @media only screen and (min-width: 600px) {
    width: 30%;
  }
`;

const Input = styled.input`
  width: 80%;
  font-size: 12px;
  padding: 10px;
  background: #fffff;
  border: none;
  border-radius: 3px;
  margin-top: 20px;
  @media only screen and (min-width: 600px) {
    font-size: 15px;
  }
`;

function SearchUser() {
  const history = useHistory();
  const [user, setUser] = useContext(ContextUser);
  const [repo, setRepo] = useContext(ContextRepo);
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const getData = async (username) => {
    if (!username) {
      setError('Informe um nome de usuário válido do github.');
    } else {
      const userData = await axios
        .get(`https://api.github.com/users/${username}`)
        .catch((err) => console.log(err));
      !userData &&
        setError(
          'Usuário não encontrado no github. Verifique se você digitou o nome corretamente.'
        );
      userData && setUser(userData);
      userData &&
        (await axios
          .get(`https://api.github.com/users/${username}/repos`)
          .then((repoData) => setRepo(repoData))
          .catch((err) => console.log(err)));
      userData && history.push('/page-result-github');
    }
  };

  return (
    <Container>
      <Box>
        
          <h2 style={{marginTop: '10px'}}>Buscar repositório no Github</h2>
          <Input
            placeholder='Digite o nome do usuário'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Button
            onClick={() => {
              getData(name);
            }}
          >
            Buscar
          </Button>
          {error.length > 0 && (
            <div style={{marginTop: '30px'}}>
              <p>{error}</p>
            </div>
          )}
        
      </Box>
    </Container>
  );
}

export default SearchUser;
