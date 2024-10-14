"use client"
import { motion } from "framer-motion"
import Image from "next/image"
const Photo = () => {
    return (
        <div className=" w-full h-full relative">
            {/* image */}
            <motion.div>
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative">
                    <Image src="/assets/photo.png" alt="logo" priority quality={100} sizes="100%" fill className=" object-contain" />
                </div>
            </motion.div>

        </div>
    )
}

export default Photo