import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { app } from "../../firebase.config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import FormContainer from "../components/FormContainer"
import Button from "../components/Button"
import { toast } from "react-toastify"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"

const SignUp = () => {

    const auth = getAuth(app)

    const navigate = useNavigate()
    const [isRegistered, setIsRegistered] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false)
    const [signUpFormData, setSignUpFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { email, password, confirmPassword } = signUpFormData

    const inputOnChange = e => {
        setSignUpFormData((prevState) => ({
            ...prevState, 
            [e.target.id] : e.target.value,  
        }))
    }

    // Firebase auth to sign up the new user
    const signUpNewUser = async () => {

        try {
            createUserWithEmailAndPassword(auth, email, password)
        }   catch(error) {
            console.log('Signing up error: ' + error)
        }

    }

    const signUpFormOnSubmit = e => {
        e.preventDefault()

        const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (email === '' || !email.match(emailRegEx)) {
            toast.error('Email is invalid')
        }   else {
            setIsEmailValid(true)
        }

        if (password.length < 6) {
            toast.error('Password length must be 6 characters minimum')
        }   else {
            setIsPasswordValid(true)
        }

        if (password !== confirmPassword) {
            toast.error('Confirm password doesn\'t match')
        }   else {
           setIsConfirmPasswordValid(true)
        }

        if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            setIsRegistered(true)
            setSignUpFormData((prevState) => ({
                ...prevState, 
                email: '',
                password: '',
                confirmPassword: ''  
            }))

            signUpNewUser()
            
            toast.success('Account registration successful! Redirecting to sign in page')

            setTimeout(() => {
                navigate('/sign-in')
            }, 5000)
        }

    }
    

    return (
        <div className="font-roboto-condensed">
        <FormContainer formType='Create an account'>
            {/* Props: formType - Displays as form title or header */}
            <div>
                <form id="signup-form" onSubmit={signUpFormOnSubmit}>
                    <div className="pt-4 pb-2">
                        <label htmlFor="email" className="block">Email Address</label>
                        <input type="email" id="email" className="block border-[1px] border-[#ccc] rounded-md focus:outline-none w-full px-2 py-1" value={email} onChange={inputOnChange} />
                    </div>
                    <div className="pt-4 pb-2">
                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" id="password" className="block border-[1px] border-[#ccc] rounded-md focus:outline-none w-full px-2 py-1" value={password} onChange={inputOnChange} />
                    </div>
                    <div className="pt-4 pb-2">
                        <label htmlFor="confirmPassword" className="block">Confirm Password</label>
                        <input type="password" id="confirmPassword" className="block border-[1px] border-[#ccc] rounded-md focus:outline-none w-full px-2 py-1" value={confirmPassword} onChange={inputOnChange} />
                    </div>
                    <div className="pt-4 pb-4 flex gap-x-2">
                        <FontAwesomeIcon className="text-md" icon={faCircleInfo} /> 
                        <p className="text-sm">{ !isRegistered ? 'If you have an active Google account. We highly recommend that you sign in via Google. It\'s most convenient way so you can skip the account verification process.' : 'Please verify your email address for you to successfully sign in.' }</p>
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

export default SignUp