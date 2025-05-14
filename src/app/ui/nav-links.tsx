'use client';

import {
  IdentificationIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home',
    href: '/',
    icon: HomeIcon },
  {
    name: 'Projects',
    href: '/Projects',
    icon: DocumentDuplicateIcon,
  },
  // {
  //   name: 'Posts',
  //   href: '/Posts',
  //   icon: InboxIcon
  // },
  { name: 'Experience',
    href: '/Experience',
    icon: IdentificationIcon
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-indigo-950 hover:text-indigo-300 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-indigo-950 text-indigo-300': pathname === link.href,
                'bg-gray-50 text-indigo-950': pathname !== link.href,
              },
            )}          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
