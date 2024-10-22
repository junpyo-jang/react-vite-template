import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { devicesAtom } from '@atoms/device';
import './index.css';

const Devices: React.FC = () => {
  const [devices, setDevices] = useAtom(devicesAtom);

  useEffect(() => {
    // API에서 디바이스 목록을 가져오는 함수
    const fetchDevices = async () => {
      // API 호출 로직
      const response = await fetch('/api/devices');
      const data = await response.json();
      setDevices(data);
    };

    fetchDevices();
  }, [setDevices]);

  return (
    <div className="devices">
      <h1>디바이스 관리</h1>
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            {device.name} - 상태: {device.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Devices;
