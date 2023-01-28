export {z}

const z = {
    i : (id) => document.getElementById(id),
    clns : (className) =>document.getElementsByClassName(className),
    $ : (parent,query) => parent ? parent.querySelector(query) : document.querySelector(query),
    $s : (parent,query) => parent ? parent.querySelector(query) : document.querySelector(query),
    tst : () => console.log('test')  
}