import { useState } from "react";
import ShortenForm from "./components/ShortenForm";
import UrlList from "./components/UrlList";
import "./styles.css";

export default function App() {
  const [urls, setUrls] = useState<any[]>([]);

  const handleShortened = (newUrl: any) => {
    setUrls([newUrl, ...urls]);
  };

  const handleDelete = (id: number) => {
    setUrls(urls.filter((url) => url.id !== id));
  };

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <ShortenForm onShortened={handleShortened} />
      <UrlList urls={urls} onDelete={handleDelete} />
    </div>
  );
}
