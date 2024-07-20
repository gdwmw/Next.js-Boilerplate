import { FC, ReactElement } from "react";

import { ASide, Footer, Header, Main, Nav } from "./modules";

const HomeLayout: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Nav />
      <ASide />
      <Main />
      <Footer />
    </>
  );
};

export default HomeLayout;
