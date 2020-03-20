import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'

export type Props = {
  expanded?: boolean
  href: string
}

export default class NavbarLogo extends React.PureComponent<Props> {
  render () {
    const { children, href } = this.props
    return (
      <Pane
        width="100%"
        height={majorScale(8)}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
        is="a"
        href={href}
      >
        {children}
      </Pane>
    )
  }
}
