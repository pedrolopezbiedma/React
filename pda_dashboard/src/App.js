import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

import ProfileCard from "./components/ProfileCard";

const App = () => {
    return (
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">Personal Digital Assitants</p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title = 'Alexa' handle='@alexa' image={AlexaImage} description='Alexa was created by Amazon & helps you with your life.' />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title = 'Cortana' handle='@cortana' image={CortanaImage} description='Cortana was created by Microsoft & who knows what it does.'/>
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title = 'Siri' handle='@siri' image={SiriImage} description='Siri was created by Apple & is being phased out.'/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;