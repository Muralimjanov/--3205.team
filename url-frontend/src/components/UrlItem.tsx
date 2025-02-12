import axios from "axios";

interface UrlItemProps {
    url: any;
    onDelete: (id: number) => void;
}

export default function UrlItem({ url, onDelete }: UrlItemProps) {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/delete/${url.shortUrl}`);
            onDelete(url.id);
        } catch (error) {
            console.error("Ошибка при удалении ссылки:", error);
        }
    };

    return (
        <li>
            <div>
                <a href={`http://localhost:3000/${url.shortUrl}`} target="_blank">
                    {url.shortUrl}
                </a>{" "}
                → {url.originalUrl} (Кликов: {url.clickCount})
            </div>
            <button className="delete" onClick={handleDelete}>
                Удалить
            </button>
        </li>
    );
}
