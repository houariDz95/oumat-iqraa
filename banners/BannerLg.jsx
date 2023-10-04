'use client'
import { useEffect, useRef } from 'react'

export default function Banner() {
    const banner = useRef()

    const atOptions = {
        'key' : 'ad330eb21b043aecab76c636577f1289',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
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