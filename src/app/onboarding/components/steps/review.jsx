import styles from '@/app/onboarding/onboarding.module.css'
export default function Step6({ data, submit, back }) {
  return (
    <div>
      <h2 className="aboutTitle" style={{fontFamily:`"Inter", sans-serif`}}>Review</h2>
        <p>Please fill all required fields before continuing</p>
      
      <div className={styles.detailPack}>
    
        <li className={styles.detailItems}>
          <p style={{color:"#636363"}}>Name</p>
          <p>{data?.name}</p>
        </li>
        <li className={styles.detailItems}>
          <p style={{color:"#636363"}}>Email</p>
          <p>{data?.email}</p>
        </li>
        <li className={styles.detailItems}>
          <p style={{color:"#636363"}}>Phone</p>
          <p>{data?.phone}</p>
        </li>
        <li className={styles.detailItems}>
          <p style={{color:"#636363"}}>Business Name</p>
          <p>{data?.businessName}</p>
        </li>
        <li className={styles.detailItems}>
          <p style={{color:"#636363"}}>Phone</p>
          <p>{data?.phone}</p>
        </li>
        <li className={styles.detailItems}>
          <p style={{color:"#636363"}}> Project Description</p>
          <p>{data?.projectDescription}</p>
        </li>
        <li className={styles.detailItems}>
          <p style={{color:"#636363"}}>Website</p>
          <p>{data?.website}</p>
        </li>
        <li className={styles.detailItems}>
          <p style={{color:"#636363"}}>Budget</p>
          <p>{data?.budget}</p>
        </li>
        <li className={styles.detailItems}>
          <p style={{color:"#636363"}}>Timeline</p>
          <p>{data?.timeline}</p>
        </li>
        <li className={styles.detailItems}>
          <p style={{color:"#636363"}}>features</p>
          <div>
            {data?.features.map((fet)=>(
              <span>{fet}, </span>
            ))}
          </div>  
        </li>
      </div>

      <div className={`${styles. btnPack} btn`}>      
        <div onClick={back}>Back</div>
        <div
          onClick={() => {
            submit();
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
}