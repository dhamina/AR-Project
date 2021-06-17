import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
			<meta charset='utf-8' />
					<meta http-equiv='X-UA-Compatible' content='IE=edge' />
					<meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
					<meta name='description' content={`Learn like never before`} content='Description' />
					<meta name='keywords' content='Keywords' />
					<title>Athena</title>
					<link rel="manifest" href="/manifest.json" />
					<link href='/logo/icon-192x192.png' rel='icon' type='image/png' sizes='192x192' />
					<link href='/logo/icon-256x256.png' rel='icon' type='image/png' sizes='256x256' />
					<link rel="apple-touch-icon" href="/apple-icon.png"></link>
					<meta name="theme-color" content="#317EFB"/>
		</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument