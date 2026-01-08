-- Drop the restrictive SELECT policy
DROP POLICY IF EXISTS "Blogs are publicly readable" ON public.blogs;

-- Create a PERMISSIVE policy instead (the default)
CREATE POLICY "Blogs are publicly readable"
ON public.blogs
FOR SELECT
TO anon, authenticated
USING (true);