import App from "next/app";

import { appWithTranslation } from "../i18n";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  return {
    ...(await App.getInitialProps(appContext)),
  };
};

export default appWithTranslation(MyApp);
