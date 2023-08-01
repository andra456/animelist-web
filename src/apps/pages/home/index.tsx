import React from 'react';
import styled from '@emotion/styled';
import Banner from './components/banner';
import ModalsList from './components/modalViews';
import { TypeQuery } from '@app/hooks/useFetch';

const SectionBanner = styled.section``;
const SectionList = styled.section`
  margin-top: -100px;
  position: relative;
  z-index: 3333;
`;
const MainHomepage = styled.section``;
const Recomendation = React.lazy(() => import('./components/recomendation'));
const OnGoing = React.lazy(() => import('./components/ongoing'));
const Popular = React.lazy(() => import('./components/popular'));
interface IHandlingModals {
  title: string;
  type: TypeQuery;
}

function Home(): JSX.Element {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<IHandlingModals>({
    title: '',
    type: 'banner',
  });
  const handlingModal = ({ title, type }: IHandlingModals) => {
    setToggle(true);
    setSelected({ title, type });
  };
  return (
    <>
      <ModalsList
        idList={selected.type}
        show={toggle}
        handleClose={() => setToggle(false)}
        title={selected.title}
      />
      <MainHomepage>
        <SectionBanner>
          <Banner />
        </SectionBanner>
        <SectionList>
          <OnGoing onHandleModals={handlingModal} />
          <Recomendation onHandleModals={handlingModal} />
          <Popular onHandleModals={handlingModal} />
        </SectionList>
      </MainHomepage>
    </>
  );
}

export default Home;
