import styles from '@/app/onboarding/onboarding.module.css'
const featuresList = [
  "User Accounts",
  "Vendor Marketplace",
  "Payments",
  "Admin Dashboard",
  "Booking System",
  "Notifications",
];

const Step4 = ({ data, update, next, back }) => {

  const isValid = data.features.length > 0;

  const toggle = (feature) => {
    const exists = data.features.includes(feature);

    const updated = exists
      ? data.features.filter((f) => f !== feature)
      : [...data.features, feature];

    update({ features: updated });
  };

  return (
    <div>
      <h2 className="aboutTitle" style={{fontFamily:`"Inter", sans-serif`}}>Features Needed</h2>
      <p>Please fill all required fields before continuing</p>
       <div className={styles.formPack}>
        {featuresList.map((f) => (
          <label key={f}>
            <input
              type="checkbox"
              checked={data.features.includes(f)}
              onChange={() => toggle(f)}
              /* className={styles.input} */
            />
            {f}
          </label>
        ))}
      </div>

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

export default Step4;