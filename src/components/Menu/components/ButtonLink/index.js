// Componente não usado
// Um componente feito em função com propriedades sendo passadas

import React from 'react';

function ButtonLink(props) {
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    ); 
}

export default ButtonLink;