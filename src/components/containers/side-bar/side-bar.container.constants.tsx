/* eslint-disable import/prefer-default-export */
import { UilNotes, UilShop, UilUsersAlt } from '@iconscout/react-unicons';

export const OptionsForAdmin = [
  {
    title: 'Entidade 1',
    href: '/admin/rota1',
    icon: <UilUsersAlt />,
  },
  {
    title: 'Entidade 2',
    href: '/admin/rota2',
    icon: <UilShop />,
  },
];

export const OptionsForUnitManager = [
  {
    title: 'Consultores',
    href: '/admin/consultores',
    icon: <UilUsersAlt />,
  },
  {
    title: 'Consultas',
    href: '/admin/consultas',
    icon: <UilNotes />,
  },
];
