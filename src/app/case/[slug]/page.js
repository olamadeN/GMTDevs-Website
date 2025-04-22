import { slugify } from '../../../../public/data/slugify';
import fs from 'fs/promises';
import path from 'path';
import styles from './page.module.css';
import Image from 'next/image';
export default async function ProjectDetails({ params }) {
  const filePath = path.join(process.cwd(), 'public', 'data', 'case.json');
  const fileData = await fs.readFile(filePath, 'utf-8');
  const projects = JSON.parse(fileData);
  const parameters = await params
  const project = projects.find(p => slugify(p.title) === parameters.slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1 className={styles.caseBannerTitle}>{project.title}</h1>
      <img className={styles.caseBannerImg} src={project.image} alt={project.title} />

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
      <section>
        <Image className={styles.showcaseImg} src='/images/showcase/show1.jpg' height={500} width={500} alt='product sample' />
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
            <div>Visit Project</div>
            <div>Get Started</div>
          </div>
        </div>
      </section>      
    </div>
  );
}
