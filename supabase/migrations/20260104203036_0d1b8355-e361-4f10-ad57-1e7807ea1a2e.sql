-- Remove the overly permissive public insert policy
-- Edge functions use service_role_key which bypasses RLS, so they will still work
-- This blocks direct anonymous database inserts that could bypass rate limiting
DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;

-- Create a restrictive policy that only allows authenticated users to insert
-- This adds an extra layer of protection while edge functions (using service role) still bypass RLS
CREATE POLICY "Authenticated users can insert leads"
ON public.leads
FOR INSERT
TO authenticated
WITH CHECK (true);