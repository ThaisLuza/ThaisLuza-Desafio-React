import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Repo from './repos';
import ContextUser from '../context/ContextUser';
import { AiOutlineMail, AiOutlineTeam } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  width: 100vw;
`;

const Img = styled.img`
  height: 100px;
  border-radius: 50%;
  margin-top: 20px;
  padding: 10px;
`;

const Name = styled.p`
  font-weight: bold;
  margin: 10px;
`;
const P = styled.p`
  font-size: 15px;
  margin: 10px;
  color: #292d31;
`;

const Button = styled.button`
  border: 1px solid #ccc;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 5px;
  background: #fafbfc;
  width: 100%;
  color: #292d31;
  margin: 0 auto;
`;

function User() {
  const history = useHistory();
  const [user, setUser] = useContext(ContextUser);
  console.log(user);
  useEffect(() => {
    user.length === 0 && history.push('/home');
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
