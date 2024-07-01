// import { Icons } from '@/components/icons';

import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircuitBoardIcon,
  Command,
  CreditCard,
  Edit,
  File,
  FileText,
  GripVertical,
  HelpCircle,
  Image,
  Laptop,
  LayoutDashboardIcon,
  Loader2,
  LogIn,
  LucideIcon,
  LucideProps,
  MenuIcon,
  Moon,
  MoreVertical,
  MoreHorizontal,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  User2Icon,
  UserX2Icon,
  X
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  add: Plus,
  arrowRight: ArrowRight,
  billing: CreditCard,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  close: X,
  dashboard: LayoutDashboardIcon,
  edit: Edit,
  ellipsis: MoreVertical,
  employee: UserX2Icon,
  grip: GripVertical,
  help: HelpCircle,
  kanban: CircuitBoardIcon,
  laptop: Laptop,
  login: LogIn,
  menu: MenuIcon,
  media: Image,
  moon: Moon,
  more: MoreHorizontal,
  page: File,
  pizza: Pizza,
  post: FileText,
  profile: User2Icon,
  settings: Settings,
  spinner: Loader2,
  sun: SunMedium,
  trash: Trash,
  user: User,
  warning: AlertTriangle,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  twitter: Twitter,
  check: Check,
  logo: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="prohealth"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9.616 20.846q-.667 0-1.141-.474Q8 19.897 8 19.23V16H4.77q-.667 0-1.142-.475-.474-.474-.474-1.14V12.5h5.565l1.854 2.78q.068.105.168.162t.232.058q.173 0 .304-.094t.192-.26l1.677-5.03 1.427 2.146q.076.106.189.172T15 12.5h5.846v1.885q0 .666-.474 1.14-.475.475-1.141.475H16v3.23q0 .667-.475 1.142-.474.474-1.14.474zm1.238-6.961-1.452-2.166q-.067-.104-.167-.161T9 11.5H3.154V9.616q0-.667.474-1.141Q4.103 8 4.77 8H8V4.77q0-.667.475-1.142.474-.474 1.14-.474h4.77q.666 0 1.14.474Q16 4.103 16 4.77V8h3.23q.667 0 1.142.475.474.474.474 1.14V11.5h-5.59L13.42 8.72q-.064-.098-.18-.159t-.245-.061q-.167 0-.285.094t-.18.26z"
      />
    </svg>
  )
};
