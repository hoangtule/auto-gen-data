export interface StudentCSVProps {
  name?: string;
  first_name?: string;
  last_name?: string;
  first_name_phonetic?: string;
  last_name_phonetic?: string;
  email: string;
  enrollment_status: number;
  grade: number;
  phone_number?: number | string;
  birthday?: string;
  gender?: number | string;
  location?: string;
}
