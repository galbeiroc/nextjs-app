import Head from 'next/head'

export default function Meta({title, keywords, description}) {
  return (
    <Head>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'WebDev News',
  description: 'Web development',
  keywords: 'keywords',
}