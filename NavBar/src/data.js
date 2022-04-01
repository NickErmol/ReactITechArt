const news = [
  {
    name: 'Breaking news',
    id: 0,
    text: 'Some text 0',
  },
  {
    name: 'Shoсking news',
    id: 1,
    text: 'Some text 1',
  },
  {
    name: 'Political news',
    id: 2,
    text: 'Some text 2',
  },
];

export default function getNews() {
  return news;
}

export function getNewsItem(id) {
  return news.find(newsItem => newsItem.id === id);
}
