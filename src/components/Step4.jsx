import data from "@/data";
import { displayPrice } from "@/utils/helper";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Step4(props) {
    const {
        className = "",
        savedInfo,
    } = props;

    const [selectedPlan, setSelectedPlan] = useState(null)
    const [selectedAddonList, setSelectedAddonList] = useState([])
    const [total, setTotal] = useState({
        monthly: 0,
        yearly: 0,
    })

    useEffect(() => {
        if (savedInfo) {
            setSelectedPlan(data.planList.find((item) => item.value === savedInfo.plan))
            setSelectedAddonList(data.addonList.filter((item) => savedInfo.addonList.includes(item.value)))
        }
    }, [savedInfo])

    useEffect(() => {
        // console.log(selectedPlan)
        // === Calculate Total
        if (selectedPlan && selectedAddonList) setTotal({
            monthly: selectedPlan.monthly + selectedAddonList.reduce((sum, item) => sum + item.monthly, 0),
            yearly: selectedPlan.yearly + selectedAddonList.reduce((sum, item) => sum + item.yearly, 0),
        })
    }, [selectedPlan, selectedAddonList])

    if (!selectedPlan) return null;

    return (
        <>
            <div className={`step-4 ${className}`}>
                <div className="card bg-secondary p-4">
                    <div className="d-flex align-items-center gap-3 justify-content-between">
                        <div>
                            <p className="fw-semibold">{selectedPlan?.title} ({!savedInfo?.isYearly ? 'Monthly' : 'Yearly'})</p>
                            <Link href="?step=2" className="text-muted text-decoration-underline">Change</Link>
                        </div>
                        <p className="fw-bold">{displayPrice(selectedPlan, savedInfo?.isYearly)}</p>
                    </div>

                    {
                        !!selectedAddonList.length &&
                        <>
                            <hr className="my-4" />
                            <div className="d-stack gap-2">
                                {
                                    selectedAddonList.map((item) =>
                                        <div key={item.value} className="d-flex align-items-center gap-3 justify-content-between">
                                            <p className="text-muted">{item.text}</p>
                                            <p className="text-muted">+{displayPrice(item, savedInfo?.isYearly)}</p>
                                        </div>
                                    )
                                }

                            </div>
                        </>
                    }


                </div>
                <div className="card bg-transparent border-0 p-4">
                    <div className="d-flex align-items-center gap-3 justify-content-between">
                        <p className="text-muted">Total (per year)</p>
                        <p className="fs-4 fw-bold text-primary">{displayPrice(total, savedInfo?.isYearly)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}