import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function layout() {
    return (
        <div>
            <div className="flex h-full align-middle">
                <button className="rounded-full border-2 border-gray-700 text-gray-700 p-2 hover:bg-gray-800 hover:text-white">
                    <FaArrowLeft />
                </button>
                <button className="rounded-full border-2 border-gray-700 text-gray-700 p-2 hover:bg-gray-800 hover:text-white">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}
