export default function SidebarDesktop(props) {
    const {
        stepList = [],
        active = 1,
    } = props;

    return (
        <>
            <div className="sidebar-desktop d-stack gap-4 px-32px py-5 bg-secondary rounded-3 overflow-hidden">
                {
                    stepList.length && stepList.map((item, i) =>
                        <div key={`step-${i}`} className="d-flex gap-3 align-items-center">
                            <div className={`step-item rounded-circle ratio ratio-1x1 ${active === item.no ? 'active' : ''}`} style={{ width: 42 }}>
                                <p className="w-auto h-auto start-50 top-50 translate-middle fw-semibold">{item.no}</p>
                            </div>
                            <div className="text-uppercase text-white">
                                <p className="text-secondary small">Step {item.no}</p>
                                <p className="fw-bold">{item.name}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}