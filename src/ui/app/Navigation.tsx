import { Menubar } from 'primereact/menubar'
import { InputText } from 'primereact/inputtext'
import { useNavigate } from 'react-router-dom';

export function Navigation() {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <Menubar className='border-noround'
          model={[{
            label: 'Cats',
            icon: 'pi pi-fw pi-github',
            command: () => navigate('/'),
          }, {
            label: 'About',
            icon: 'pi pi-fw pi-file',
            command: () => navigate('/about'),
          }]}

          start={<img alt="logo" src="logo192.png" height="40" className="mr-2" />}
          end={<InputText placeholder="Search" type="text" className="w-full" />}
        />
      </nav>
    </header>
  )
}