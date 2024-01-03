'use client'
import { useEffect, useRef } from 'react'

export default function Banner_350() {
    const banner = useRef()
 
    const atOptions = {
		'key' : 'b4817f45a8e9e2b9ad6f655d1af9fddd',
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

    return <div className="mx-2 my-5 w-fit flex justify-center items-center text-white text-center" ref={banner}></div>
}