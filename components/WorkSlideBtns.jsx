"use client"
import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'


const WorkSlideBtns = ({ containerStyles, btnStyles, iconsStyles }) => {

    const Swiper = useSwiper()

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => Swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsStyles} />
            </button>


            <button className={btnStyles} onClick={() => Swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    )
}

export default WorkSlideBtns