'use client';
import axiosInstance from '@/utils/axiosInstance';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Page() {
  const { token } = useParams();

  const onVerifyEmail = async () => {
    try {
      const response: any = await axiosInstance.get('/api/auth/verify-email', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onVerifyEmail();
  }, []);

  return <div></div>;
}
