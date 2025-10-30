import * as Yup from 'yup';

export const createVehicleTypeSchema = Yup.object().shape({
  name: Yup.string().required('Vehicle name is required'),
  totalSeat: Yup.string().required('Total seat is required'),
  description: Yup.string().required('Description is required'),
  images: Yup.array()
    .of(
      Yup.mixed<File>()
        .nullable()
        .test('fileSize', 'Maximum file size is 2MB', (file) => {
          if (!file) return true; // skip validation if file not present yet
          const maxSize = 2 * 1024 * 1024; // 2 MB
          return file.size <= maxSize;
        })
        .test('fileFormat', 'Unsupported file format', (file) => {
          if (!file) return true;
          const allowedFormats = ['jpg', 'jpeg', 'png', 'webp'];
          const ext = file.name.split('.').pop()?.toLowerCase();
          return !!ext && allowedFormats.includes(ext);
        })
    )
    .min(1, 'At least one image must be selected')
    .max(3, 'You can only upload up to 3 images'),
});
