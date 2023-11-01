function customRender(reactElement,container){
    /*var domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement);
    */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if(prop=='children') continue; 
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement);
}

let reactElement={
    type:'a',
    props:{
        // P:V
        href:"https://google.com",
        target:'blank'   
    },

    children:'Click me to vist google'
}

const MainContainer=document.querySelector('#root');

customRender(reactElement,MainContainer);