import { FC, ReactElement } from "react";

import { Aside, Footer, Header, Main, Nav } from "./modules";

const ExampleLayout: FC = (): ReactElement => (
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

export default ExampleLayout;
