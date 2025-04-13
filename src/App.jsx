import twitter from './assets/Twitter.png'
import google from './assets/googleIcon.png'
import iphone from './assets/AppleLog.png'
import Button from './Button'
import Input from './input'
import NextButton from './NextButton'
import ForgrtPassword from './forgetButton'

export default function App() {
  return (
    <div className='w-[400px] h-[500px] bg-stone-200 shadow-2xl ml-[30%] mt-[10%] rounded-md p-2 block'>
      <img src={twitter} alt="Twitter Logo" className='w-10 ml-40 mt-5' />
      <h1 className='text-2xl font-bold ml-20'>Sign in to Twitter</h1>
      <Button image={google} children={"Sign in with Google"} />
      <Button image={iphone} children={"Sign in with Apple"} />
      <hr className='my-4 w-76 mx-10' />
      <Input text={"Phone email or UserName"} />
      <NextButton ButtonName={"Next"} />
      <ForgrtPassword buttonText={"Forgot Password"} />
      <p className='font-bold mt-6 ml-16'>Don't have an account <a href="/signup" className="text-blue-500 font-bold">Sign up</a></p>
    </div>
  )
}