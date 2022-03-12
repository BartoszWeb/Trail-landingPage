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
                <link rel="shortcut icon" href="/assets/favicon.ico"/>
                <script>
                    console.log("asdasdsad')
                </script>
            </Head>
            <MainTemplate>
                <Component { ...pageProps } />
            </MainTemplate>
        </AppContexts>
    
    );
    
}

export default MyApp;