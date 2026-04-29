import { style } from "framer-motion/client";
import styles from '@/app/onboarding/onboarding.module.css'
const Step5 = ({ data, update, next, back }) => {

  const isValid = data.understandsProcess === true;

  return (
    <div>
      <h2 className="aboutTitle" style={{fontFamily:`"Inter", sans-serif`}}>Project Understanding</h2>
   
      <br />
      <p className="aboutMainTxt">
        We will explain hosting, support, and handover options during onboarding.
      </p>

       <div className={styles.formPack}>
        <label>
          <input className={styles.input} type="checkbox" checked={data.understandsProcess}
            onChange={(e) =>
              update({ understandsProcess: e.target.checked })
            }
          />
          I understand this will be discussed before final agreement
        </label>
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

export default Step5;