const getBlogList = (xmlDocument) => {
  // XML形式の文字列をパースしてDOMオブジェクトに変換
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlDocument, "text/xml");
  const rss = doc.documentElement.getElementsByTagName("item");

  // 表示するブログ記事数
  const blogCount = 3;

  let html = "";
  for(let i = 0;i < blogCount;i++){
      //RSSから取得したタイトルとリンク情報を格納
      const rssTitle = rss[i].getElementsByTagName("title")[0].textContent;
      const rssLink = rss[i].getElementsByTagName("link")[0].textContent;
      const dateString = rss[i].getElementsByTagName("pubDate")[0].textContent;

      let date;
      try {
        date = new Date(dateString);
      } catch (e) {
        console.error("Invalid date string:", dateString);
        continue;
      }

      const formattedDate = date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      html += 
      `<div>${formattedDate}</div>
      <div><a href="${rssLink}" target="_brank">${rssTitle}</a></div>`;
  }
  document.getElementById('fetch_blog_list').innerHTML = html;
};

const URL = 'https://sample.com/rss';
fetch(URL)
.then( response => response.text())
.then( xmlData => getBlogList(xmlData));