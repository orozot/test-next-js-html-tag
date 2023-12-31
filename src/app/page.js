'use client';
import Image from 'next/image'
import styles from './page.module.css'
import {useEffect, useState} from "react";
import { motion } from 'framer-motion';


const avatarList = [
  {
    url: `https://picsum.photos/64?token=${Math.random()}`,
    name: 's',
  },
  {
    url: `https://picsum.photos/64?token=${Math.random()}`,
    name: 'a',
  },
  {
    url: `https://picsum.photos/64?token=${Math.random()}`,
    name: 'b',
  },
];


export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }

  const variants = {
    hover: {
      width: [0, 230],
      transition: {
        duration: 0.25,
        type: 'tween',
        ease: 'easeIn',
      },
    },
    initial: {
      width: 0,
      transition: {
        duration: 0.25,
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
      mounted &&
     <>
       <div className={styles.main}>
         <div className={styles.description}>
           <p>
             Get started by editing&nbsp;
             <code className={styles.code}>src/app/page.js</code>
           </p>
           <div>
             <a
                 href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                 target="_blank"
                 rel="noopener noreferrer"
             >
               By{' '}
               <Image
                   src="/vercel.svg"
                   alt="Vercel Logo"
                   className={styles.vercelLogo}
                   width={100}
                   height={24}
                   priority
               />
             </a>
           </div>
         </div>

         <div className={styles.center}>
           <Image
               className={styles.logo}
               src="/next.svg"
               alt="Next.js Logo"
               width={180}
               height={37}
               priority
           />
         </div>

         <div className={styles.grid}>
           <a
               href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
               className={styles.card}
               target="_blank"
               rel="noopener noreferrer"
           >
             <h2>
               Docs <span>-&gt;</span>
             </h2>
             <p>Find in-depth information about Next.js features and API.</p>
           </a>

           <a
               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
               className={styles.card}
               target="_blank"
               rel="noopener noreferrer"
           >
             <h2>
               Learn <span>-&gt;</span>
             </h2>
             <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
           </a>

           <a
               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
               className={styles.card}
               target="_blank"
               rel="noopener noreferrer"
           >
             <h2>
               Templates <span>-&gt;</span>
             </h2>
             <p>Explore the Next.js 13 playground.</p>
           </a>

           <a
               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
               className={styles.card}
               target="_blank"
               rel="noopener noreferrer"
           >
             <h2>
               Deploy <span>-&gt;</span>
             </h2>
             <p>
               Instantly deploy your Next.js site to a shareable URL with Vercel.
             </p>
           </a>
         </div>
       </div>
       <main onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
         <motion.div
             className="absolute bg-purple-60 h-0.5 left-0 rounded-sm -top-[0.5px]"
             variants={variants}
             animate={isHovered ? 'hover' : 'initial'}
         />
         <div>
           {avatarList.map((avatar) => (
               <img
                   key={avatar.name}
                   src={avatar.url}
                   alt={avatar.name}
                   decoding="async"
                   height="50"
                   width="50"
               />
           ))}
         </div>
       </main>
     </>
  )
}
