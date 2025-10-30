import { useSession } from 'next-auth/react';
import axios from 'axios';

export default function usePostCreateVehicleApi() {
  const session = useSession();

  const handleCreateVehicle = async (fd: FormData) => {
    try {
      await axios.post('http://localhost:5001/api/vehicle-type', fd, {
        headers: {
          Authorization: `Bearer ${session?.data?.user?.accessToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleCreateVehicle
  }
}
