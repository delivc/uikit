/**
 * @class VerifyComponent
 */
import * as React from 'react'
import styled from '@emotion/styled'
import { Button, Card, majorScale, Heading, Link, Text, Strong } from 'evergreen-ui'

const Header = styled.header`
  text-align: center;
  position: relative;
  padding-top: 2rem;
  margin-bottom: 2rem;
`

export type Props = {
  email: String,
  onResend: Function
}

export default class Verify extends React.Component<Props> {
  render () {
    const { email, onResend } = this.props
    return (
        <Card
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          boxSizing="border-box"
          marginRight="auto"
          marginLeft="auto"
          marginY={100}
          width={576}
          elevation={1}
          backgroundColor="white"
          padding={majorScale(4)}
        >
          <Header>
            <Heading is="h1" size={600}>Please verify your email</Heading>
          </Header>
        <Text>You’re almost there! We sent an email to</Text>
        <Strong marginY={majorScale(2)}>{email}</Strong>
          <Text>
            Just click on the link in that email to complete your signup.
            <br />
            If you don't see it, you may need to <Strong>check your spam</Strong> folder.
          </Text>
          <Text
            marginTop={majorScale(3)}
          >
            Still can't find the email?
          </Text>
          <Button
            appearance="primary"
            marginY={majorScale(2)}
            onClick={onResend}
          >
            Resend Email
          </Button>
        <Text>Need help? <Link color="blue" href="mailto:hello@delivc.com?subject=Email Verification Help">Contact us</Link></Text>
        </Card>
     )
   }
 }
