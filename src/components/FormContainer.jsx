const FormContainer = ({ children, formType }) => {

    return (
        <div className="max-w-sm mx-auto shadow-md mt-20 p-5 rounded-md border-[1px] border-[#eeeeee]">
            <div className="flex items-center gap-x-1.5">
                <div className="w-1.5 h-5 bg-red-500"></div>
                <div className="font-roboto-slab">
                    { formType }
                </div>
            </div>
            <div>
                { children }
            </div>
        </div>
    )

}

export default FormContainer