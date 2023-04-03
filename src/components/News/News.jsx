import s from './News.module.css';

const News = ({pageName}) => {
    return (
        <div className={s.news}>
            <div className={s.wallpaper}>{pageName}</div>
            <div className={s.news_block}>
                <h2>My messages</h2>
                <div>list of messages</div>
            </div>
        </div>
    )
}

export default News;