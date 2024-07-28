import React from 'react'
import './Button.scss'

const Button = ({btnProp, origin}) => {
  return (
    <div className={`buttonComp buttonGroup__${origin}`}>
        {btnProp?.length && btnProp.map((item, index) => 
            <button type="button" onClick={item.action} className={`buttonComp__btn buttonComp__${item.type} buttonComp__${origin}`} key={index}>
                {item.name}
            </button>
        )}
    </div>
  )
}

export default Button