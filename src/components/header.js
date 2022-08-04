import logo from '../img/gatin.png';
import file from '../img/file.png';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  weigth: 100%;
  background-color: #161b22;
  justify-content: space-between;
`;


export default function HeaderTop() {
  return (
    <Header>
      <div>
        <img src={logo} alt={'logo-github'} height={'40px'} />
      </div>
      <div>
        <img src={file} alt={'notificações'} height={'40px'} />
      </div>
    </Header>
  );
}
