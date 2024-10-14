import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from "next/image";
import { FiDownload } from 'react-icons/fi'


const info = {
  name: `Hello! I'm`,
  p: `a passionate and dedicated Front-End Developer With two years of experience in the field I specialize in creating dynamic, user-friendly web interfaces that enhance the user experience. My journey in front-end development has allowed me to work on a variety of exciting projects, where I've honed my skills in HTML, CSS, JavaScript, and modern frameworks like React `
}





export default function Home() {

  return (

    <section className="h-full">
      <div className="container mx-auto h-full">

        <div className="flex flex-col  xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* info */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className=" text-xl"> Frontend Developer  </span>
            <h1 className="h1 mb6"> {info.name} <br />  <span className="text-accent-default"> Mohamed Nabil </span> </h1>

            <p className=" max-w-[500px] mb-9 text-white/80"> {info.p} </p>


            <div className="flex flex-col xl:flex-row items-center gap-8">

              <Button
                variant="outline"
                size="lg"
                className=" uppercase flex items-center gap-2">
                <Link target="_blank" href="https://drive.google.com/file/d/1GdfKb3wfJGwWynFkSDAJVTtmi3L8_rhr/view" > Download Cv </Link>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0"> <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent-default rounded-full flex justify-center
              items-center text-accent-default text-base hover:bg-accent-default hover:text-primary hover:transition-all duration-500
              "/>
              </div>
            </div>


          </div>



          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>

      </div>
    </section>

  );
}
