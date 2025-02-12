import UrlItem from "./UrlItem";

interface UrlListProps {
    urls: any[];
    onDelete: (id: number) => void;
}

export default function UrlList({ urls, onDelete }: UrlListProps) {
    return (
        <div>
            {urls.length === 0 ? (
                <p>Список пуст.</p>
            ) : (
                <ul>
                    {urls.map((url) => (
                        <UrlItem key={url.id} url={url} onDelete={onDelete} />
                    ))}
                </ul>
            )}
        </div>
    );
}
