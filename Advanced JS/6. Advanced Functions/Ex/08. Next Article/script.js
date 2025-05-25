function getArticleGenerator(articles) {
    const divElement = document.querySelector('#content')
    const copyArticles = articles.slice()

    return () => {
        if (copyArticles.length > 0) {
            let article = document.createElement('article')
            article.textContent = copyArticles.shift()
            divElement.appendChild(article)
        }
    }
}
