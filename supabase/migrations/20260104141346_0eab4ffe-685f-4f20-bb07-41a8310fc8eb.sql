-- Add category column to blogs table for categorization
ALTER TABLE public.blogs 
ADD COLUMN category text DEFAULT 'agency-growth';

-- Add an index for category filtering
CREATE INDEX idx_blogs_category ON public.blogs(category);

-- Update existing blogs with category based on title/slug patterns
UPDATE public.blogs SET category = 'white-label-seo' 
WHERE slug ILIKE '%white-label%' OR slug ILIKE '%seo%' OR title ILIKE '%white-label%' OR title ILIKE '%seo%';

UPDATE public.blogs SET category = 'local-seo' 
WHERE (slug ILIKE '%local%' OR title ILIKE '%local%') AND category = 'agency-growth';

UPDATE public.blogs SET category = 'paid-media' 
WHERE (slug ILIKE '%ppc%' OR slug ILIKE '%ads%' OR title ILIKE '%ppc%' OR title ILIKE '%google ads%') AND category = 'agency-growth';

UPDATE public.blogs SET category = 'content-marketing' 
WHERE (slug ILIKE '%content%' OR title ILIKE '%content%') AND category = 'agency-growth';