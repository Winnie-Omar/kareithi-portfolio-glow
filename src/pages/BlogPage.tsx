import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import BlogComments from '@/components/BlogComments';

interface Blog {
  id: string;
  title: string;
  excerpt: string | null;
  content: string;
  image_url: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast({
        title: "Error",
        description: "Failed to load blog posts.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <button
              onClick={() => setSelectedBlog(null)}
              className="text-black hover:opacity-70 transition-opacity mb-8 inline-flex items-center gap-2"
            >
              ← Back to Blog
            </button>
            
            <article className="prose prose-lg max-w-none">
              {selectedBlog.image_url && (
                <img
                  src={selectedBlog.image_url}
                  alt={selectedBlog.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
                />
              )}
              
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-4">
                  {selectedBlog.title}
                </h1>
                
                <div className="flex items-center gap-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>Dr. Wanjiru Kareithi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{formatDate(selectedBlog.created_at)}</span>
                  </div>
                </div>
                
                {selectedBlog.excerpt && (
                  <p className="text-lg text-gray-700 font-medium leading-relaxed">
                    {selectedBlog.excerpt}
                  </p>
                )}
              </header>
              
              <div
                className="prose prose-lg max-w-none text-gray-800"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
            </article>
            
            <BlogComments blogId={selectedBlog.id} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
              Blog & Articles
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Insights, thoughts, and perspectives on law, policy, education, and social justice.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                  <CardHeader>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">No blog posts yet</h2>
              <p className="text-gray-600">Check back soon for new articles and insights.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Card
                  key={blog.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => setSelectedBlog(blog)}
                >
                  {blog.image_url && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={blog.image_url}
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        Article
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {formatDate(blog.created_at)}
                      </span>
                    </div>
                    <CardTitle className="font-playfair text-xl text-black hover:opacity-70 transition-opacity">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {blog.excerpt && (
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;