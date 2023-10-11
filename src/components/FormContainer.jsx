const FormContainer = ({ children, login }) => {

    return (
        <div className="max-w-lg mx-auto shadow-md p-5">
            { login }
        </div>
    )

}

export default FormContainer