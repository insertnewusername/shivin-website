import { Link } from 'wouter'
import './App.css'


function Home() {
  return (
    <>
        <header>
            <p>Applications close in # days!</p>
            <h1>Launch your creative skills.</h1>
            <p>A creativity focused rocketry competition for high school students in NSW, Australia</p>
            <Link href="/register">
                <button>Register Now</button>
            </Link>
        </header>
    </>
  )
}

export default Home
