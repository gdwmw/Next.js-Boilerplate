import { FC, ReactElement } from "react";

import { ASide, Footer, Header, Main, Nav } from "./modules";

const ExampleLayout: FC = (): ReactElement => (
  <>
    <Header>
      <Nav />
    </Header>
    <Main>
      <ASide />
    </Main>
    <Footer />
  </>
);

export default ExampleLayout;
