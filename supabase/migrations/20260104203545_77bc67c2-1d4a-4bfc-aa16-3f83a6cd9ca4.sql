-- Remove the authenticated insert policy since all legitimate lead submissions
-- go through Edge Functions using service_role_key (which bypasses RLS)
-- This prevents any direct database inserts from authenticated users
DROP POLICY IF EXISTS "Authenticated users can insert leads" ON public.leads;