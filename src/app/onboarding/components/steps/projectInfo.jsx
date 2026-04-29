import styles from '@/app/onboarding/onboarding.module.css'
const Step2 = ({ data, update, next, back }) => {

  const isValid = data.businessName && data.projectDescription;

  return (
    <div>
      <h2 className="aboutTitle" style={{fontFamily:`"Inter", sans-serif`}}>Project Information</h2>
        <p>Please fill all required fields before continuing</p>
       <div className={styles.formPack}>
        <input
          placeholder="Business Name (Required)"
          value={data.businessName}
          onChange={(e) => update({ businessName: e.target.value })}
          className={styles.input}
          type='text'
        />

        <textarea
          placeholder="Project description (Required)"
          value={data.projectDescription}
          onChange={(e) => update({ projectDescription: e.target.value })}
          className={styles.input}
          type="text"
        />

        <input
          placeholder="Website (optional)"
          value={data.website}
          onChange={(e) => update({ website: e.target.value })}
          className={styles.input}
          type='text'
        />
      </div>
      <br />

      <div className={`${styles. btnPack} btn`}>      
        <div onClick={back}>Back</div>
        <div
          onClick={() => {
            if (!isValid) return;
            next();
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default Step2;