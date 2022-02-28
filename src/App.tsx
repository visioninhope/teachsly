// @ts-nocheck
import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { defaultDashboardContext } from './constants/DashboardContext'
import UserService from './services/UserService'
import { UserDashboardContext } from './contexts/UserDashboardContext'
import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
import { applicationRoutes, disabledAccountRoutes } from './routes'
import ToastWrapper from './components/Toast/ToastWrapper'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import DashboardLayout from './layouts/DashboardLayout'
import { defaultTheme } from './constants/Theme'
import { LogInScreen } from './layouts/LogInScreen'
import { ApplicationRoute } from './interfaces/Routes'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { SpinnerScreen } from './views/others/SpinnerScreen'

Amplify.configure(awsExports)

const App = () => {
  const [authState, setAuthState] = useState<AuthState | null>(null)
  const [dashboardInformation, setDashboardInformation] = useState(
    defaultDashboardContext
  )

  const [routes, setRoutes] = useState<ApplicationRoute[]>([])
  const theme = extendTheme(defaultTheme)

  useEffect(() => {
    return onAuthUIStateChange(async (nextAuthState, authData) => {
      if (
        nextAuthState === AuthState.VerifyContact ||
        nextAuthState === AuthState.SignedOut ||
        nextAuthState === AuthState.ResetPassword ||
        !authData
      ) {
        setDashboardInformation({
          user: null
        })
        return
      }

      const cognitoId = authData.attributes.sub
      const user = await UserService.fetchUserByCognitoId(cognitoId)
      const userType = UserService.getUserType(user)
      let routes: ApplicationRoute[] = []

      if (userType) {
        routes = user?.isDisabledUser ? disabledAccountRoutes : applicationRoutes[userType]
        setRoutes(routes)
      }

      setDashboardInformation({
        user: {
          ...user,
          type: userType
        },
        routes
      })

      setAuthState(nextAuthState)
    })
  }, [])

  const routeComponent = useRoutes(routes)

  if (!authState) {
    return (
      <AmplifyAuthenticator>
        <ChakraProvider>
          <SpinnerScreen />
        </ChakraProvider>
      </AmplifyAuthenticator>
    )
  }

  return authState === AuthState.SignedIn && dashboardInformation.user
    ? (
      <AmplifyAuthenticator>
        <ChakraProvider theme={theme}>
          <UserDashboardContext.Provider value={dashboardInformation}>
            <DashboardLayout>
              <ToastWrapper />
              {routeComponent}
            </DashboardLayout>
          </UserDashboardContext.Provider>
        </ChakraProvider>
      </AmplifyAuthenticator>
      )
    : (
      <AmplifyAuthenticator>
        <ChakraProvider>
          <LogInScreen />
        </ChakraProvider>
      </AmplifyAuthenticator>
      )
}

export default App
