const stepList = [
    {
        no: 1,
        name: 'your info',
    },
    {
        no: 2,
        name: 'select plan',
    },
    {
        no: 3,
        name: 'add-ons',
    },
    {
        no: 4,
        name: 'summary',
    },
]

export default function SidebarDesktop(props) {
    const {
        active = 1,
    } = props;
    return (
        <>
            <div className="sidebar-desktop d-stack gap-4 px-32px py-5 bg-secondary rounded-3 overflow-hidden">
                {
                    stepList.map((item, i) =>
                        <div key={`step-${i}`} className="d-flex gap-3 align-items-center">
                            <div className={`step-item rounded-circle ratio ratio-1x1 ${active === item.no && 'active'}`} style={{ width: 42 }}>
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