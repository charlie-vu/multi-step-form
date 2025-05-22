
export default function SidebarMobile(props) {
    const {
        className = '',
        stepList = [],
        active = 1,
    } = props;

    return (
        <>
            <div className={`sidebar-mobile d-flex gap-3 py-4 align-items-center justify-content-center ${className}`}>
                {
                    stepList.length && stepList.map((item, i) =>
                        <div key={item.name} className={`step-item rounded-circle ratio ratio-1x1 ${active === item.no ? 'active' : ''}`} style={{ width: 36 }}>
                            <p className="w-auto h-auto start-50 top-50 translate-middle fw-semibold">{item.no}</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}