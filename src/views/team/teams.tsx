import * as React from 'react'
import Topnav from '../../components/topnav/topnav'

import User from '../../models/user'
import { Avatar, majorScale, Pane, Paragraph, Button, SideSheet, TextInputField, minorScale, Card, Icon, Text } from 'evergreen-ui'
import Team from '../../models/team'

export type TeamsViewProps = {
  user?: User
  workspaces?: Team[]
  onClickNew: Function
}

export type TeamsViewState = {
  newCanvasVisible: boolean
}

const initialState = {
  newCanvasVisible: false
}

export default class TeamsView extends React.Component<TeamsViewProps, TeamsViewState> {
  state: Readonly<TeamsViewState> = initialState

  toggleNewCanvas = () => {
    this.setState({
      newCanvasVisible: !this.state.newCanvasVisible
    })
  }

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    this.props.onClickNew()
  }

  render () {
    const { user, workspaces } = this.props
    return (
      <div>
        <Topnav user={user} locationMessage="Teams" />
        <Pane
          width={600}
          marginX="auto"
          marginTop={majorScale(15)}
          marginBottom={majorScale(5)}
        >
          <Paragraph>Teams let you collaborate with team members, add permissions and share sources across your whole team under a shared billing account.</Paragraph>
          {workspaces && (
            <Pane
              is="ul"
              padding={0}
              marginLeft={0}
              marginTop={0}
              marginRight={0}
              marginBottom={majorScale(2)}
              listStyle="none"

            >
              {workspaces.map(value => {
                return (
                  <Pane
                    is="li"
                    display="flex"
                    alignItems="center"
                    fontWeight={400}
                    lineHeight="20px"
                    position="relative"
                    color="rgb(66, 90, 112)"
                    marginY={minorScale(2)}
                  >
                    <Card
                      is="a"
                      display="flex"
                      alignItems="center"
                      textDecoration="none"
                      padding={minorScale(3)}
                      color="#47b881"
                      width="100%"
                      href="#"
                      elevation={1}
                    >
                      <Avatar
                        hashValue={value.id}
                        borderRadius={3}
                        name={value.name}
                        size={32}
                        marginRight={minorScale(3)}
                      />
                      <Text marginRight={majorScale(5)}>{value.name}</Text>
                      <Icon marginLeft="auto" icon="double-chevron-right" />
                    </Card>
                  </Pane>
                )
              })}
            </Pane>
          )}
          <Button
            width="100%"
            height={40}
            marginTop={majorScale(2)}
            appearance="primary"
            onClick={this.toggleNewCanvas}
          >
            New Team
          </Button>
        </Pane>
        <SideSheet
          isShown={this.state.newCanvasVisible}
          onCloseComplete={this.toggleNewCanvas}
        >
          <Pane
            padding={majorScale(4)}
          >
            <form onSubmit={this.onSubmit}>
              <TextInputField
                label="Name"
                required
                placeholder="e.g. My Company Name"
                inputHeight={majorScale(5)}
              />
              <TextInputField
                label="Billing Email"
                type="email"
                required
                placeholder="e.g. billing@mycompany.com"
                description="This email address will be used to send any billing notices or information. We’ll also use this to fetch the avatar for this team using Gravatar."
                inputHeight={majorScale(5)}
              />
              <Button
                appearance="primary"
                intent="success"
                height={40}
              >
                Create Team
              </Button>
            </form>
          </Pane>
        </SideSheet>
      </div>
    )
  }
}
