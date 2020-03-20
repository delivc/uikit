import React from 'react'
import { Button } from 'evergreen-ui'

export type Props = {
  href: string
  label: string
}

export default class SidenavItem extends React.PureComponent<Props> {
  render() {
    const { label, href } = this.props
    return (
      <Button
        is="a"
        appearance="minimal"
        intent="none"
        fontSize={14}
        fontWeight={500}
        role="tab"
        href={href}
      >
        {label}
      </Button>
    )
  }
}
