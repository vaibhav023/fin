export interface UpdateUserParams {
  clerkId: string;
  updateData: Partial<IUser>;
}

export interface UpdateUserDetailParams {
  clerkId: string;
  details: boolean;
  pan: string;
  aadhar: string;
  dob: string;
  account_type: string;
  holder_name: string;
  accountNo: string;
  ifsc: string;
  entity: string;
  company_name: string;
  display: string;
  category: string;
  sub_category: string;
  turnover: string;
  gstin: string;
  org_pan: string;
  website_url: string;
  app_url: string;
  registered_address: string;
  state: string;
  city: string;
  pincode: string;
  operating_address: string;
  state2: string;
  city2: string;
  pincode2: string;
  description: string;
}

