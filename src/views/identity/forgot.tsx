import React, { useState } from 'react'
import {
  Button,
  Card,
  majorScale,
  minorScale,
  Pane,
  Heading,
  Link,
  Text,
  TextInputField,
  toaster,
  Alert
} from 'evergreen-ui'
import { useForm, Controller } from 'react-hook-form'

export type Props = {
  onSubmit: Function
  loginLink: string
  signUpLink: string
}

export type FormData = {
  email: string
}

export type ErrorMessage = {
  label: string
  message: string
}

const Forgot: React.FC<Props> = (props) => {
  const { control, errors, handleSubmit } = useForm<FormData>()

  let [loading, setLoading] = useState<boolean>(false)

  let [error, setError] = useState<ErrorMessage | null>(null)

  // callback defaults to null, if something happened send the error
  const callback = (error: ErrorMessage | null = null) => {
    if (error === null) {
      toaster.success(
        'Confirmation E-Mail has been sent',
        {
          description: 'Please check your email for further instructions about your password recovery. Sometimes spam filters block automated emails. If you do not find the email in your inbox, please check your spam filter or bulk email folder.'
        }
      )
    } else {
      setError(error)
    }
    setLoading(false)
    // noop
  }

  const onSubmit = handleSubmit((formData) => {
    setLoading(true)
    props.onSubmit(formData, callback)
  })

  return (
    <Card
      display="flex"
      flexDirection="column"
      alignItems="center"
      boxSizing="border-box"
      marginRight="auto"
      marginLeft="auto"
      marginY={100}
      width={576}
      elevation={1}
      backgroundColor="white"
      padding={majorScale(4)}
    >
      <Pane
        display="flex"
        textAlign="center"
        marginBottom={majorScale(2)}
      >
        <Heading is="h1" size={600}>Reset Your Password</Heading>
      </Pane>
      {error && (
        <Pane marginBottom={majorScale(3)}>
          <Alert
            intent="warning"
            title={error.label}
          >
            {error.message}
          </Alert>
        </Pane>
      )}
      <Pane
        is="form"
        width="100%"
        display="flex"
        flexDirection="column"
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
          label="E-Mail Address"
          required
        />
        <Button
          appearance="primary"
          height={40}
          isLoading={loading}
        >
          Send Reset Email
        </Button>
      </Pane>
      <Pane
        as="footer"
        textAlign="center"
        marginTop={majorScale(4)}
      >
        <Text>Already have an account?</Text>
        <Link marginLeft={minorScale(1)} href={props.loginLink}>
          Log in
        </Link>
        <br /><br />
        <Text>Don't have an account?</Text>
        <Link marginLeft={minorScale(1)} href={props.signUpLink}>Sign Up</Link>
      </Pane>
    </Card>
  )
}

export default Forgot
