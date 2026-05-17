CREATE TABLE public.refund_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  workspace_name text NOT NULL,
  summary text NOT NULL,
  contact_email text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.refund_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a refund request"
  ON public.refund_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(trim(workspace_name)) BETWEEN 1 AND 200
    AND length(trim(summary)) BETWEEN 10 AND 5000
    AND (contact_email IS NULL OR length(contact_email) <= 320)
  );

CREATE POLICY "Only admins can read refund requests"
  ON public.refund_requests
  FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete refund requests"
  ON public.refund_requests
  FOR DELETE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));