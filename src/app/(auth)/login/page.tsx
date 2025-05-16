import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import AuthForm from '@/components/custom/forms/auth/AuthForm'

function loginpage() {
  return (
    <div
      className='flex flex-col items-center'>
        <Card
        className='w-full max-w-sm p-6 shadow-md rounded-lg'>
            <CardHeader>
                <CardTitle className='text-2xl font-bold text-center'>Login</CardTitle>
                <p className='text-sm text-gray-500 text-center'>Please Authenticate.</p>
            </CardHeader>

            <AuthForm type="login" />
       
        </Card>
    </div>
  )
}

export default loginpage
