"use client"
import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { slugify } from '../../../public/data/slugify';
import { motion } from 'framer-motion';

const CaseStudy = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/data/case.json')
          .then(res => res.json())
          .then(data => setProjects(data))
          .catch(err => console.error('Failed to load data:', err));
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return(
        <>
            <motion.header className='pageHeader' initial="hidden" animate="visible" variants={fadeUp}>                
                <h1> Transforming Challenges into Success </h1>                            
            </motion.header>
            <section className={`container ${styles.caseSection}`}>
                {projects.map((project, index) => (
                    <Link key={index} href={`/case/${slugify(project.title)}`}>
                        <div key={index} className={styles.caseCard}>
                            <Image src={project.image} width={500} height={500} alt='caseStudy'/>
                            <div className={styles.caseCardTxt}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        </div> 
                    </Link>          
                ))}
            </section> 
        </> 
    )
};

export default CaseStudy;