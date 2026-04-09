import { FC, ReactElement } from "react";

import { Aside, Footer, Header, Main, Nav } from "./modules";

const HomeLayout: FC = (): ReactElement => (
  <>
    <Header>
      <Nav />
    </Header>
    <Main>
      <Aside />
    </Main>
    <Footer />
  </>
);

export default HomeLayout;
