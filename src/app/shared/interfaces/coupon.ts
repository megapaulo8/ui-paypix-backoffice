export interface Coupon {
  id: number;
  name: string;
  usageCount: number;
  adminName: string;
  adminEmail: string;
  creationTime: string;
  expirationTime: string;
  maxUsage: number;
  code: string;
  status: string;
  description: string;
}
