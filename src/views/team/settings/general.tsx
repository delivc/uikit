import * as React from 'react'
import { Button, Card,  Heading, majorScale, Pane, TextInputField } from 'evergreen-ui'
import Team from '../../../models/team'


export type TeamsSettingsGeneralViewProps = {
  team: Team
  onSubmit: Function
}
export type TeamsSettingsGeneralViewState = {
  id: string
  name: string
}

export default class TeamsSettingsGeneralView extends React.Component<TeamsSettingsGeneralViewProps, TeamsSettingsGeneralViewState> {
  state: Readonly<TeamsSettingsGeneralViewState> = {
    id: this.props.team.id,
    name: this.props.team.name
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const teamObject = {
      id: this.props.team.id,
      name: this.state.name
    }
    this.props.onSubmit(teamObject)
  }
  render() {
    return (
      <Pane
        margin="auto"
        marginTop={majorScale(4)}
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
            is="section"
            padding={majorScale(4)}
          >
            <Heading size={600} marginBottom={majorScale(3)}>General Settings</Heading>
            <form onSubmit={this.onSubmit}>
              <TextInputField
                required
                label="Team Name"
                onChange={this.onChange}
                value={this.state.name}
              />
              <TextInputField
                label="ID"
                description="This is your team's auto generated unique identifier."
                disabled
                value={this.state.id}
              />
              <Button
                appearance="primary"
              >
                Save Changes
              </Button>
            </form>
          </Pane>
        </Card>
      </Pane>
    )
  }
}
