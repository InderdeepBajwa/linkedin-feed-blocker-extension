function hideLinkedInFeed() {
  var feed = document.querySelector("div.scaffold-finite-scroll");
  if (feed) {
    feed.style.display = "none";
  }
}

function hideLinkedInNews() {
  var newsSection = document.getElementById("feed-news-module");
  if (newsSection) {
    newsSection.style.display = "none";
  }
}

hideLinkedInFeed();
hideLinkedInNews();
