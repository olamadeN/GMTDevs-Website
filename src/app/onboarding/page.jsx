import OnboardingForm from "./components/onboardingForm";
import styles from '@/app/onboarding/onboarding.module.css'
const OnboardingPage= () => {
    return ( 
        <div className={styles.onboardingPage}>
            <div className="pageHeader">
                <h1>Project Onboarding</h1>
                <p className="aboutMainTxt">Tell us about your project so we can guide you properly.</p>
            </div>

            <OnboardingForm />
        </div>

     );
}
 
export default OnboardingPage;
