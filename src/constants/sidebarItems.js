import {MdDashboard, MdAccountCircle, MdMessage, MdCreate, MdShowChart, MdAddAlert } from 'react-icons/md'

const sidebarItems = [
   {
      icon: <MdDashboard />,
      title: 'Home',
      link: '/'
   },
   {
      icon: <MdAccountCircle />,
      title: 'Account',
      link: '/account'
   },
   {
      icon: <MdMessage />,
      title: 'Health',
      link: '/health'
   },
   {
      icon: <MdShowChart />,
      title: 'About',
      link: '/about'
   },
   {
      icon: <MdAddAlert />,
      title: 'Notification',
      link: '/notification'
   }
]

export default sidebarItems
