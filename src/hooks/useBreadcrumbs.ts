import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { breadcrumbItemsAtom, BreadcrumbItem } from '@atoms/ui';

const pathToLabel: Record<string, string> = {
  dashboard: 'Dashboard',
  accounts: 'Accounts',
  devices: 'Devices',
  tasks: 'Tasks',
  settings: 'Settings',
};

export const useBreadcrumbs = () => {
  const location = useLocation();
  const setBreadcrumbItems = useSetAtom(breadcrumbItemsAtom);

  useEffect(() => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadcrumbs: BreadcrumbItem[] = pathnames.map((value, index, array) => {
      const path = `/${array.slice(0, index + 1).join('/')}`;
      return {
        label: pathToLabel[value] || value,
        path,
      };
    });

    setBreadcrumbItems([...breadcrumbs]);
  }, [location, setBreadcrumbItems]);
};
