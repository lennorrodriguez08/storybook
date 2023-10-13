import { NavLink, useNavigate } from "react-router-dom"
import { app } from "../../firebase.config"
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import FormContainer from "../components/FormContainer"
import Button from "../components/Button"
import { toast } from "react-toastify"

const SignIn = () => {

    const navigate = useNavigate()

    /*
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
    */

    const signInForm = document.querySelector('#signin-form')

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
    })

    const signInViaGoogle = async () => {

        const provider = new GoogleAuthProvider()
        const auth = getAuth(app)

        try {

            const data = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(data)
            const token = credential.accessToken
            const user = data.user
            console.log(user)
            toast.success('Sign in successful')
            
            setTimeout(() => {
                navigate('/stories')
            }, 5000)

        }   catch(error) {
            toast.error('Sign in failed')
            console.log('Google sign in failed ...', error)
        }
    }

    return (
        <div className="font-roboto-condensed">
        <FormContainer formType='Sign In'>
            {/* Props: formType - Displays as form title or header */}
            <div>
                <form id="signin-form">
                    <div className="pt-4 pb-2">
                        <label htmlFor="signin-email" className="block">Email Address</label>
                        <input type="email" id="signin-email" className="block border-[1px] border-[#ccc] rounded-md focus:outline-none w-full px-2 py-1" />
                    </div>
                    <div className="pt-4 pb-2">
                        <label htmlFor="signin-password" className="block">Password</label>
                        <input type="password" id="signin-password" className="block border-[1px] border-[#ccc] rounded-md focus:outline-none w-full px-2 py-1" />
                    </div>
                    <div>
                        <div className="py-3">
                            <NavLink className='block text-sm hover:text-sky-400' onClick={signInViaGoogle}>Login using Google account</NavLink>
                            <NavLink to='/' className='block text-sm hover:text-sky-400'>Create an account</NavLink>
                            <NavLink to='/' className='block text-sm hover:text-sky-400'>Forgot password</NavLink>
                        </div>
                    </div>
                    <div className="">
                        <Button buttonText='Submit' />
                    </div>
                </form>
            </div>
        </FormContainer>
        </div>
    )

}

export default SignIn