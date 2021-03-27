
import Avatar from '@material-ui/core/Avatar';
import profile from '../../static/images/profile.jpg'
import SideMenu from '../SideMenu/sideMenu'
import './Header.scss';


const Header = () => {

    return (
        <div className='headerContainer'>
             <SideMenu></SideMenu>
            <h5 className='title'>PLN Asset Management System</h5>
            <div className='avatar'>
                <Avatar alt="Profile" src={profile} />
            </div>
        </div>
    )
}

export default Header
