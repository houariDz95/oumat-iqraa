import { auth } from '@/firebase';
import { Avatar, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
const ProfileMenu = ({isProfileMenuOpen, toggleProfileMenu, handleSignOut}) => {

  return (
    <div className='absolute mt-40'>
        <Menu
          open={isProfileMenuOpen}
          onClose={toggleProfileMenu}
          anchorEl={null}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          MenuListProps={{
            style: {
                
                width: '250px',
                padding: '15px',
                direction: 'rtl'
            }
          }}
        >
            <div className='mb-6 flex-col-center'> 
            <Avatar 
                src={auth?.currentUser?.photoURL}
                alt={auth?.currentUser?.displayName}
                sx={{ width: 80, height: 80, cursor: 'pointer' }}
                onClick={toggleProfileMenu}
            />
            <p className='mt-2'>{auth.currentUser.displayName}</p>
           </div>
          <MenuItem onClick={toggleProfileMenu}>
            <Link href={`/profile/${auth?.currentUser?.uid}`}>الملف الشخصي</Link>
          </MenuItem>
          <MenuItem onClick={toggleProfileMenu}>
            <Link href={`/profile/${auth?.currentUser?.uid}`}>الإعدادات</Link>
          </MenuItem>
          <MenuItem 
          sx={{
            marginTop: '5px',
            padding: '5px',
            borderTop: '1px solid lightgray',
          }}
          onClick={handleSignOut}> 
            تسجيل الخروج
        </MenuItem>
        </Menu>
    </div>
  )
}

export default ProfileMenu