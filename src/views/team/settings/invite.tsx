import * as React from 'react'
import Topnav from '../../../components/topnav/topnav'
import { Card, Heading, majorScale, Pane, Button, TextInput, IconButton } from 'evergreen-ui'

export type TeamSettingsInviteViewProps = {
  onCancel: Function
  onInvite: Function
}
export type TeamSettingsInviteViewState = {
  emails: string[]
}

export default class TeamSettingsInviteView extends React.Component<TeamSettingsInviteViewProps, TeamSettingsInviteViewState> {
  state: Readonly<TeamSettingsInviteViewState> = {
    emails: ['']
  }

  emailChange = (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    let emails = [...this.state.emails]
    emails[i] = e.target.value

    this.setState({
      emails
    })
  }

  addEmailField = (e: React.MouseEvent) => {
    e.preventDefault()
    const emails = this.state.emails.concat([''])
    this.setState({
      emails
    })
  }

  dropEmail = (i: number) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (i > -1 ) {
      let emails = [
        ...this.state.emails.slice(0, i),
        ...this.state.emails.slice(i + 1)
      ]

      this.setState({
        emails
      })
    }
  }

  onInviteClick = () => {
    const emails = [...this.state.emails]
    this.props.onInvite(emails)
  }

  render() {
    const { onCancel } = this.props
    const { emails } = this.state
    return (
      <Pane
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="100%"
      >
        <Topnav
          locationMessage="Invite Team Member"
          right={<Button onClick={onCancel} intent="danger">Cancel</Button>}
        />
        <Pane
          margin="auto"
          width="100%"
          maxWidth={760}
        >
          <Card
            elevation={1}
            overflow="hidden"
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            margin={majorScale(4)}
          >
            <Pane
              display="flex"
            >
              <Heading
                paddingTop={majorScale(3)}
                paddingBottom={majorScale(2)}
                paddingRight={majorScale(2)}
                paddingLeft={majorScale(2)}
                size={600}
              >Invite team members</Heading>
            </Pane>
            <Pane
              display="flex"
              flexDirection="column"
              paddingX={majorScale(2)}
              marginBottom={majorScale(4)}
            >
              <Heading marginBottom={majorScale(1)} size={500}>Email</Heading>
              {emails.map((email, key) => (
                <Pane
                  marginBottom={majorScale(1)}
                  display="flex"
                  flexDirection="row"
                  key={key}
                >
                  <TextInput
                    type="email"
                    onChange={this.emailChange(key)}
                    value={email} />
                  <IconButton onClick={this.dropEmail(key)} appearance="minimal" marginLeft={majorScale(1)} icon="trash" intent="danger" />
                </Pane>
              ))}
              <Pane
                marginTop={majorScale(2)}
              >
                <Button onClick={this.addEmailField} iconBefore="add">Team Member</Button>
              </Pane>
            </Pane>
            <Pane
              borderTop="1px solid #E4E7EB"
              paddingY={majorScale(3)}
              display="flex"
              flexDirection="row"
            >
              <Button
                marginLeft="auto"
                appearance="primary"
                marginRight={majorScale(2)}
                onClick={this.onInviteClick}
              >Invite Team Member</Button>
            </Pane>
          </Card>
        </Pane>
      </Pane>
    )
  }
}
