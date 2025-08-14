// CICDWorkflow.jsx
import { motion } from "framer-motion";
import { FaCode, FaDocker, FaVial } from "react-icons/fa";
import { SiKubernetes, SiPrometheus } from "react-icons/si";

export default function CICDWorkflow() {
    const stages = [
        { name: "Code", icon: <FaCode className="w-6 h-6" /> },
        { name: "Build", icon: <FaDocker className="w-6 h-6" /> },
        { name: "Test", icon: <FaVial className="w-6 h-6" /> },
        { name: "Deploy", icon: <SiKubernetes className="w-6 h-6" /> },
        { name: "Monitor", icon: <SiPrometheus className="w-6 h-6" /> },
    ];

    return (
        <div className="">
            <div className="flex justify-center items-center gap-8 flex-wrap">
                {stages.map((stage, index) => (
                    <div key={index} className="flex flex-col items-center relative">
                        {/* Animated Circle */}
                        <motion.div
                            className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center bg-gray-800 text-white"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1, delay: index * 0.3 }}
                        >
                            {stage.icon}
                        </motion.div>

                    </div>
                ))}
            </div>
        </div>
    );
}
