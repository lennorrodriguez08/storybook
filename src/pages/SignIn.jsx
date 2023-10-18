import { NavLink, useNavigate } from "react-router-dom"
import { app } from "../../firebase.config"
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
import FormContainer from "../components/FormContainer"
import Button from "../components/Button"
import { toast } from "react-toastify"
import { useState } from "react"

const SignIn = () => {

    const navigate = useNavigate()
    const auth = getAuth(app)
    const [signInFormData, setSignInFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = signInFormData

    const inputOnChange = e => {
        setSignInFormData((prevState) => ({
            ...prevState,
            [e.target.id] : e.target.value
        }))
    }

    const onSubmitSignIn = e => {
        e.preventDefault()

        const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if ((email !== '' && email.match(emailRegEx)) && (password.length >= 6) && password !== '' ) {
            
            try {
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log(user)

                    if (!user.emailVerified) {
                        toast.error('Please finish the verification process. Kindly verify your email address first')
                    }   else {
                        navigate('/stories')
                    }

                })
            }   catch(error) {  
                console.log(error)
            }
        }   else {
            toast.error('Invalid email/password')
        }
    }

    const signInViaGoogle = async () => {

        const provider = new GoogleAuthProvider()

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
                <form id="signin-form" onSubmit={onSubmitSignIn}>
                    <div className="pt-4 pb-2">
                        <label htmlFor="email" className="block">Email Address</label>
                        <input type="email" id="email" className="block border-[1px] border-[#ccc] rounded-md focus:outline-none w-full px-2 py-1" value={email} onChange={inputOnChange} />
                    </div>
                    <div className="pt-4 pb-2">
                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" id="password" className="block border-[1px] border-[#ccc] rounded-md focus:outline-none w-full px-2 py-1" value={password} onChange={inputOnChange} />
                    </div>
                    <div>
                        <div className="py-3">
                            <NavLink className='block text-sm hover:text-sky-400' onClick={signInViaGoogle}>Login using Google account</NavLink>
                            <NavLink to='/sign-up' className='block text-sm hover:text-sky-400'>Create an account</NavLink>
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