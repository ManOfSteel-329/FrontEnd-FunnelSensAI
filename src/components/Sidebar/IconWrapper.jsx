import React from 'react'

const IconWrapper = ({Icon, HoverIcon, isHovered}) => {
  return isHovered ? <img src={HoverIcon} alt='hovered over Icon' /> : <Icon />
}

export default IconWrapper