import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";

export default class MyDocument extends Document {
	render() {
		const { emotionStyleTags } = this.props;

		return (
			<Html lang="en">
				<Head>
					{emotionStyleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
