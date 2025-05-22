import { displayPrice } from "@/utils/helper";
import { useState } from "react";

const optionList = [
    {
        value: 'online',
        text: 'Online service',
        desc: 'Access to multiplayer games',
        monthly: 1,
        yearly: 10,
    },
    {
        value: 'storage',
        text: 'Larger storage',
        desc: 'Access to multiplayer games',
        monthly: 2,
        yearly: 20,
    },
    {
        value: 'customize',
        text: 'Customizable profile',
        desc: 'Access to multiplayer games',
        monthly: 2,
        yearly: 20,
    },
]
export default function Step3(props) {
    const {
        className = '',
        savedInfo,
    } = props;

    const [selectedList, setSelectedList] = useState([]);
    // const isYearly = (sessionStorage && sessionStorage.getItem('info') && JSON.parse(sessionStorage.getItem('info'))?.isYearly) ?? true

    const handleSelect = (value) => {
        if (!selectedList.includes(value)) {
            setSelectedList((prev) => [...prev, value])
        } else {
            setSelectedList((prev) => prev.filter((item) => item !== value))
        }
    }

    return (
        <>
            <div className={`step-3 ${className}`}>
                <div className="d-stack gap-3">
                    {
                        optionList.map((item, i) =>
                            <div key={item.value} className={`card p-4 option ${selectedList.includes(item.value) ? 'active' : ''}`} onClick={() => { handleSelect(item.value) }}>
                                <div className="d-flex gap-4 align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={item.value} checked={selectedList.includes(item.value)} readOnly></input>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="fw-semibold">{item.text}</p>
                                        <p className="text-muted small">{item.desc}</p>
                                    </div>
                                    <p className="text-primary">{displayPrice(item, savedInfo?.isYearly ?? true)}</p>
                                </div>

                            </div>

                        )
                    }
                </div>
            </div>
        </>
    )
}