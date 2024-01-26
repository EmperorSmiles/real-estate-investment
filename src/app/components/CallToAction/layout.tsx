export default function CallToAction({ text }: { text: string }) {
    return (
        <button className="bg-transparent rounded-xl border-2 border-gray-700 text-gray-700 h-8 lg:m hover:bg-gray-800 hover:text-white w-full lg:w-96 my-8">
            {text}
        </button>
    );
}