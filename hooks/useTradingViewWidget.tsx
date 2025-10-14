'use client'
import { useEffect, useRef } from 'react'

const useTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600
) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    if (containerRef.current.dataset.loaded) return
    containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>`

    const script = document.createElement('script')
    script.src = scriptUrl
    script.async = true
    script.innerHTML = JSON.stringify(config)

    containerRef.current.appendChild(script)
    containerRef.current.dataset.loaded = 'true'

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
        delete containerRef.current.dataset.loaded
      }
    }
  }, [scriptUrl, config, height])

  return containerRef
}
export default useTradingViewWidget

// THE FOLLOWING DIDN'T WORK!

// 'use client'

// import { useEffect, useRef } from 'react'

// const useTradingViewWidget = (
//   scriptUrl: string,
//   config: Record<string, unknown>,
//   height = 600
// ) => {
//   const containerRef = useRef<HTMLDivElement | null>(null)

//   useEffect(() => {
//     if (!containerRef.current) return
//     if (containerRef.current.dataset.loaded) return

//     containerRef.current.innerHTML = `<div className="tradingview-widget-container__widget" style="height: ${height}px; width: 100%;"></div>`
//     const script = document.createElement('script')

//     script.src =
//       'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
//     script.type = 'text/javascript'
//     script.async = true
//     script.innerHTML = JSON.stringify({
//       config,
//     })
//     containerRef.current.appendChild(script)
//     containerRef.current.dataset.loaded = 'true'

//     return () => {
//       if (containerRef.current) {
//         containerRef.current.innerHTML = ''
//         delete containerRef.current.dataset.loaded
//       }
//       //   containerRef.current?.innerHTML = '' //&& containerRef.current.removeChild(script)
//     }
//   }, [scriptUrl, config, height])

//   return containerRef
// }

// export default useTradingViewWidget
