import styles from '@/app/onboarding/onboarding.module.css'
const Step1 = ({ data, update, next }) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/;
  const isValid = data.name.trim().length > 2 && emailRegex.test(data.email) && phoneRegex.test(data.phone);
  
  return (
    <div>
      <h2 className="aboutTitle" style={{fontFamily:`"Inter", sans-serif`}}>Basic Information</h2>
      <p>Please fill all required fields before continuing</p>
      <div className={styles.formPack}>
        <input className={styles.input} placeholder="Full Name (Required)" value={data.name} type='text' onChange={(e) => update({ name: e.target.value })} required />
        <input className={styles.input} placeholder="Email (Required)" value={data.email} type='email' onChange={(e) => update({ email: e.target.value })} required />
        <input className={styles.input} placeholder="Phone / WhatsApp (Required)" value={data.phone} autoComplete="tel" type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(e) => update({ phone: e.target.value })} required />
      </div>
      <br />

      {!emailRegex.test(data.email) && data.email && (
        <p style={{ color: "red" }}>Enter a valid email address</p>
      )}
      {!emailRegex.test(data.phone) && data.phone && (
        <p style={{ color: "red" }}>Enter a valid email address</p>
      )}
  <br />
      <div className={`${styles. btnPack} btn`}>      
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
export default Step1;