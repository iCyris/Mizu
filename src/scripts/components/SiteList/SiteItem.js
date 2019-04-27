import React from 'react'

export default (props) => {
    const { name, url, favicon } = props.site

    return (
        <div className="site-item">
            <a className="site-item-a" href={ url } title={ name } target="_blank" rel="noopener noreferrer">
                <img src={ favicon } alt={ name }/>
            </a>
            {
                props.visible ? (
                    <div className="site-item-a-del" onClick={ props.delete }/>
                ) : ""
            }
        </div>
    )
}