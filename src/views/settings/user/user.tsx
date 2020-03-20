import * as React from 'react'
import { Button, TextInputField, Card, IconButton, Heading, Pane, majorScale, Text, Dialog } from 'evergreen-ui'
import Topnav from '../../../components/topnav/topnav'

export type Props = {
  onClose: Function
  onProfileSubmit: Function
  onPasswordSubmit: Function
}

export type State = {
  passwordDialogIsShown: boolean
}

const initialState: State = {
  passwordDialogIsShown: false
}

const toggleDialogState = (prevState: State) => ({ passwordDialogIsShown: !prevState.passwordDialogIsShown})

export default class User extends React.Component<Props, State> {
  state: Readonly<State> = initialState

  togglePasswordDialog = () => {
    this.setState(toggleDialogState)
  }

  render() {
    const { onClose, onProfileSubmit } = this.props
    const { passwordDialogIsShown } = this.state

    return (
      <div>
        <Topnav
          locationMessage="User Settings"
          right={<IconButton onClick={onClose} iconSize={18} appearance="minimal" icon="cross" />}
        />
        <Pane
          paddingY={majorScale(4)}
        >
          <Pane
            margin="auto"
            maxWidth={760}
          >
            <Card
              is="section"
              elevation={1}
              backgroundColor="white"
              margin={majorScale(4)}
              padding={majorScale(4)}
            >
              <Heading size={600} marginBottom={majorScale(3)}>Profile</Heading>
              <form>
                <TextInputField
                  label="First name"
                  required
                />
                <TextInputField
                  label="Last name"
                  required
                />
                <TextInputField
                  label="Location"
                />
                <TextInputField
                  label="Phone"
                  type="tel"
                />
                <TextInputField
                  label="Email"
                  type="email"
                  required
                />
                <Button
                  appearance="primary"
                  onClick={onProfileSubmit}
                >
                  Update Profile
                </Button>
              </form>
            </Card>
            <Card
              is="section"
              elevation={1}
              backgroundColor="white"
              margin={majorScale(4)}
              padding={majorScale(4)}
            >
              <Dialog
                isShown={passwordDialogIsShown}
                title="Change Password"
                onCloseComplete={this.togglePasswordDialog}
              >
                <form>
                  <TextInputField
                    label="Current Password"
                    required
                    autocomplete="current-password"
                    type="password"
                  />
                  <TextInputField
                    label="New Password"
                    required
                    type="password"
                  />
                  <TextInputField
                    label="Confirm Password"
                    required
                    type="password"
                  />
                </form>
              </Dialog>
              <Heading size={600} marginBottom={majorScale(3)}>Account Security</Heading>
              <Text>
                Password
              </Text>
              <Button
                marginTop={majorScale(1)}
                width="100%"
                iconAfter="caret-down"
                justifyContent="space-between"
                onClick={this.togglePasswordDialog}>
                  Change password
              </Button>
            </Card>
            <Card
              is="section"
              elevation={1}
              backgroundColor="white"
              margin={majorScale(4)}
              padding={majorScale(4)}
            >
              <Heading size={600} marginBottom={majorScale(3)}>Delete Account</Heading>
              <Text>
                Delete your account and all of your source data. This is irreversible.
              </Text>
              <Button
                marginTop={majorScale(1)}
                width="100%"
                iconAfter="caret-down"
                justifyContent="space-between"
                intent="danger">
                Delete account
              </Button>
            </Card>
          </Pane>
        </Pane>
      </div>
    )
  }
}
