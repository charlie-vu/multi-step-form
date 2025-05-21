import { useRouter } from "next/navigation";

export default function BottomNav(props) {
    const {
        step,
        isValid,
    } = props;

    const router = useRouter();

    return (
        <div className="d-flex d-flex justify-content-between gap-2 flex-wrap">
            {step > 1 &&
                <button className="btn-back btn btn-link text-decoration-none px-0" onClick={() => { router.push(`?step=${step - 1}`) }}>Go Back</button>
            }
            <button className="btn btn-primary ms-auto" disabled={!isValid} onClick={() => { router.push(`?step=${step + 1}`) }}>Next Step</button>
        </div>
    )
}