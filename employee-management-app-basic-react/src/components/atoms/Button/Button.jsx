import React from 'react'
import './Button.scss'

const Button = ({btnProp}) => {
  return (
    <div className="buttonComp">
        {btnProp?.length && btnProp.map((item, index) => 
            <button type="button" onClick={item.action} className={`buttonComp__btn buttonComp__${item.type}`} key={index}>
                {item.name}
            </button>
        )}
    </div>
  )
}

export default Button