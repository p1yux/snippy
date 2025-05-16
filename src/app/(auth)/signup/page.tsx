import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import AuthForm from '@/components/custom/forms/auth/AuthForm'


function SignUpPage() {
  return (
    <div
      className='flex flex-col items-center'>
        <Card
        className='w-full max-w-sm p-6 shadow-md rounded-lg'>
            <CardHeader>
                <CardTitle className='text-2xl font-bold text-center'>Register</CardTitle>
                <p className='text-sm text-gray-500 text-center'>Please enter your details.</p>
            </CardHeader>

            <AuthForm type="register" />
       
        </Card>
    </div>
  )
}

export default SignUpPage
