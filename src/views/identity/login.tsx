import * as React from 'react'
import styled from '@emotion/styled'
import { Button, Card, minorScale, majorScale, Heading, Link, Pane, Text, TextInputField } from 'evergreen-ui'
import { useForm, Controller } from 'react-hook-form'

const Header = styled.header`
  text-align: center;
  position: relative;
  padding-top: 2rem;
  margin-bottom: 2rem;
`

export type LoginViewProps = {
  onSubmit: Function
  forgotPasswordLink: string
  signUpLink: string
}

export type FormData = {
  email: string
  password: string
}

const LoginView: React.FC<LoginViewProps> = (props) => {
  const { control, errors, handleSubmit } = useForm<FormData>()

  const callback = () => {
    // noop
    alert('callback')
  }

  const onSubmit = handleSubmit((formData) => {
    console.log(formData)
    props.onSubmit(formData, callback)
  })

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
          <Heading is="h1" size={600}>Log in to Delivc</Heading>
        </Header>
        <Pane
          is="form"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="stretch"
          textAlign="left"
          onSubmit={onSubmit}
        >
          <Controller
            as={TextInputField}
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address"
              }
            }}
            isInvalid={errors.email ? true : false}
            validationMessage={errors.email ? errors.email.message : false}
            defaultValue=""
            label="E-Mail"
            required
          />
        <Controller
          as={TextInputField}
          name="password"
          type="password"
          isInvalid={errors.password ? true : false}
          control={control}
          defaultValue=""
          label="Password"
          rules={{ required: true }}
          required
        />
          <Button
            appearance="primary"
            height={40}
          >Log in</Button>
        </Pane>
        <Pane
          as="footer"
          textAlign="center"
          marginTop={majorScale(4)}
        >
          <Text>Forgot your password?</Text>
          <Link marginLeft={minorScale(1)} href={props.forgotPasswordLink}>Reset your password</Link>
          <br /><br />
          <Text>Don't have an account?</Text>
        <Link marginLeft={minorScale(1)} href={props.signUpLink}>Sign Up</Link>
        </Pane>
      </Card>
    )
}

export default LoginView
