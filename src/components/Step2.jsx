import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { displayPrice } from "@/utils/helper";
import data from "@/data";

const optionList = data.planList;

export default function Step2(props) {
    const {
        className = '',
        savedInfo,
        onValidate,
        onChange,
    } = props;

    const [selected, setSelected] = useState('');
    const [isYearly, setIsYearly] = useState(true);

    useEffect(() => {
        savedInfo?.isYearly !== undefined && setIsYearly(savedInfo.isYearly)
        savedInfo?.plan && setSelected(savedInfo.plan)
    }, [savedInfo]) 

    const finalValidation = !!selected;
    useEffect(() => {
        onValidate(finalValidation)
        if (finalValidation) onChange({ plan: selected, isYearly: isYearly })
    }, [finalValidation, selected, isYearly])

    return (
        <>
            <div className={`step-2 ${className}`}>
                <div className={`row row-cols-1 row-cols-lg-3 g-3`}>
                    {
                        optionList.map((item, i) =>
                            <div key={item.title} className="col">
                                <motion.div whileTap={{ scale: 0.95 }} transition={{ type: 'spring', duration: 0.01 }} className={`option card rounded-3 px-4 py-3 py-lg-4 ${selected === item.value ? 'active' : ''}`} onClick={() => { setSelected(item.value) }}>
                                    <div className="d-flex align-items-center d-lg-block gap-4">
                                    <img src={item.icon} alt={item.value} width={50} height={50} />
                                    <div className="mt-lg-3 pt-lg-5">
                                        <p className="fw-semibold fs-lg-5">{item.title}</p>
                                        <p className="text-muted">{displayPrice(item, isYearly)}</p>
                                        {isYearly && <p className="small">{item.yearBenefit}</p>}
                                    </div>
                                    </div>
                                </motion.div>
                            </div>
                        )
                    }
                </div>
                <div className="bg-secondary mt-4 p-3 rounded-3">
                    <div className="d-flex gap-4 fw-semibold align-items-center justify-content-center">
                        <p className={`cursor-pointer ${isYearly ? 'text-muted' : ''}`} onClick={() => { setIsYearly(false) }}>Monthly</p>
                        <div className="form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" checked={isYearly} onChange={() => { setIsYearly((prev) => !prev) }}></input>
                        </div>
                        <p className={`cursor-pointer ${!isYearly ? 'text-muted' : ''}`} onClick={() => { setIsYearly(true) }}>Yearly</p>
                    </div>

                </div>
            </div>
        </>
    )
}