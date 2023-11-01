function mainContainer(reateElement,container){
    let dom=document.createElement(reateElement.type)
    dom.innerHTML=reateElement.children
    dom.setAttribute('href',reateElement.props.href)
    dom.setAttribute('target',reateElement.props.target)

    container.appendChild(dom);
} 

let reateElement={
    type:'a',
    props:{
        href:'https://youtube.com',
        target:'blank'
    },

    children:'Click me to link ?'
}

const mainRoot=document.querySelector('#root');

mainContainer(reateElement,mainRoot);