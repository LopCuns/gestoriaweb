import { z } from './jlclib.js'


z.ev(window,'DOMContentLoaded',()=>{
    const showEl = (entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting) z.cl(entry.target,'show')
        })
    }
    const obs = new IntersectionObserver(showEl,{threshold: .9})
    z.$s('[data-obs]').forEach(el=>obs.observe(el))

})