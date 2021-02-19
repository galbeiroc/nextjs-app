import Link from 'next/link'
import Meta from '../../../components/Meta'

export default function article({ article }) {
  return (
    <>
      <Meta title={article.title} />
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  )
}

export const getStaticProps = async(context) => {
  const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const article = await response.json()

  return {
    props: { article }
  }
}

export const getStaticPaths = async () => {
  const response = await fetch(`http://jsonplaceholder.typicode.com/posts`)
  const articles = await response.json()

  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() }}))

  return { 
    paths,
    fallback: false
  }
}


// export const getStaticProps = async(context) => {
//   const response = await fetch(`${server}/api/articles/${context.params.id}`)
//   const article = await response.json()

//   return {
//     props: { article }
//   }
// }

// export const getStaticPaths = async () => {
//   const response = await fetch(`${server}/api/articles`)
//   const articles = await response.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() }}))

//   return { 
//     paths,
//     fallback: false
//   }
// }