import { useState } from "react";
import type { NextPage, GetServerSideProps } from "next";

const catImages: string[] = [
  "https://cdn2.thecatapi.com/images/bpc.jpg",
  "https://cdn2.thecatapi.com/images/eac.jpg",
  "https://cdn2.thecatapi.com/images/6qi.jpg",
];

const randomCatImages = (): string => {
    const index = Math.floor(Math.random() * catImages.length);
    return catImages[index];
}

interface CatCategory {
    id: number;
    name: string;
}
interface SearchCatImage {
    breeds: string[];
    categories: CatCategory[];
    id: string;
    url: string;
    width: number;
    height: number;
}
type SearchCatImageResponse = SearchCatImage[];

const fetchCatImages = async (): Promise<SearchCatImage> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = (await res.json()) as SearchCatImageResponse;
    return result[0];
};

interface IndexPageProps {
    initialCatImageUrl: string;
}

const IndexPage: NextPage<IndexPageProps> = ({ initialCatImageUrl }) => {
    const [catImageUrl, setcatImageUrl] = useState(initialCatImageUrl);

    const handleClick = async () => {
        const image = await fetchCatImages();
        setcatImageUrl(image.url);
    }
    return (
        <div>
            <button onClick={handleClick}>きょうのにゃんこ🐱</button>
            <div style={{ marginTop: 8 }}>
                <img src={catImageUrl} />
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<
    IndexPageProps
> = async () => {
    const catImage = await fetchCatImages();
    return {
        props: {
            initialCatImageUrl: catImage.url,
        },
    };
};

export default IndexPage;