"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"



const about = {
    title: 'about me',
    Description: `Hello! I'm Mohamed Nabil, a passionate and dedicated Full-Stack web developer With two years of experience in the field I specialize in creating dynamic, user-friendly web interfaces that enhance the user experience. My journey in full-stack development has allowed me to work on a variety of exciting projects, where I've honed my skills in HTML, CSS, JavaScript, and modern frameworks like React, Next.js, and Node.js. I thrive in collaborative environments and am always eager to learn and adapt to new technologies. When I'm not coding, I enjoy exploring the latest trends in web development and contributing to open-source projects. Let's connect and create something amazing together!`,

    info: [
        {
            fieldName: "Name",
            fieldValue: "Mohamed Nabil"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+20) 1018625886"
        },
        {
            fieldName: "Experience",
            fieldValue: "2"
        },

        {
            fieldName: "Languages",
            fieldValue: "Arabic , English"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Egyption"
        },
        {
            fieldName: "Email",
            fieldValue: "medonapil94@gmail.com"
        },
    ]
}


const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: " I graduated from Al-Azhar University  and I have spent a lot of time learning programming, especially front-end development.",

    items: [
        {
            institution: "Route academy ",
            position: "Full Stack web Developer Bootcamp",
            duration: "2023-2024",
        },
        {
            institution: "ITI Mansoura",
            position: "MERN Stack",
            duration: "2025",
        },
        {
            institution: "online course The Complete JavaScript Course - Jonas Schmedtmann ",
            position: "JavaScript course",
            duration: "2022",
        },
        {
            institution: " Angela Yu - Udemy ",
            position: "The Complete Full-Stack Web Development Bootcamp",
            duration: "2022",
        },
    ]
}

const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, saepe?",

    SkillList: [
        {
            icon: <FaHtml5 />,
            name: "Html5"
        },
        {
            icon: <FaCss3 />,
            name: "Css 3"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <FaReact />,
            name: "React.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css"
        },
        {
            icon: <FaFigma />,
            name: "Figma"
        },
        {
            icon: <FaBootstrap />,
            name: "Bootstrap"
        },
    ]
}





const Resume = () => {


    return <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>

        <div className="container mx-auto">

            <Tabs defaultValue='about' className='flex flex-col xl:flex-row gap-[60px] '>

                <TabsList className='flex flex-col w-[70%] max-w-ful-[380px] mx-auto xl:mx-0 gap-6 '>

                    <TabsTrigger value='about'> About me</TabsTrigger>
                    <TabsTrigger value='skills'>Skills</TabsTrigger>
                    <TabsTrigger value='education'> Education</TabsTrigger>

                </TabsList>

                <div className='min-h-[70vh] w-full'>

                    {/* about */}
                    <TabsContent value='about' className="w-full text-center xl:text-left">
                        <div className='flex flex-col gap-[30px]'>
                            <h3 className='text-4xl font-bold'> {about.title} </h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'> {about.Description} </p>
                            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-8  mx-auto xl:mx-auto'>
                                {about.info.map((item, index) => {
                                    return (
                                        <li key={index} className='flex items-center  justify-center xl:justify-start gap-4'>
                                            <span className='text-white/60 '> {item.fieldName} </span>
                                            <span className='text-[1.20rem]'> {item.fieldValue} </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>

                    {/* education */}
                    <TabsContent value='education'>
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                            <h3 className='text-4xl font-bold'> {education.title} </h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'> {education.description} </p>

                            <ScrollArea className="h-[400px]">
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                    {education.items.map((item, index) => {
                                        return (
                                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent-default'> {item.duration} </span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'> {item.position} </h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent-default'></span>
                                                    <p className='text-white/60'> {item.institution} </p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* skills */}
                    <TabsContent value='skills' className="w-full h-full">
                        <div className='flex flex-col gap-[30px]'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'> {skills.title} </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'> {skills.description} </p>
                            </div>
                            <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
                                {skills.SkillList.map((skill, index) => {
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-6xl group-hover:text-accent-default transition-all duration-300'>
                                                            {skill.icon} </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent> <p> {skill.name} </p> </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>


                </div>
            </Tabs>

        </div>

    </motion.div>


}

export default Resume



