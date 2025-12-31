-- Add policies for admin to manage blog posts
-- For now, allow all operations until authentication is added

CREATE POLICY "Allow all blog post operations"
ON public.blog_posts FOR ALL
USING (true)
WITH CHECK (true);

-- Also allow viewing contact submissions in admin
CREATE POLICY "Anyone can view contact submissions"
ON public.contact_submissions FOR SELECT
USING (true);