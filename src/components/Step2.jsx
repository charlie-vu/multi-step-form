import { useState } from "react";
import { motion } from "motion/react";

const optionList = [
    {
        value: 'arc',
        title: 'Arcade',
        monthly: 9,
        yearly: 90,
        yearBenefit: '2 months free',
        icon: 'assets/images/icon-arcade.svg',
    },
    {
        value: 'adv',
        title: 'Advanced',
        monthly: 12,
        yearly: 120,
        yearBenefit: '2 months free',
        icon: 'assets/images/icon-advanced.svg',
    },
    {
        value: 'pro',
        title: 'Pro',
        monthly: 15,
        yearly: 150,
        yearBenefit: '2 months free',
        icon: 'assets/images/icon-pro.svg',
    },
];

export default function Step2(props) {
    const {
        className = '',
    } = props;

    const [selected, setSelected] = useState('');
    const [isYearly, setIsYearly] = useState(true);

    const displayPrice = (item, isYearly) => {
        if (!item) return "--";
        if (isYearly) return `$${parseFloat(item.yearly).toLocaleString('en-US')}/yr` || "--";
        if (!isYearly) return `$${parseFloat(item.monthly).toLocaleString('en-US')}/mo` || "--";
    }

    return (
        <>
            <div className={`${className}`}>


                <div className={`row row-cols-1 row-cols-lg-3 g-2 g-lg-4`}>
                    {
                        optionList.map((item, i) =>
                            <div key={item.title} className="col">
                                <motion.div whileTap={{ scale: 0.75 }} transition={{ type: 'spring', duration: 0.1 }} className={`option card rounded-3 p-4 ${selected === item.value && 'active'}`} onClick={() => { setSelected(item.value) }}>
                                    <img src={item.icon} alt={item.value} width={50} height={50} />
                                    <div className="mt-3 pt-5 text-primary">
                                        <p className="fw-semibold fs-5">{item.title}</p>
                                        <p className="text-muted opacity-75">{displayPrice(item, isYearly)}</p>
                                        {isYearly && <p className="small">2 months free</p>}
                                    </div>

                                </motion.div>
                            </div>
                        )
                    }
                </div>
                <div className="bg-secondary mt-4 p-3 rounded-3">
                    <div className="d-flex gap-4 fw-semibold align-items-center justify-content-center">
                        <p className={`cursor-pointer ${!isYearly ? 'text-primary' : 'text-muted opacity-75'}`} onClick={() => { setIsYearly(false) }}>Monthly</p>
                        <div className="form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" checked={isYearly} onChange={() => { setIsYearly((prev) => !prev) }}></input>
                        </div>
                        <p className={`cursor-pointer ${isYearly ? 'text-primary' : 'text-muted opacity-75'}`} onClick={() => { setIsYearly(true) }}>Yearly</p>
                    </div>

                </div>
            </div>
        </>
    )
}