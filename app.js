import { createApp } from 'https://unpkg.com/petite-vue?module';

const headers = { 'Content-Type': 'application/json' };

const App = (props) => {
  return {
    $template: `<ul>
    <li v-once v-for="article in articles">
      {{article.name}}
    </li>
  </ul>`,
    API_URL: props.url,
    // properties
    articles: [],

    // methods
    async getArticles() {
      const resp = await fetch(`${this.API_URL}`, { headers });
      const data = await resp.json();
      this.articles = data;
    },
  };
};

console.log(App);
createApp({
  App,
}).mount();

// createApp({
//   App,
// }).mount(`#relatedArticlesApp`);
