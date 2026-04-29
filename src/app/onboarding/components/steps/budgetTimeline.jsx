import styles from '@/app/onboarding/onboarding.module.css'
const Step3 = ({ data, update, next, back }) => {

  const isValid = data.budget && data.timeline;

  return (
    <div>
      <h2 className="aboutTitle" style={{fontFamily:`"Inter", sans-serif`}}>Budget & Timeline</h2>
      <p>Please fill all required fields before continuing</p>
      <div className={styles.formPack}>
        <select
          value={data.budget}
          onChange={(e) => update({ budget: e.target.value })}
          className={styles.select}
        >
          <option value="">Select Budget</option>
          <option>₦100k - ₦300k</option>
          <option>₦300k - ₦1m</option>
          <option>₦1m+</option>
        </select>

        <select
          value={data.timeline}
          onChange={(e) => update({ timeline: e.target.value })}
          className={styles.select}
        >
          <option value="">Select Timeline</option>
          <option>ASAP</option>
          <option>2–4 weeks</option>
          <option>1–3 months</option>
          <option>3–6 months</option>
          <option>6+ months</option>
        </select>
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

export default Step3;