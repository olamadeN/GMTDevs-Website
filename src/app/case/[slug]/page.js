import { slugify } from '../../../../public/data/slugify';
import fs from 'fs/promises';
import path from 'path';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

// Generates all possible static paths for [slug] at build time
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'case.json');
  const fileData = await fs.readFile(filePath, 'utf-8');
  const projects = JSON.parse(fileData);

  return projects.map(project => ({
    slug: slugify(project.title),
  }));
}

export default async function ProjectDetails({ params }) {
  const filePath = path.join(process.cwd(), 'public', 'data', 'case.json');
  const fileData = await fs.readFile(filePath, 'utf-8');
  const projects = JSON.parse(fileData);
  const parameters = await params;
  const project = projects.find(p => slugify(p.title) === parameters.slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div >
      <h1 className={styles.caseBannerTitle}>{project.title}</h1>
      <Image
        className={styles.caseBannerImg}
        src={project.image}
        alt={project.title}
        width={500}
        height={500}
      />

      <section className='container identitySection'>
        <h2 className='aboutTitle'>About the project</h2>
        <div className='identityTxt'>
          <div>
            <h3 className='aboutSubTitle'>CHALLENGE</h3>
            <p className='aboutMainTxt'>{project.challenge}</p>
          </div>
          <div>
            <h3 className='aboutSubTitle'>SOLUTION</h3>
            <p className='aboutMainTxt'>{project.solution}</p>
          </div>
        </div>
      </section>

      <section style={{ padding: 20 }}>
        <Image
          className={styles.showcaseImg}
          src={project.image2}
          height={500}
          width={500}
          alt='product sample'
        />
        <div className={`container ${styles.resultsPack}`}>
          <h3 className='aboutTitle'>The Results</h3>
          <br />
          <div className={styles.factsStats}>
            <div className={styles.statsPack}>
              <p>80%</p>
              <p>Streamlined Asset Design Delivery</p>
            </div>
            <div className={styles.statsPack}>
              <p>₦ 12M</p>
              <p>Streamlined Asset Design Delivery</p>
            </div>
            <div className={styles.statsPack}>
              <p>65+</p>
              <p>Increased customer base monthly</p>
            </div>
          </div>
          <br /><br />
          <div className='btn'>
            <div><Link href={project.url} target='_blank' >Visit Project</Link></div>
            <div><Link href="/contact">Get Started</Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
