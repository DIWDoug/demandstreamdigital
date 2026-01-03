-- Add UPDATE and DELETE policies to leads table (admin only)
CREATE POLICY "Only admins can update leads"
ON public.leads
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete leads"
ON public.leads
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add UPDATE and DELETE policies to blogs table (admin only)
CREATE POLICY "Only admins can update blogs"
ON public.blogs
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete blogs"
ON public.blogs
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add INSERT policy for blogs (admin only)
CREATE POLICY "Only admins can insert blogs"
ON public.blogs
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Add explicit INSERT policy for user_roles (admin only, prevents privilege escalation)
CREATE POLICY "Only admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));