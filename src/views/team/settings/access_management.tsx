import * as React from 'react'
import { Avatar, Badge, Button, Card, Heading, majorScale, minorScale, Table, Text, Strong, Pane, Popover, Position, Menu, TextDropdownButton } from 'evergreen-ui'
import { TeamMember } from '../../../models/team'

type TeamsSettingsAccessManagementViewProps = {
  users: TeamMember[]
  onInviteClick: Function
}


enum Order {
  NONE,
  ASC,
  DESC
}

type TeamsSettingsAccessManagementViewState = {
  orderedColumn: number
  ordering: Order
}


export default class TeamsSettingsAccessManagementView extends React.Component<TeamsSettingsAccessManagementViewProps, TeamsSettingsAccessManagementViewState> {
  state: Readonly<TeamsSettingsAccessManagementViewState> = {
    orderedColumn: 1,
    ordering: Order.NONE
  }

  sort = (users: TeamMember[]) => {
    const { ordering, orderedColumn } = this.state
    // Return if there's no ordering.
    if (ordering === Order.NONE) return users

    let propKey = 'email'
    if (orderedColumn === 2) propKey = 'permission'
    if (orderedColumn === 3) propKey = 'roles'

    return users.sort((a, b) => {
      let aValue = a[propKey]
      let bValue = b[propKey]

      const sortTable = { true: 1, false: -1 }

      if (this.state.ordering === Order.ASC) {
        return aValue === bValue ? 0 : sortTable[`${aValue > bValue}`]
      }

      return bValue === aValue ? 0 : sortTable[`${bValue > aValue}`]
    })
  }

  getIconForOrder = (order: Order) => {
    switch(order) {
      case Order.ASC:
        return 'caret-up'
      case Order.DESC:
        return 'caret-down'
      default:
        return 'caret-down'
    }
  }

  renderHeaderCell = (column: number, label: string) => {
    return (
      <Table.TextHeaderCell>
        <Popover
          position={Position.BOTTOM_LEFT}
          content={({ close }) => (
            <Menu>
              <Menu.OptionsGroup
                title="Order"
                options={[
                  { label: 'Ascending', value: Order.ASC },
                  { label: 'Descending', value: Order.DESC }
                ]}
                selected={
                  this.state.orderedColumn === column ? this.state.ordering : null
                }
                onChange={value => {
                  this.setState({
                    orderedColumn: column,
                    ordering: value ? value : Order.NONE
                  })
                  close()
                }}
              />
            </Menu>
          )}
        >
          <TextDropdownButton
            icon={
              this.state.orderedColumn === column
                ? this.getIconForOrder(this.state.ordering)
                : false
            }
          >
            {label}
          </TextDropdownButton>
        </Popover>
      </Table.TextHeaderCell>
    )
  }

  render() {
    const { onInviteClick } = this.props
    const users = this.sort(this.props.users)
    return (
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
            alignItems="center"
            justifyContent="space-between"
            padding={majorScale(2)}
          >
            <Heading size={500} marginBottom={majorScale(3)}>User Access Management</Heading>
            <Pane>
              <Button
                iconBefore="plus"
                minWidth={152}
                marginLeft={majorScale(2)}
                display="inline-flex"
                position="relative"
                height={minorScale(8)}
                appearance="primary"
                onClick={onInviteClick}
              >
                Invite Team Member
              </Button>
            </Pane>
          </Pane>
          <Table
            borderTop="solid 1px #E4E7EB"
            display="flex"
            backgroundColor="white"
            width="100%"
            flexDirection="column"
          >
            <Table.Head>
              {this.renderHeaderCell(1, 'Team Member')}
              {this.renderHeaderCell(2, 'Permission')}
              {this.renderHeaderCell(3, 'Role')}
            </Table.Head>
            <Table.Body>
              {users.map(user => (
                <Table.Row key={user.id}>
                  <Table.TextCell>
                    <Pane
                      display="flex"
                      alignItems="center"
                      margin={0}
                      padding={0}
                    >
                      <Avatar
                        hashValue={user.id}
                        name={(user.firstname + ' ' + user.lastname)}
                      />
                      <Pane
                        marginLeft={minorScale(3)}
                        display="flex"
                        flexDirection="column"
                      >
                        <Strong size={300}>{user.firstname} {user.lastname}</Strong>
                        <Text size={300}>{user.email}</Text>
                      </Pane>
                    </Pane>
                  </Table.TextCell>
                  <Table.TextCell>
                    {user.permission.toLowerCase() === 'owner'
                      ? (<Badge color="blue">Owner</Badge>)
                    : (<Badge color="neutral">Member</Badge>)
                    }
                  </Table.TextCell>
                  <Table.TextCell>
                    {user.roles.map(role =>
                      <Badge color="neutral">{role}</Badge>
                    )}
                  </Table.TextCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card>
      </Pane>
    )
  }
}
