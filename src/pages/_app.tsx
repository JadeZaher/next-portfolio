import type { AppProps } from "next/app";
import Layout from "~/components/Layout.component";
import { api } from "~/utils/api";

import "~/styles/globals.css";

function App({ Component, pageProps, ...appProps }: AppProps) {
  const getContent = () => {
    // array of all the paths that doesn't need layout
    if (appProps.router.pathname.startsWith(`/studio`))
      return <Component {...pageProps} />;

    return (
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    );
  };

  return <>{getContent()}</>;
}

export default api.withTRPC(App);
