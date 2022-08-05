import { useContext } from 'react';
import styled from 'styled-components';
import ContextRepo from '../context/ContextRepo';
import { AiOutlineBook } from 'react-icons/ai';

const Container = styled.div`
  max-width: 60vw;
  color: #575a5d;
  margin-left: 10px;
  @media only screen and (min-width: 600px) {
    margin-left: 40px;
  }
`;
const Titulo = styled.h2`
  font-weight: bold;
  width: 150px;
  margin: 20px;
  border-bottom: 3px solid orange;
  @media only screen and (min-width: 600px) {
    margin-top: 50px;
    font-size: 20px;
  }
`;

const ProjectName = styled.a`
  font-weight: bold;
  text-decoration: none;
  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }
`;
const Description = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
  @media only screen and (min-width: 600px) {
    font-size: 16px;
  }
`;
const P = styled.p`
  font-size: 13px;
  word-wrap: break-word;
  margin-bottom: 15px;
  @media only screen and (min-width: 600px) {
    font-size: 15px;
  }
`;

const Card = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

const Languages = styled.div`
display:flex;
justify-content: space-around;
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
        <AiOutlineBook/> Repositories
      </Titulo>
      {repo &&
        repo.data.map((r, k) => (
          <Card>
            <div style={{ marginBottom: '10px' }}>
              <ProjectName target='_blank' href={r.html_url} rel='noreferrer'>
                {r.name}
              </ProjectName>
            </div>
            {r.fork && <P>{r.forks_url}</P>}
            {r.description && <Description>{r.description}</Description>}
            {r.license && <P>{r.license.name}</P>}
            <Languages>
              {r.language && <P> &#8226; {r.language}</P>}

              <P>{`Updated on ${r.updated_at.split('-')[2].slice(0, 2)} ${
                Months[r.updated_at.split('-')[1] - 1]
              }`}</P>
            </Languages>
          </Card>
        ))}
    </Container>
  );
}

export default Repo;
