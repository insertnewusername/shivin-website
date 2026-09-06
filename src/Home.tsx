import './App.css'


function Home() {
  return (
    <>
        <header className='hero-container'>
            <div className="hero-text-container">
                <p className='hero-badge'>Applications Close Soon!</p>

              <h1 className='hero-heading'>Now this is <span className='hero-marker-text'>Rocket Science</span></h1>
              <p className='hero-subheading'>A crafty rocketry competition for <br/> daring Australian high school students</p>

              <form>
                <div className='hero-form-container'>
                  <input type="email" placeholder="griffin@example.com" className='text-input'></input>
                  <input type="submit" value="Register" className='hero-button'></input>
                </div>
              </form>
            </div>
            <div className='hero-rocket-container'>
              <video autoPlay loop width="607" height="1080">
                <source src="/public/rocket-anim.webm" type="video/webm" />
                Your browser does not support this
              </video>
            </div>
            
        </header>
    </>
  )
}

export default Home
