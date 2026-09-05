import { Link } from 'wouter'
import './App.css'


function Home() {
  return (
    <>
        <header className='hero-container'>
            <p>Applications Close Soon!</p>

            <h1 className='hero-heading'>Now this is <span className='hero-marker-text'>Rocket Science</span></h1>
            <p className='hero-subheading'>A crafty rocketry competition for <br/> daring Australian high school students</p>

            <Link href="/register">
                <button className='hero-button'>Register Now</button>
            </Link>
        </header>
    </>
  )
}

export default Home
