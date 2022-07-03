import {
  faClockRotateLeft,
  faHouse,
  faTableColumns,
  faUsers,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

interface IRoute {
  path: string
  caption: string
  icon: IconDefinition
}

enum Pages {
  KANBAN = 'Kanban',
  STAT = 'Statistics',
  TEAM = 'Team',
  DASH = 'Dashboard',
  HISTORY = 'History'
}

export const routes: IRoute[] = [
  // {
  //   path: '/team',
  //   caption: Pages.TEAM,
  //   icon: faUsers
  // },
  {
    path: '/kanban',
    caption: Pages.KANBAN,
    icon: faTableColumns,
  },
  // {
  //   path: '/dashboard',
  //   caption: Pages.DASH,
  //   icon: faHouse,
  // },
  {
    path: '/history',
    caption: Pages.HISTORY,
    icon: faClockRotateLeft
  }
]
