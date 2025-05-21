'use client';
import Step1 from "@/components/Step1";
import { useState } from "react"

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

export default function Index() {
  const [activeStep, setActiveStep] = useState(1)
  return (
    <>
      <div className="home container py-4">
        <div className="card shadow rounded-4 p-3">
          <div className="row gx-5">
            <div className="col-lg-auto d-none d-lg-block" style={{ width: 340 }}>
              <div className="sidebar-desktop d-stack gap-4 px-32px py-5 bg-secondary rounded-3 overflow-hidden">

                {
                  stepList.map((item, i) =>
                    <div key={`step-${i}`} className="d-flex gap-3 align-items-center">
                      <div className={`step-item rounded-circle ratio ratio-1x1 ${activeStep === item.no && 'active'}`} style={{ width: 42 }}>
                        <p className="w-auto h-auto start-50 top-50 translate-middle fw-semibold">{item.no}</p>
                      </div>
                      <div className="text-uppercase text-white">
                        <p className="text-secondary small">Step {item.no}</p>
                        <p className="fw-bold">{item.name}</p>
                      </div>
                    </div>
                  )
                }

                {/* <div className="d-flex gap-3 align-items-center">
                  <div className="rounded-circle bg-blue-200 ratio ratio-1x1" style={{ width: 42 }}>
                    <p className="w-auto h-auto start-50 top-50 translate-middle fw-semibold">1</p>
                  </div>
                  <div className="text-uppercase text-white">
                    <p className="text-secondary">Step 1</p>
                    <p className="fw-bold">Your info</p>
                  </div>
                </div> */}

              </div>
            </div>
            <div className="col">
              <div className="p-5 h-100 d-stack justify-content-between">

                <Step1 />

                <div className="mt-3 d-flex justify-content-between gap-2">
                  <button className="btn-back btn btn-link text-decoration-none">Go Back</button>
                  <button className="btn btn-primary">Next Step</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}