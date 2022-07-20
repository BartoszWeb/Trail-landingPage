import Head from "next/head";
import "../styles/globals.css";
import "../styles/resets.css";
import { MainTemplate } from "../components/templates/MainTemplate";
import { AppContexts } from "../contexts/AppContexts";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
    return (
        <AppContexts>
            <SessionProvider session={ pageProps.session }>
                <Head>
                    <title>Trail - User Activity Analytics Tool</title>
                    <meta name="description" content="Know your customers and boost your sales with Trail"/>
                </Head>
                <MainTemplate>
                    <Component { ...pageProps } />
                </MainTemplate>
            </SessionProvider>
        </AppContexts>
    );
    
}


export default MyApp;