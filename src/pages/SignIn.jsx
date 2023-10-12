import { NavLink } from "react-router-dom"
import FormContainer from "../components/FormContainer"
import Button from "../components/Button"

const SignIn = () => {

    const signInForm = document.querySelector('#signin-form')

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
    })

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
                            <NavLink to='/' className='block text-sm hover:text-sky-400'>Login using Google account</NavLink>
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