import Button from "./components/Button";
import "./pallet.css";

export default function Pallet() {
    document.title = "Pallet";

    return <main className="flex flex-col items-center">
        <header className="flex flex-row justify-between w-3/5 items-center mt-8 mb-32">
            <div className="w-[100px] h-auto cursor-pointer">
                <a href="/pallet">
                    <img src="https://raw.githubusercontent.com/sidgames5/pallet/refs/heads/master/src/logo.svg" alt="Pallet" />
                </a>
            </div>
            <nav className="flex gap-8 items-center">
                <div className="relative cursor-pointer top">
                    <a href="/pallet/usecases">
                        <p className="font-bold text-sm">Use Cases</p>
                    </a>
                </div>
                <div className="relative cursor-pointer top">
                    <a href="/pallet/about">
                        <p className="font-bold text-sm">About</p>
                    </a>
                </div>
                <div className="relative cursor-pointer top">
                    <a href="https://github.com/sidgames5/pallet/releases">
                        <p className="font-bold text-sm">Changelog</p>
                    </a>
                </div>
            </nav>
            <Button link="/pallet/download">Download</Button>
        </header>
        <div className="w-3/5">
            <div className="flex flex-row gap-4">
                <div className="w-[1.5px] bg-sky-600">&nbsp;</div>
                <div className="flex flex-col gap-8 p-8">
                    <h1 className="font-bold text-5xl">No-Nonsense Inventory Management Solution</h1>
                    <p>Something something</p>
                </div>
                <div className="w-1/2">
                    <img src="" alt="Preview" />
                </div>
            </div>
        </div>
    </main>;
}