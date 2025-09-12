import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from "next/image";
import { FiDownload } from 'react-icons/fi'


const info = {
  name: `Hello! I'm`,
  p: `MERN Stack Developer with hands-on experience in building scalable web applications using MongoDB, Express.js, React.js, Vue.js and Node.js. Skilled in full-stack development, REST API integration, and crafting responsive UIs with modern frameworks. Passionate about solving problems and delivering high-quality solutions with clean, maintainable code. `
}





export default function Home() {

  return (

    <section className="h-full">
      <div className="container mx-auto h-full">

        <div className="flex flex-col  xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* info */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className=" text-xl"> Full Stack Developer  </span>
            <h1 className="h1 mb6"> {info.name} <br />  <span className="text-accent-default"> Mohamed Nabil </span> </h1>

            <p className=" max-w-[500px] mb-9 text-white/80"> {info.p} </p>


            <div className="flex flex-col xl:flex-row items-center gap-8">

              <Button
                variant="outline"
                size="lg"
                className=" uppercase flex items-center gap-2">
                <Link className="w-full h-full flex items-center" target="_blank" href="https://drive.google.com/file/d/11TZziEyts2BP1zrB3ityWJnzRgJqIBO4/view" > Download Cv </Link>
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
