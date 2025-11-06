'use server'

// import { success } from 'better-auth'
import { auth } from '@/lib/better-auth/auth'
import { inngest } from '@/lib/inngest/client'
import { headers } from 'next/headers'

export const signUpWithEmail = async ({
  email,
  password,
  fullName,
  country,
  investmentGoals,
  riskTolerance,
  preferredIndustry,
}: SignUpFormData) => {
  try {
    const response = await auth.api.signUpEmail({
      body: { email, password, name: fullName },
    })

    if (response) {
      await inngest.send({
        name: 'app/user.created',
        data: {
          email,
          name: fullName,
          country,
          investmentGoals,
          riskTolerance,
          preferredIndustry,
        },
      })
    }

    return { success: true, data: response }
  } catch (e) {
    console.log('Sign up failed', e)
    return { success: false, error: 'Sign up failed' }
  }
}

export const signInWithEmail = async ({ email, password }: SignInFormData) => {
  try {
    // console.log('email is : ', data, ' password is : ', data.password)
    const response = await auth.api.signInEmail({
      body: { email, password },
    })
    return { success: true, data: response }
  } catch (e) {
    console.log('Sign in failed', e)
    return { success: false, error: 'Sign in failed' }
  }
}

export const signOut = async () => {
  try {
    // await auth.api.signOut()
    const response = await auth.api.signOut({ headers: await headers() })
    return { success: true, data: response }
  } catch (e) {
    console.log('Sign out failed', e)
    return { success: false, error: 'Sign out failed' }
  }
}

// export const getUser = async () => {
//   try {
//     const response = await auth.api.getUser()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('Get user failed', e)
//     return { success: false, error: 'Get user failed' }
//   }
// }

// export const refreshUser = async () => {
//   try {
//     const response = await auth.api.refreshUser()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('Refresh user failed', e)
//     return { success: false, error: 'Refresh user failed' }
//   }
// }

// export const getSession = async () => {
//   try {
//     const response = await auth.api.getSession()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('Get session failed', e)
//     return { success: false, error: 'Get session failed' }
//   }
// }

// export const deleteSession = async () => {
//   try {
//     const response = await auth.api.deleteSession()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('Delete session failed', e)
//     return { success: false, error: 'Delete session failed' }
//   }
// }

// export const updateSession = async () => {
//   try {
//     const response = await auth.api.updateSession()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('Update session failed', e)
//     return { success: false, error: 'Update session failed' }
//   }
// }

// export const getAccount = async () => {
//   try {
//     const response = await auth.api.getAccount()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('Get account failed', e)
//     return { success: false, error: 'Get account failed' }
//   }
// }

// export const updateAccount = async () => {
//   try {
//     const response = await auth.api.updateAccount()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('Update account failed', e)
//     return { success: false, error: 'Update account failed' }
//   }
// }

// export const deleteAccount = async () => {
//   try {
//     const response = await auth.api.deleteAccount()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('Delete account failed', e)
//     return { success: false, error: 'Delete account failed' }
//   }
// }

// export const linkAccount = async () => {
//   try {
//     const response = await auth.api.linkAccount()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('Link account failed', e)
//     return { success: false, error: 'Link account failed' }
//   }
// }

// export const unlinkAccount = async () => {
//   try {
//     const response = await auth.api.unlinkAccount()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('Unlink account failed', e)
//     return { success: false, error: 'Unlink account failed' }
//   }
// }

// export const listAccounts = async () => {
//   try {
//     const response = await auth.api.listAccounts()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('List accounts failed', e)
//     return { success: false, error: 'List accounts failed' }
//   }
// }

// export const createAccount = async () => {
//   try {
//     const response = await auth.api.createAccount()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('Create account failed', e)
//     return { success: false, error: 'Create account failed' }
//   }
// }

// export const createSession = async () => {
//   try {
//     const response = await auth.api.createSession()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('Create session failed', e)
//     return { success: false, error: 'Create session failed' }
//   }
// }

// export const createVerificationToken = async () => {
//   try {
//     const response = await auth.api.createVerificationToken()
//     return { success: true, data: response }
//   } catch (e) {
//     console.log('Create verification token failed', e)
//     return { success: false, error: 'Create verification token failed' }
//   }
// }
