"use client"

import { useEffect } from 'react'
import Cal, { getCalApi } from "@calcom/embed-react"

const CalendarSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"appel-decouverte-velvet-ia"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <section id="calendly" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Une question ? Prenez rendez-vous dès maintenant
          </h2>
          <p className="text-lg text-gray-600">
            Planifiez un appel découverte pour discuter de vos besoins et de nos solutions.
          </p>
        </div>
        <div className="rounded-lg shadow-lg bg-white p-4 h-[700px] relative">
          <Cal 
            namespace="appel-decouverte-velvet-ia"
            calLink="romain-auroux-6dlf0l/appel-decouverte-velvet-ia"
            style={{
              width:"100%", 
              height:"100%",
              overflow:"scroll",
              minHeight: "650px",
              position: "relative",
              zIndex: 10
            }}
            config={{
              layout: "month_view",
              hideEventTypeDetails: "false"
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default CalendarSection 