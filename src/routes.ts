import {
  faCircleQuestion,
  faClockRotateLeft,
  faTableColumns,
  faUsers,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

interface IRoute {
  path: string
  caption: string
  icon: IconDefinition
}

enum PageTitle {
  KANBAN = 'Kanban',
  STAT = 'Statistics',
  TEAM = 'Team',
  HISTORY = 'History',
  USAGE = 'Usage'
}

export enum PagePath {
  KANABN = '/kanban',
  HISTORY = '/history',
  STAT = '/stat',
  USAGE = '/usage',
}

export const routes: IRoute[] = [
  // {
  //   path: '/team',
  //   caption: Pages.TEAM,
  //   icon: faUsers
  // },
  {
    path: PagePath.KANABN,
    caption: PageTitle.KANBAN,
    icon: faTableColumns,
  },
  // {
  //   path: '/dashboard',
  //   caption: Pages.DASH,
  //   icon: faHouse,
  // },
  {
    path: PagePath.HISTORY,
    caption: PageTitle.HISTORY,
    icon: faClockRotateLeft
  },
  {
    path: PagePath.USAGE,
    caption: PageTitle.USAGE,
    icon: faCircleQuestion
  }
]
