import { atom } from 'jotai';

// 사용자 정보를 위한 atom
export const userAtom = atom({
  id: '',
  name: '',
  email: '',
  role: '',
});

// 디바이스 목록을 위한 atom
export const devicesAtom = atom<Array<{id: string, name: string, status: string}>>([]);

// 알림 개수를 위한 atom
export const notificationCountAtom = atom(0);

// 대시보드 요약 정보를 위한 atom
export const dashboardSummaryAtom = atom({
  totalDevices: 0,
  activeDevices: 0,
  totalUsers: 0,
  recentAlerts: [],
});
