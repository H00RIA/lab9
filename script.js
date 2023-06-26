// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "block";
  }

  //fetching the news fron news API by puuting by API key. 
fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=92418ea262644ca69819c2bd39cfd828')
  .then(response => response.json())
  .then(data => {
    const newsArticles = data.articles;

  
    const rootElement = document.getElementById("root");
    newsArticles.forEach(article => {
      const articleElement = document.createElement("div");
      articleElement.innerHTML = `
        <img src="${article.urlToImage}" alt="${article.title}" style="width:100%" >
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      rootElement.appendChild(articleElement);
    });
  })
  .catch(error => {
    console.error('Error fetching news:', error);
  });
