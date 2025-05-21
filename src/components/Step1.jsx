export default function Step1() {
    return (
        <>
            <div>
                <h2 className="fw-bold text-primary">Personal info</h2>
                <p className="mt-3 text-muted opacity-75">Please provide your name, email address, and phone number.</p>
                <div className="mt-4 d-stack gap-3">

                    <div className="text-primary">
                        <div className="d-flex gap-2 justify-content-between small">
                            <p>Name</p>
                            <p className="text-danger fw-semibold">This field is required</p>
                        </div>
                        <input type="text" className="form-control mt-1" required />
                    </div>
                </div>
            </div>
        </>
    )
}