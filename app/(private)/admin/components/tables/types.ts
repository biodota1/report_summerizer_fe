export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  team: string;
  status: "active" | "inactive";
  created_at: string;
};

export type Report = {
  id: number;
  customer_name: string;
  account_name: string;
  service_type: string;
  reason: string;
  retention_strategy: string;
  offer_made: string;
  call_outcome: string;
  supervisor_id: string;
  team_id: string;
  submitted_by: string;
};
