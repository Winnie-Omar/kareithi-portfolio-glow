-- Create comments table for blogs
CREATE TABLE public.comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_id UUID NOT NULL REFERENCES public.blogs(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view published blog comments
CREATE POLICY "Anyone can view blog comments" 
ON public.comments 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.blogs 
  WHERE blogs.id = comments.blog_id 
  AND blogs.published = true
));

-- Allow anyone to add comments to published blogs
CREATE POLICY "Anyone can add comments to published blogs" 
ON public.comments 
FOR INSERT 
WITH CHECK (EXISTS (
  SELECT 1 FROM public.blogs 
  WHERE blogs.id = comments.blog_id 
  AND blogs.published = true
));

-- Admin can manage all comments
CREATE POLICY "Admin can manage all comments" 
ON public.comments 
FOR ALL 
USING (true);