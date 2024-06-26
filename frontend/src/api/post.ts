import { BASE_URL, api, customerHeader, ownerHeader } from '.';
import {
  MutateReq,
  StampEarningReqBody,
  CouponIdParams,
  CustomerIdParams,
  RegisterUserReqBody,
  IssueCouponReqBody,
  CouponSettingReqBody,
  CafeIdParams,
  CafeRegisterReqBody,
  IsFavoritesReqBody,
  CustomerLinkDataReqBody,
  AdminAccountDataReqBody,
} from '../types/api/request';

export const postEarnStamp = async ({
  params,
  body,
}: MutateReq<StampEarningReqBody, CouponIdParams & CustomerIdParams>) => {
  if (!params) return;
  return await api.post<StampEarningReqBody>(
    `/admin/customers/${params.customerId}/coupons/${params.couponId}/stamps`,
    ownerHeader(),
    body,
  );
};

export const postTemporaryCustomer = async ({ body }: MutateReq<RegisterUserReqBody>) => {
  return await api.post<RegisterUserReqBody>('/admin/temporary-customers', ownerHeader(), body);
};

export const postIssueCoupon = async ({
  params,
  body,
}: MutateReq<IssueCouponReqBody, CustomerIdParams>) => {
  if (!params) return;
  return await api
    .post<IssueCouponReqBody>(`/admin/customers/${params.customerId}/coupons`, ownerHeader(), body)
    .then((response) => response.json());
};

export const postCouponSetting = async ({
  params,
  body,
}: MutateReq<CouponSettingReqBody, CafeIdParams>) => {
  if (!params) return;
  return await api.post<CouponSettingReqBody>(
    `/admin/coupon-setting?cafe-id=${params.cafeId}`,
    ownerHeader(),
    body,
  );
};

export const postRegisterCafe = async ({ body }: MutateReq<CafeRegisterReqBody>) => {
  return await api.post<CafeRegisterReqBody>('/admin/cafes', ownerHeader(), body);
};

export const postIsFavorites = async ({
  params,
  body,
}: MutateReq<IsFavoritesReqBody, CafeIdParams>) => {
  if (!params) return;
  return await api.post<IsFavoritesReqBody>(
    `/cafes/${params.cafeId}/favorites`,
    customerHeader(),
    body,
  );
};

export const postUploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  return await fetch(`${BASE_URL}/admin/images`, {
    ...ownerHeader(),
    method: 'POST',
    body: formData,
  });
};

export const postCustomerPhoneNumber = async ({ body }: MutateReq<RegisterUserReqBody>) => {
  return await api.post<RegisterUserReqBody>('/profiles/phone-number', customerHeader(), body);
};

export const postCustomerLinkData = async ({ body }: MutateReq<CustomerLinkDataReqBody>) => {
  return await api.post<CustomerLinkDataReqBody>('/profiles/link-data', customerHeader(), body);
};

export const postAdminLogin = async ({ body }: MutateReq<AdminAccountDataReqBody>) => {
  return await api.post<AdminAccountDataReqBody>('/admin/login', ownerHeader(), body);
};

export const postAdminSignUp = async ({ body }: MutateReq<AdminAccountDataReqBody>) => {
  return await api.post<AdminAccountDataReqBody>('/admin/owners', ownerHeader(), body);
};
