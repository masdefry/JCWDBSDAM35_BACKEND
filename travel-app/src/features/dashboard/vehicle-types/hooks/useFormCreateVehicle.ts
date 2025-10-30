import { useFormik } from 'formik';
import { createVehicleTypeSchema } from '@/features/dashboard/vehicle-types/schemas/createVehicleTypeSchema';
import usePostCreateVehicleApi from '../api/usePostCreateVehicleApi';

export default function useFormCreateVehicle() {
  const { handleCreateVehicle } = usePostCreateVehicleApi();

  const formik = useFormik({
    initialValues: {
      name: '',
      totalSeat: '',
      description: '',
      images: [] as File[],
    },
    validationSchema: createVehicleTypeSchema,
    onSubmit: async (values) => {
      const fd = new FormData();
      fd?.append('name', values?.name);
      fd?.append('availableSeat', values?.totalSeat);
      fd?.append('description', values?.description);
      values?.images?.forEach((item) => {
        fd?.append('vehicleImages', item);
      });

      handleCreateVehicle(fd);
    },
  });

  return {
    formik,
  };
}
