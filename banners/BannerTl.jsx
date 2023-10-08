'use client'
import { useEffect, useRef } from 'react'

export default function BannerTl() {
    const banner = useRef()

    const atOptions = {
		'key' : '20bd9023c53d4f2e34bf77f915a49b1c',
		'format' : 'iframe',
		'height' : 600,
		'width' : 160,
		'params' : {}
    }
    useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.profitablecreativeformat.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
}, [banner])

    return <div className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center" ref={banner}></div>
}