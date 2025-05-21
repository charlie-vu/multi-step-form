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

export default function Index() {
  const [isValid, setIsValid] = useState(false);
  const searchParams = useSearchParams();
  const step = parseInt(searchParams.get('step'));
  const router = useRouter();

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
    if (!step || step > stepList.length || step < 1) {
      router.replace('?step=1')
    }
  }, [step, router])


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
    default:
      StepComponent = Step1
  }

  return (
    <>
      <div className="home container py-4">

        <motion.div {...scale} className="card shadow rounded-4 p-3">
          <div className="row gx-5">
            <div className="col-lg-auto d-none d-lg-block" style={{ width: 340 }}>
              <SidebarDesktop stepList={stepList} active={step} />
            </div>
            <div className="col">
              <div className="p-5 h-100 d-stack">

                <AnimatePresence mode="wait">
                  <motion.div key={step} {...fromRight} className="flex-grow-1">
                    <h2 className="fw-bold text-primary">{activeStep?.title || ''}</h2>
                    <p className="mt-3 text-muted opacity-75">{activeStep?.desc}</p>
                    <StepComponent onValidate={(e) => { setIsValid(e) }} className="mt-4" />
                  </motion.div>
                </AnimatePresence>

                <div className="mt-3">
                  <BottomNav step={step} isValid={true} />
                </div>

              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </>
  )
}