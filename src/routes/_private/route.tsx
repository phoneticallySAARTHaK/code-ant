import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_private')({
  beforeLoad: ({ context }) => {
    if (!context.auth) {
      redirect({
        to: '/login',
      })
    }
  },
})
