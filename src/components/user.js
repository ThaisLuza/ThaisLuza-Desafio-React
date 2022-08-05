import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Repo from './repos';
import ContextUser from '../context/ContextUser';
import {
  AiOutlineMail,
  AiOutlineTeam,
  AiOutlineEnvironment,
} from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  width: 90vw;
  color: #575a5d;
  justify-content: center;
  margin: 0 10px;
`;

const Img = styled.img`
  height: 100px;
  border-radius: 50%;
  margin-top: 20px;
  padding: 10px;
  @media only screen and (min-width: 600px) {
    height: 300px;
    padding: 30px;
  }
`;

const Name = styled.p`
  font-weight: bold;
  margin: 10px;
  @media only screen and (min-width: 600px) {
    font-size: 25px;
  }
`;

const P = styled.p`
  word-wrap: break-word;
  font-size: 15px;
  margin: 10px;
  color: #292d31;
  @media only screen and (min-width: 600px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  border: 1px solid #ccc;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 5px;
  background: #fafbfc;
  width: 90%;
  color: #292d31;
  margin: 0 10px;
`;

function User() {
  const history = useHistory();
  const [user, setUser] = useContext(ContextUser);
  useEffect(() => {
    user.length === 0 && history.push('/');
  }, []);
  return (
    <Container>
      <aside>
        {user.data && (
          <div>
            <Img src={user.data.avatar_url} alt={user.data.name + ' avatar'} />
            <Name>{user.data.name}</Name>
            <P>{user.data.bio}</P>
            <Button>Follow</Button>
            <P>
              {' '}
              <AiOutlineTeam /> {user.data.followers} followers{' '}
            </P>
            <P>
              {' '}
              <AiOutlineTeam /> {user.data.following} following
            </P>

            {user.data.location && (
              <P>
                {' '}
                <AiOutlineEnvironment /> {user.data.location}
              </P>
            )}
            {user.data.email && (
              <P>
                {' '}
                <AiOutlineMail /> {user.data.email}
              </P>
            )}
          </div>
        )}
      </aside>
      <Repo />
    </Container>
  );
}

export default User;
