function getArticleGenerator(articles) {
    const textArea = document.getElementById("content");
    
    return function() {
            if (articles.length === 0) {
                return;
            }   

            const article = document.createElement("article");
            article.textContent = articles.shift();
            textArea.appendChild(article);
        }
}