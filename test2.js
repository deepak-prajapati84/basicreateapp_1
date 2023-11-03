function main(createE,container){
    const dom=document.createElement(createE.type)
    dom.innerHTML=createE.children
    dom.setAttribute('href',createE.props.href)
    dom.setAttribute('target',createE.props.target)

    container.appendChild(dom)
}

let createE={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_black"
    },

    children:"Click Me Google.com"
}

var create=document.querySelector('#root');


main(createE,create)

