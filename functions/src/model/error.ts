import { Response } from 'express'

const errorMessage = {
  dbError: 'DB error',
  loginError: 'Authentication failed',
  authError: 'Authorization error',
  bodyError: 'Required body not found',
  headerError: 'Unauthorized client',
  routeError: 'Route not found',
}

const errorResponse = (res: Response) => ({
  dbError: () => res.status(400).send(errorMessage.dbError),
  loginError: () => res.status(400).send(errorMessage.loginError),
  authError: () => res.status(400).send(errorMessage.authError),
  bodyError: () => res.status(400).send(errorMessage.bodyError),
  headerError: () => res.status(401).send(errorMessage.headerError),
  routeError: () => res.status(404).send(errorMessage.routeError),
})

export const throwError = (e: Error) => {
  throw new Error(e.message)
}

export default errorResponse
