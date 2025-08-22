import { 
    IconHome,
  } from '@tabler/icons-react'
import TopMenuItem from './TopMenuItem'
import { menuItems } from '../../data/menudata'
import TopDropdown from './TopDropdown'
  function TopMenu() {
    return (
        <div className='navbar-expand-md'>
            <div className="collapse navbar-collapse" id="navbar-menu">
                <div className='navbar'>
                    <div className='container-xl'>
                        <div className='row flex-column flex-md-row flex-fill align-items-center'>
                            <div className='col'>
                                <ul className='navbar-nav'>
                                    {menuItems.map((item, index) => (
                                        item.dropdown ? 
                                        <TopDropdown key={index} {...item} /> : 
                                        <TopMenuItem key={index} {...item} />                                       
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
    )
  }

  export default TopMenu