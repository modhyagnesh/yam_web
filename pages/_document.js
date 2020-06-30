import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="preconnect" href="https://res.cloudinary.com" />
          <link rel="preconnect" href="http://localhost:1337" />
          {/* <link rel="preconnect" href="https://fonts.googleapis.com/" /> */}
          {/* <link rel="preconnect" href="https://ajax.googleapis.com/" /> */}
        </Head>

        <body data-spy="scroll" data-target="#navbarYagnesh" data-offset="98">
          <Main />
          <NextScript />
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
var WebFontConfig = {
	google: {families: [ '${face}' ]}
};
(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();
			`,
            }}
          /> */}
        </body>
      </Html>
    );
  }
}
