import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import Mobile from './Mobile'
import { Button } from './ui/button'

export default function Header() {

    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className="container mx-auto flex justify-between items-center">

                <Link href='/'>
                    <h1 className='text-4xl font-semibold'>
                        MoNabil<span className='text-accent-default'>.</span> </h1>
                </Link>

                {/* Desk top nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />

                    <Link href="contact">
                        <Button> Hire me </Button>
                    </Link>
                </div>

                {/* Mobile nab */}

                <div className=' xl:hidden'> <Mobile /> </div>

            </div>
        </header>
    )
}
