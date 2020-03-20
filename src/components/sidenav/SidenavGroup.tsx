import React from 'react'
import { Pane, majorScale, minorScale, IconName, Heading, Icon, defaultTheme } from 'evergreen-ui'

export type Props = {
  icon?: IconName
  label?: string
}

export default class NavbarMain extends React.PureComponent<Props> {
  render() {
    const { children, icon, label } = this.props
    return (
      <Pane
        display="flex"
        flexDirection="column"
        flexShrink={0}
        paddingTop={majorScale(1)}
      >
        {label && (
          <Pane
            display="flex"
            alignItems="center"
            marginBottom={majorScale(1)}
          >
            {icon && (
              <Icon color={defaultTheme.colors.text.muted} title={label} size={15} icon={icon} />
            )}
            <Heading
              marginTop={minorScale(1)}
              marginLeft={majorScale(1)}
              textTransform="uppercase"
              size={200}
            >
              {label}
            </Heading>
          </Pane>
        )}
        {children}
      </Pane>
    )
  }
}
