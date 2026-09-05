import { Link } from 'wouter'
import './App.css'


function Confirmation() {
  return (
    <>
        <h1>Thanks for registering!</h1>
        <Link href="/">
            <button>Return Home</button>
        </Link>
    </>
  )
}

export default Confirmation