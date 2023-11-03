'use client'
import { useEffect, useRef } from 'react'

export default function BannerSm() {
    const banner = useRef()

    const atOptions = {
		'key' : '1cc911d6bba211679896c27533d01f4e',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
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

    return <div className="border border-gray-200 justify-center items-center text-white text-center" ref={banner}></div>
}