import { React } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/globalStyles";
import theme from "../styles/theme";
import { Provider as ProviderStore } from "../store";

const Providers = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <ProviderStore>
        <GlobalStyles />
        {props.children}
      </ProviderStore>
    </ThemeProvider>
  );
};

export default Providers;
