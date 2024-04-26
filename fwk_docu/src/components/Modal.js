const Modal = ({ children, closeModal, actionBar }) => {
    return (
        <div>
            <div className="absolute inset-0 bg-gray-300 opacity-80" onClick={closeModal}></div>
            <div className="absolute inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    { children }
                    <div className="flex justify-end">
                        { actionBar }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal