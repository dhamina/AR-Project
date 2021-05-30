// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { initiateServiceWorker } from '../helpers/service-worker.helper'
class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}


	

	render() {
		return (
			<Html lang="en">
				<Head>
					
<meta charset='utf-8' />
<meta http-equiv='X-UA-Compatible' content='IE=edge' />
<meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
<meta name='description' content='Description' />
<meta name='keywords' content='Keywords' />
<title>Next.js PWA Example</title>

<link rel="manifest" href="/manifest.json" />
<link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
<link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
<link rel="apple-touch-icon" href="/apple-icon.png"></link>
<meta name="theme-color" content="#317EFB"/>

				</Head>
				<body>
					<script src="/static/poly.js"></script>
					<noscript>You need to enable JavaScript to run this app.</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
