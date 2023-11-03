function mainroot(root,container){
    var dom=document.createElement(root.type)
    dom.innerHTML=root.children

    dom.setAttribute('href',root.props.href)
    dom.setAttribute('target',root.props.target);

    container.appendChild(dom)
}

const root={
    type:'a',
    props:{
        href:'https://youtube.com',
        target:'_black'
    },
    children:"Click Me Youbute Com ?"
}

let main=document.querySelector('.main');

mainroot(root,main);