import React from 'react'
import styled from '@emotion/styled'
import { Icon, Text, Tooltip, majorScale, defaultTheme } from 'evergreen-ui'
import { IconName } from '@blueprintjs/icons'

export type Props = {
  expanded?: boolean
  href: string
  icon?: IconName
  label: string
}

export default class NavbarItem extends React.PureComponent<Props> {
  render() {
    const { label, icon, href, expanded } = this.props
    return (
      <Tooltip
        content={label}
        position="right"
      >
        <Link {...this.props} href={href}>
          {icon
            ? (<Icon icon={icon} size={18} />)
            : (<span>{label}</span>)}
          {expanded && (<Text paddingLeft={majorScale(2)} color="white">{label}</Text>) }
        </Link>
      </Tooltip>
    )
  }
}


const Link = styled.a<Props>`
  transition: color .3s linear,background-color .3s linear;
  font-size: 16px;
  line-height: 1.25;
  height: 56px;
  width: ${(props: Props) => props.expanded ? '202px' : '100%'};
  white-space: normal;

  position: relative;
  text-decoration: none;
  overflow: hidden;
  color: #fff;

  padding-left: ${(props: Props) => props.expanded ? '18px' : '0px'};

  display: flex;
  justify-content: ${(props: Props) => props.expanded ? 'flex-start' : 'center'};
  align-items: center;


  &:hover {
    background-color: ${defaultTheme.scales.blue.B9};
  }


`
