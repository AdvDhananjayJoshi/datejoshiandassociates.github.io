import React from 'react';

const Articles = () => {
  const articles = [
    {
      title: "Understanding Corporate Compliance in Modern Business",
      date: "December 15, 2024",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
    {
      title: "Recent Changes in Criminal Law Procedures",
      date: "November 28, 2024", 
      excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..."
    },
    {
      title: "Intellectual Property Rights in the Digital Age",
      date: "November 10, 2024",
      excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit..."
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-2">
          <h1 style={{ color: 'var(--primary-blue)', fontSize: '3rem', marginBottom: '1rem' }}>Articles & Blogs</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Stay informed with our latest insights on legal developments, case studies, and expert analysis from our team of experienced attorneys.
          </p>
        </div>

        <div className="articles-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <div className="article-image">
                <span>Article Image</span>
              </div>
              <div className="article-content">
                <div className="article-date">{article.date}</div>
                <h3 className="article-title">{article.title}</h3>
                <p>{article.excerpt}</p>
                <button 
                  className="btn-primary" 
                  style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
