import contentStore from "./contentStore.json";

export default function searchData(searchText, maxResults) {
  return contentStore
    .filter(content => {
      if (content.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (content.snippet.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
