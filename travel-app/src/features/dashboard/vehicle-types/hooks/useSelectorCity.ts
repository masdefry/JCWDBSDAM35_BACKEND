import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axiosInstance from '@/utils/axiosInstance';

export default function useSelectorCity() {
  const session = useSession();
  const [cityList, setCityList] = useState<any>([]);

  const onGetCity = async () => {
    try {
      const response: any = await axiosInstance.get('/api/city', {
        headers: {
          Authorization: `Bearer ${session?.data?.user.accessToken}`,
        },
      });

      setCityList(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (session?.data?.user?.accessToken) onGetCity();
  }, [session]);

  return {
    cityList
  }
}
