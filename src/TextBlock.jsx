export default function TextBlock({ title, children }) {
    return (
        <div className="flex flex-row mt-4 mb-4 border-sky-700 border-l-8 pl-2">
            <div className="flex flex-col">
                <div className="mb-2 text-sky-700 font-bold underline">
                    {title}
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}
