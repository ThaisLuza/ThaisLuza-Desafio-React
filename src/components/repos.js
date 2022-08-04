import { useContext } from 'react';
import styled from 'styled-components';
import ContextRepo from '../context/ContextRepo';
import { AiOutlineBook } from 'react-icons/ai';

const Container = styled.div`
max-width: 60vw;
`
const Titulo = styled.h2`
font-weight: bold;
margin: 20px
`;

const ProjectName = styled.a`
font-weight: bold;
padding: 20px;
`

const Description = styled.p`
padding: 10px;
font-size: 13px;
`
const P = styled.p`
font-size: 13px;
word-wrap:break-word;
`

const Card = styled.div`
padding: 20px 0;
border-bottom: 1px solid gray;
`

function Repo() {
  const [repo, setRepo] = useContext(ContextRepo);
  const Months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <Container>
      <Titulo>
        {' '}
        <AiOutlineBook /> Repositories
      </Titulo>
      {repo &&
        repo.data.map((r, k) => (
          <Card >
            <ProjectName target='_blank' href={r.html_url} rel='noreferrer'>
              {r.name}
            </ProjectName>
            {r.fork && <P>{r.forks_url}</P>}
            {r.description && <Description>{r.description}</Description>}
            <P>{r.language}</P>
            {r.license && <P>{r.license.name}</P>}
            <P>{`Updated on ${r.updated_at.split('-')[2].slice(0, 2)} ${
              Months[r.updated_at.split('-')[1] - 1]
            }`}</P>
          </Card>
        ))}
    </Container>
  );
}

export default Repo;
