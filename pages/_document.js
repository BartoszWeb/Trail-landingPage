import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { readFileSync } from 'fs';
import { join } from 'path';

class InlineStylesHead extends Head {
    getCssLinks() {
        return this.__getInlineStyles();
    }
    
    __getInlineStyles() {
        const { assetPrefix, files } = this.context;
        if (!files || files.length === 0) return null;
        
        return files.filter(file => /\.css$/.test(file)).map(file => (
            <style
                key={file}
                data-href={`${assetPrefix}/_next/${file}`}
                dangerouslySetInnerHTML={{
                    __html: readFileSync(join(process.cwd(), '.build', file), 'utf-8'),
                }}
            />
        ));
    }
}

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <InlineStylesHead>
                    <link rel="shortcut icon" href="/assets/favicon.ico"/>
                    <link rel="preload" href="/fonts/lato-v22-latin-regular.woff2" as="font" type="font/woff2"
                          crossOrigin=""/>
                    <link rel="preload" href="/fonts/lato-v22-latin-300.woff2" as="font" type="font/woff2"
                          crossOrigin=""/>
                    <link rel="stylesheet icon" href="/fonts/style.css"/>
                </InlineStylesHead>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
    
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App { ...props } />),
                });
            
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        { initialProps.styles }
                        { sheet.getStyleElement() }
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}