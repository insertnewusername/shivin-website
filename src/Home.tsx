import './App.css'


function Home() {
  return (
    <>
      <div className="home-page">
        <header className='hero-container'>
            <div className='main-hero-container'>
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
                <video
                  src="/shivin-website/rocket-anim.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
        </header>
        <div className='info-container top-container'>
          <h1 className='info-heading'>What is the NSWASRC?</h1>
          <p className='info-paragraph'>The NSW all schools Rocketry Competition is a competition hosted by the Penrith Selective High Rocketry Club that allows students from all high schools to safely participate in rocketry in a competitive and safe environment. The competition is designed to foster innovators and future rocket scientists and provide them with the opportunity to excel in a professional space. </p>
        </div>
        <div className='info-container middle-container'>
          <h1 className='info-heading'>About Us</h1>
          <p className='info-paragraph'>We are a team of passionate high school students with a shared enthusiasm for rocketry, engineering, and space exploration. Our mission is to create opportunities for students to explore the exciting world of rocketry, develop practical STEM skills, and put their knowledge to the test through hands-on projects and competitions. By fostering creativity, collaboration, and innovation, we aim to inspire the next generation of engineers, scientists, and space explorers.</p>
        </div>
        <div className='info-container bottom-container'>
          <h1 className='info-heading'>Sponsors</h1>
          <a><img src="/shivin-website/penrith_logo.png"/></a>
        </div>
      </div>
    </>
  )
}

export default Home
