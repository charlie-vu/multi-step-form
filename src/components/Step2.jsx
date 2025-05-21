import { useState } from "react";

export default function Step2(props) {
    const {
        className = '',


    } = props;

    const [selected, setSelected] = useState(1);
    const [isYearly, setIsYearly] = useState(true);

    return (
        <>
            <div className={`${className}`}>


                <div className={`row row-cols-1 row-cols-lg-3 g-2 g-lg-4`}>
                    {
                        [...Array(3)].map((item, i) =>
                            <div key={i} className="col">
                                <div className={`option card rounded-3 p-4 ${selected === i + 1 && 'active'}`} onClick={() => { setSelected(i + 1) }}>
                                    <img src="assets/images/icon-arcade.svg" alt="arcade" width={50} height={50} />
                                    <div className="mt-3 pt-5 text-primary">
                                        <p className="fw-semibold fs-5">Arcade</p>
                                        <p className="text-muted opacity-75">$90/yr</p>
                                        <p className="small">2 months free</p>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="bg-secondary mt-4 p-3 rounded-3">
                    <div className="d-flex gap-4 fw-semibold">
                        <p className={`text-primary`}>Monthly</p>
                        <div className="form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" checked={isYearly} onChange={() => { setIsYearly((prev) => !prev) }}></input>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}