import { useState } from "react";
import axios from "axios";

interface ShortenFormProps {
    onShortened: (url: any) => void;
}

export default function ShortenForm({ onShortened }: ShortenFormProps) {
    const [originalUrl, setOriginalUrl] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!originalUrl) return;

        try {
            const response = await axios.post("http://localhost:3000/shorten", { originalUrl });
            onShortened(response.data);
            console.log('====================================');
            console.log(response.data);
            console.log('====================================');
            setOriginalUrl("");
        } catch (error) {
            console.error("Ошибка при сокращении ссылки:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="url"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                placeholder="Введите ссылку"
                required
            />
            <button type="submit">Сократить</button>
        </form>
    );
}
