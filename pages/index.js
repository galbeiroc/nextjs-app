import Head from 'next/head'
import ArticleList from '../components/ArticleList'

import { server} from '../config/config'

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await response.json()
  return { props:{ articles} }
}


// export const getStaticProps = async(context) => {
//   const response = await fetch(`${server}/api/articles/${context.params.id}`)
//   const article = await response.json()

//   return {
//     props: { article }
//   }
// }