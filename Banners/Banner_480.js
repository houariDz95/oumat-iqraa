'use client'
import { useEffect, useRef } from 'react'

export default function Banner_480() {
    const banner = useRef()
 
    const atOptions = {
		'key' : '08632558239eaf16df5141b3f63613e5',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
    useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//affordspoonsgray.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
}, [banner])

    return <div className="mx-2 my-5 w-fit flex justify-center items-center text-white text-center" ref={banner}></div>
}