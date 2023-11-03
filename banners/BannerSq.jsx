'use client'
import { useEffect, useRef } from 'react'

export default function BannerSq() {
    const banner = useRef()

    const atOptions = {
		'key' : '8f90a9cddbe1a56c03ea9d340a046ae2',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
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