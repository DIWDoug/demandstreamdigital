-- Create leads table to store form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  phone_country_code TEXT DEFAULT '+1',
  website TEXT,
  revenue TEXT,
  source TEXT NOT NULL DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS (but allow public inserts for lead capture)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert leads (public form submissions)
CREATE POLICY "Anyone can insert leads"
ON public.leads
FOR INSERT
WITH CHECK (true);

-- Policy: Only authenticated users can read leads (admin access)
CREATE POLICY "Authenticated users can read leads"
ON public.leads
FOR SELECT
USING (auth.role() = 'authenticated');