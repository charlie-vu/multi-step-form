'use client';
import { useState } from "react";
import { motion } from "motion/react";

import SidebarDesktop from "@/components/SidebarDesktop";
import Step1 from "@/components/Step1";

export default function Index() {
  const [activeStep, setActiveStep] = useState(1)
  return (
    <>
      <div className="home container py-4">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >

          <div className="card shadow rounded-4 p-3">
            <div className="row gx-5">
              <div className="col-lg-auto d-none d-lg-block" style={{ width: 340 }}>
                <SidebarDesktop />
              </div>
              <div className="col">
                <div className="p-5 h-100 d-stack">

                  <div className="flex-grow-1">
                    <Step1 />
                  </div>

                  <div className="mt-3 d-flex justify-content-between gap-2">
                    <button className="btn-back btn btn-link text-decoration-none">Go Back</button>
                    <button className="btn btn-primary">Next Step</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </>
  )
}