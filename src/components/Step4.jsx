import Link from "next/link";

export default function Step4(props) {
    const {
        className = "",
    } = props;
    return (
        <>
            <div className={`step-4 ${className}`}>
                <div className="card bg-secondary p-4">
                    <div className="d-flex align-items-center gap-3 justify-content-between">
                        <div>
                            <p className="fw-semibold">Arcade (Yearly)</p>
                            <Link href="?step=2" className="text-muted text-decoration-underline">Change</Link>
                        </div>
                        <p className="fw-bold">$90/yr</p>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center gap-3 justify-content-between">
                        <p className="text-muted">Online Service</p>
                        <p className="text-muted">+$10/yr</p>
                    </div>
                </div>
                <div className="card bg-transparent border-0 p-4">
                    <div className="d-flex align-items-center gap-3 justify-content-between">
                        <p className="text-muted">Total (per year)</p>
                        <p className="fs-4 fw-bold text-primary">$120/yr</p>
                    </div>
                </div>
            </div>
        </>
    )
}