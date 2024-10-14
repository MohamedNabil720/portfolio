import Link from 'next/link';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


const socials = [
    { icon: <FaGithub />, path: 'https://github.com/MohamedNabil720' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/muhammad--nabil/' },
    { icon: <FaTwitter />, path: 'https://x.com/MonabilZ3' },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles} >
            {socials.map((item, index) => {
                return (
                    <Link target='_blank' key={index} href={item.path} className={iconStyles} >
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social