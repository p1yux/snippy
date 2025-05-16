import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'; 
import { DarkModeToggle } from '@/components/custom/buttons/DarkModeToggle';
import  LogOutButton  from '@/components/custom/buttons/LogOutButton';
import { getUser } from "@/auth/server"

async function NavBar() {
    const user = await getUser();

  return (
    <header className="bg-popover p-4 flex relative items-center justify-between" style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <Link className='flex items-end gap-2' href="/">
        <Image src="/img1.jpeg" width={60} height={60} alt='logo' className='rounded-full' priority></Image>
        <h1 className='flex flex-col pb-5 font-semibold leading-6 text-2xl'>Snippy</h1>
      </Link>
      <div className='flex gap-4'>
        {user ? (
            <LogOutButton />
        ) : (
            <>
                <Button asChild>
                    <Link href="/signup" className='text-sm font-semibold'>Signup</Link>
                </Button>
                <Button asChild>
                    <Link href="/login" className='text-sm font-semibold'>Login</Link>
                </Button>
            </>
        )}
        <DarkModeToggle />

      </div>
    </header>
  )
}

export default NavBar
