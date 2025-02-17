import { motion } from "motion/react";

function ActivityCard({ name, role, date, location, children }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-8 justify-between">
                <span className="font-bold">{name}</span>
                <span>{date}</span>
            </div>
            <div className="flex flex-row gap-8 justify-between">
                <span className="font-bold">{role}</span>
                <span>{location}</span>
            </div>
            {children}
        </div>
    );
}

export default function Section4() {
    return (
        <div className="relative overflow-x-hidden border-gray-500 border-b-2">
            <motion.div
                className="section-4-bg absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 1.2 }}
                transition={{
                    // duration: 2,
                    type: "spring",
                    mass: 100,
                    damping: 50,
                }}
            >
                <img
                    src="bg_bggenerator_com3.png"
                    alt=""
                    className="rotate-180"
                />
            </motion.div>
            <div
                id="section-4"
                className="relative h-fit flex flex-col items-center justify-center align-middle p-16 gap-32"
            >
                <h1 className="text-5xl font-extrabold">
                    My Clubs & Activities
                </h1>
                <div className="grid grid-cols-2 gap-8 *:max-w-[30vw]">
                    <ActivityCard
                        name="FC Hacks Club @ Fox Chapel Area HS"
                        role="Secretary"
                        date="Feb 2025 - now"
                        location="Pittsburgh, PA"
                    ></ActivityCard>
                </div>
            </div>
        </div>
    );
}
