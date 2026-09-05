import { useLocation } from 'wouter'
import './App.css'


function Home() {
  return (
    <>
        <header className='hero-container'>
            <p>Applications Close Soon!</p>

            <h1 className='hero-heading'>Now this is <span className='hero-marker-text'>Rocket Science</span></h1>
            <p className='hero-subheading'>A crafty rocketry competition for <br/> daring Australian high school students</p>

            <form>
              <div className='hero-form-container'>
                <input type="email" placeholder="griffin@example.com" className='text-input'></input>
                <input type="submit" value="Register" className='hero-button'></input>
              </div>
            </form>
        </header>
    </>
  )
}

export default Home
