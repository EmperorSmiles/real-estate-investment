import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface Props {
    prevCard: any;
    nextCard: any;
    activeImage: any;
}

export default function ArrowButtons({
    prevCard,
    nextCard,
    activeImage,
}: Props) {
    return (
        <div>
            <div className="flex h-full align-middle">
                <button
                    className="rounded-full border-2 border-gray-700 text-gray-700 p-2 hover:bg-gray-800 hover:text-white"
                    onClick={prevCard}
                >
                    <FaArrowLeft />
                </button>
                <button
                    className="rounded-full border-2 border-gray-700 text-gray-700 p-2 hover:bg-gray-800 hover:text-white"
                    onClick={nextCard}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}
