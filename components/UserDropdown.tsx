import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { LogOut } from 'lucide-react'
import NavItems from './NavItems'
import { useRouter } from 'next/navigation'
import { signOut } from '@/lib/actions/auth.actions'

const UserDropdown = ({ user }: { user: User }) => {
  // const user = { name: 'Phil', email: 'philmkieti@hotmail.com' }
  const router = useRouter()
  const handleSignOut = async () => {
    await signOut()
    // localStorage.removeItem('token')
    router.push('/sign-in')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='flex items-center gap-3 text-gray-4 hover:text-yellow-500'
        >
          <Avatar className='h-8 w-8'>
            <AvatarImage
              src='https://avatars.githubusercontent.com/u/9834824?v=4'
              alt='@shadcn'
            />
            <AvatarFallback className='bg-yellow-500 text-yellow-5 text-sm font-bold'>
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className='hidden md:flex flex-col items-start'>
            <p className='text-sm font-medium text-gray-400 leading-none'>
              {user.name}
            </p>
            <p className='text-xs leading-none text-muted-foreground'>
              {user.email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='text-gray-400'>
        <DropdownMenuLabel>
          <div className='flex relative items-center gap-3 py-2'>
            <Avatar className='h-10 w-10'>
              <AvatarImage
                src='https://avatars.githubusercontent.com/u/9834824?v=4'
                alt='@shadcn'
              />
              <AvatarFallback className='bg-yellow-500 text-yellow-5 text-sm font-bold'>
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className='flex flex-col'>
              <span className='text-base font-medium text-gray-400'>
                {user.name}
              </span>
              <span className='text-sm text-gray-500'>{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className='bg-gray-600' />
        <DropdownMenuItem
          onClick={handleSignOut}
          className='text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer'
        >
          <LogOut className='h-4 w-4 mr-2 hidden sm:block' />
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator className='hidden sm:block bg-gray-600' />
        <nav className='sm:hidden'>
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown
