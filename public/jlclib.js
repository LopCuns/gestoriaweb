export {z}

const z = {
    i : (id) => document.getElementById(id),
    $clns : (className) =>document.getElementsByClassName(className),
    $ : (query,parent) => parent ? parent.querySelector(query) : document.querySelector(query),
    $s : (query,parent) => parent ? parent.querySelectorAll(query) : document.querySelectorAll(query),
    tst : () => console.log('test'),
    ev : (el,type,fn) => el.addEventListener(type,fn),
    cl : (el,className) => el.classList.add(className)  
}