'use client';
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { fromRight, scale } from "@/utils/transition";
import { useRouter, useSearchParams } from "next/navigation";

import SidebarDesktop from "@/components/SidebarDesktop";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Step4 from "@/components/Step4";
import BottomNav from "@/components/BottomNav";
import Step5 from "@/components/Step5";
import SidebarMobile from "@/components/SidebarMobile";

export default function Index() {
  const [isValid, setIsValid] = useState(false);
  const searchParams = useSearchParams();
  const step = parseInt(searchParams.get('step'));
  const router = useRouter();

  const [info, setInfo] = useState(null);
  // Retrieve from Session
  useEffect(() => {
    sessionStorage.getItem('info') && setInfo(JSON.parse(sessionStorage.getItem('info')))
  }, [])

  const stepList = [
    {
      no: 1,
      name: 'your info',
      title: 'Personal info',
      desc: 'Please provide your name, email address, and phone number.',
    },
    {
      no: 2,
      name: 'select plan',
      title: 'Select Your Plan',
      desc: 'You have the option of monthly or yearly billing.',
    },
    {
      no: 3,
      name: 'add-ons',
      title: 'Pick add-ons',
      desc: 'Add-ons help enhance your gaming experience',
    },
    {
      no: 4,
      name: 'summary',
      title: 'Finishing up',
      desc: 'Double-check everything looks OK before confirming.',
    },
  ]
  const activeStep = stepList.find((item) => item.no === step)

  useEffect(() => {
    const validStep = parseInt(sessionStorage.getItem('valid')) || 0;

    // === Nav guard
    if (!step || step < 1 || step > 5 || step > validStep + 1) {
      router.replace(`?step=${Math.min(validStep + 1, 5)}`);
    }
  }, [step, router]);


  let StepComponent;
  switch (step) {
    case 2:
      StepComponent = Step2
      break
    case 3:
      StepComponent = Step3
      break
    case 4:
      StepComponent = Step4
      break
    case 5:
      StepComponent = Step5
      break
    default:
      StepComponent = Step1
  }

  const handleChange = (newInfo) => {
    // console.log(newInfo)
    setInfo((prev) => ({ ...prev, ...newInfo }))
  }

  const handleSubmit = () => {
    sessionStorage.setItem('info', JSON.stringify(info))

    // === Update completed Step
    const currentValid = parseInt(sessionStorage.getItem('valid')) || 0;
    if (step > currentValid) {
      sessionStorage.setItem('valid', step);
    }

    console.log(sessionStorage.getItem('info'))
    router.push(`?step=${step + 1}`)
  }

  return (
    <>
      <div className="home">
        <div className="container py-lg-4">
          <SidebarMobile stepList={stepList} active={step <= 4 ? step : 4} className="d-lg-none" />

          <motion.div {...scale} className="card shadow rounded-4 p-4 py-5">
            <div className="row gx-0">
              <div className="col-lg-auto d-none d-lg-block" style={{ width: 290 }}>
                <SidebarDesktop stepList={stepList} active={step <= 4 ? step : 4} />
              </div>
              <div className="col">
                <div className="h-100 d-stack py-lg-3 px-lg-5 px-xl-6">

                  <AnimatePresence mode="wait">
                    <motion.div key={step} {...fromRight} className="flex-grow-1">
                      {
                        activeStep?.title &&
                        <>
                          <h2 className="fw-bold mt-lg-5 fs-1 fs-lg-2">{activeStep?.title || ''}</h2>
                          <p className="mt-3 text-muted fs-5 fs-lg-6">{activeStep?.desc}</p>
                        </>
                      }

                      <StepComponent savedInfo={info} onValidate={(e) => { setIsValid(e) }} onChange={handleChange} className="pt-4" />
                    </motion.div>
                  </AnimatePresence>

                  {
                    step <= 4 &&
                    <div className="mt-3 d-none d-lg-block">
                      <BottomNav step={step} isValid={isValid} onSubmit={handleSubmit} />
                    </div>
                  }

                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {
          step <= 4 &&
          <div className="mt-4 d-lg-none bg-white p-3">
            <BottomNav step={step} isValid={isValid} onSubmit={handleSubmit} />
          </div>
        }
      </div>
    </>
  )
}