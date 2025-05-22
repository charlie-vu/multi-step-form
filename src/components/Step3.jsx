import { displayPrice } from "@/utils/helper";
import { useEffect, useRef, useState } from "react";
import data from "@/data";

const optionList = data.addonList;

export default function Step3(props) {
    const {
        className = '',
        savedInfo,
        onChange,
    } = props;

    const [selectedList, setSelectedList] = useState([]);

    const handleSelect = (value) => {
        if (!selectedList.includes(value)) {
            setSelectedList((prev) => [...prev, value])
        } else {
            setSelectedList((prev) => prev.filter((item) => item !== value))
        }
    }

    const mounted = useRef(false);
    useEffect(() => {
        if (mounted.current) {
            onChange({ addonList: selectedList });
        } else {
            mounted.current = true;
        }
    }, [selectedList])

    useEffect(() => {
        savedInfo && savedInfo.addonList && setSelectedList(savedInfo.addonList)
    }, [savedInfo])

    return (
        <>
            <div className={`step-3 ${className}`}>
                <div className="d-stack gap-3">
                    {
                        optionList.map((item, i) =>
                            <div key={item.value} className={`card p-3 p-lg-4 option ${selectedList.includes(item.value) ? 'active' : ''}`} onClick={() => { handleSelect(item.value) }}>
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={item.value} checked={selectedList.includes(item.value)} readOnly></input>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="fw-semibold">{item.text}</p>
                                        <p className="text-muted small">{item.desc}</p>
                                    </div>
                                    <p className="text-primary fw-semibold">{displayPrice(item, savedInfo?.isYearly ?? true)}</p>
                                </div>

                            </div>

                        )
                    }
                </div>
            </div>
        </>
    )
}