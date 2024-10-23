import { atom } from 'jotai';

export const selectedTabAtom = atom<string>('dashboard');

// 메인 레이아웃에서 빵부 아이템을 위한 atom

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export const breadcrumbItemsAtom = atom<BreadcrumbItem[]>([]);
