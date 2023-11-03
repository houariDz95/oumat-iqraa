'use client'
import { useEffect, useRef } from 'react'

export default function BannerLong() {
    const banner = useRef()

    const atOptions = {
		'key' : 'e8e85247904c515bd293e64c209c5f0b',
		'format' : 'iframe',
		'height' : 300,
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