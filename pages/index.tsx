import styled from '@emotion/styled';
import Layout1 from 'src/components/layout/Layout1';
import { CC } from '@/styles/commonComponentStyle';
import theme from '@/styles/theme';

const HomePage = ({ test }: any) => {
  return (
    <Container>
      <div> 123 </div>
      <div> 123 </div>
      <div> 123 </div>
    </Container>
  );
};
HomePage.layout = Layout1;
export default HomePage;

const Container = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
`;
