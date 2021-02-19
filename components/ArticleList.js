import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

export default function ArticleList({ articles }) {
  return (
    <div className={articleStyles.grid}>
      {
        articles.map((article, key) => (
          <ArticleItem article={article} key={`index-${key}`}/>
        ))
      }
    </div>
  )
}
