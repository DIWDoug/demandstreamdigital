-- Add explicit RESTRICTIVE policy to deny all direct INSERT operations on leads table
-- Edge functions using service_role key bypass RLS, so they can still insert
CREATE POLICY "No direct insert allowed" 
ON public.leads 
FOR INSERT 
TO public
WITH CHECK (false);