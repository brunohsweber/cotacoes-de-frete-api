interface ICreateQuotationDTO {
  id?: string;
  id_user: string;
  id_carrier: string;
  id_freight_type: string;
  sender_name: string;
  receiver_name: string;
  reference_doc: number;
  quotation_number: number;
  price: number;
  observations?: string | null;
  responsible: string;
  has_confirmed?: boolean | false;
  has_paid?: boolean | false;
}

export { ICreateQuotationDTO };