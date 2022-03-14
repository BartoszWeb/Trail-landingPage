import Head from "next/head";
import "../styles/globals.css";
import "../styles/resets.css";
import { MainTemplate } from "../components/templates/MainTemplate";
import { AppContexts } from "../contexts/MultipleContexts";

function MyApp({ Component, pageProps }) {
    return (
        <AppContexts>
            <Head>
                <title>Trail - User Activity Analytics Tool</title>
                <meta name="description" content="Know your customers and boost your sales with Trail"/>
            </Head>
            <MainTemplate>
                <Component { ...pageProps } />
            </MainTemplate>
        </AppContexts>
    );
    
}


export default MyApp;