'use client'

import InputField from '@/components/forms/InputField'
// import SelectField from '@/components/forms/SelectField'
import { Button } from '@/components/ui/button'
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from '@/lib/constants'
import { useForm } from 'react-hook-form'
import SelectField from '@/components/forms/SelectField'
import { CountrySelectField } from '@/components/forms/CountrySelectField'
import FooterLink from '@/components/forms/FooterLink'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      // password: '',
      country: 'US',
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology',
    },
    // resolver: async (data) => {
    //   return {
    //     values: data,
    //     errors: {},
    //   }
    // },
    mode: 'onBlur',
  })
  // const onSubmit: SubmitHandler<FieldValues> = (data) => {
  //   if (data) {
  //     console.log(data)
  //   }
  // }
  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log('data is', data)
    } catch (error) {
      console.log('error is', error)
    }
  }
  return (
    <>
      <h1 className='form-title'>Sign Up & Personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <InputField
          name='fullName'
          // control={control}
          label='Full Name'
          placeholder='Phil M Kieti'
          register={register}
          error={errors.fullName}
          validation={{ required: 'Full name is required', minLength: 2 }}
          // required
        />

        <InputField
          name='email'
          // control={control}
          label='Email'
          placeholder='philmkieti@hotmail.com'
          register={register}
          error={errors.email}
          validation={{
            required: 'Email is required',
            minLength: 2,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          // required
        />

        <InputField
          name='password'
          label='Password'
          placeholder='Enter a strong password'
          type='password'
          register={register}
          error={errors.password}
          validation={{ required: 'Password is required', minLength: 2 }}
        />

        <CountrySelectField
          name='country'
          label='Country'
          control={control}
          errors={errors.country}
          required
        />

        <SelectField
          name='investmentGoals'
          label='InvestmentGoals'
          placeholder='Select your investment goal(s)'
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />

        <SelectField
          name='riskTolerance'
          label='Risk Tolerance'
          placeholder='Select your risk level'
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />

        <SelectField
          name='preferredIndustry'
          label='Preferred Industry'
          placeholder='Select your preferred industry'
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />

        <Button
          type='submit'
          disabled={isSubmitting}
          className='yellow-btn w-full mt-5'
        >
          {isSubmitting ? 'Creating Account' : 'Start Your Investing Journey'}
        </Button>

        <FooterLink
          text='Already have an account?'
          linkText='Sign in'
          href='/sign-in'
        />
      </form>
    </>
  )
}

export default SignUp
