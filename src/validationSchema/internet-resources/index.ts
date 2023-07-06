import * as yup from 'yup';

export const internetResourceValidationSchema = yup.object().shape({
  url: yup.string().required(),
  description: yup.string(),
  business_id: yup.string().nullable(),
});
