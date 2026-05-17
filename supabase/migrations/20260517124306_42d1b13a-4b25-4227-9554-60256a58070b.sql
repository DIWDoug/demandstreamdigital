UPDATE public.blogs SET category = 'local-seo' WHERE category = 'agency-growth';
ALTER TABLE public.blogs ALTER COLUMN category SET DEFAULT 'local-seo';