import * as Yup from 'yup';

export const createVehicleTypeSchema = Yup.object().shape({
  name: Yup.string().required('Vehicle name is required'),
  totalSeat: Yup.string().required('Total seat is required'),
  description: Yup.string().required('Description is required'),
  images: Yup.array()
    .min(1, 'At least one image selected')
    .of(
      Yup.mixed<File>()
        .test('limitFileSize', 'Maximum file size is 2mb', (file) => {
          const maxFileSize = 2 * 1024 * 1024;

          return file && file.size < maxFileSize;
        })
        .test('fileFormatValidation', 'Format file not accepted', (file) => {
          const selectedFileFormat = file?.name?.split('.').slice(-1)[0];
          const acceptedFileFormat = ['jpg', 'jpeg', 'png', 'webp'];

          return file && acceptedFileFormat.includes(selectedFileFormat!);
        })
    ),
});
