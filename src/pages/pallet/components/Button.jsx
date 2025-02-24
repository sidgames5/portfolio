import { motion } from "motion/react"

export default function Button({ link, onClick, children }) {
    return <a href={link}><button onClick={onClick}><div className="undefined h-fit min-h-[38px] min-w-[180px] rounded-md p-[1px] cursor-pointer w-fit bg-gradient-to-br from-sky-600 via-sky-700 to-sky-600 drop-shadow-[0_0_4px_#0284c7] hover:via-sky-600 hover:to-sky-600 [&_div]:hover:bg-sky-600 transition-all ease-in-out duration-400"><div className="h-full w-full min-h-[38px] rounded-md flex justify-center items-center px-3 py-[6px] bg-[#171717] transition-all ease-in-out duration-400"><span className="font-bold text-sm leading-[1] text-white flex transition-all ease-in-out duration-400">{children}</span></div></div></button></a>;
}