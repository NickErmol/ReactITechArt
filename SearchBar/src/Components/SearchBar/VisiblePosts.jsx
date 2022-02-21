import React from 'react';
import PropTypes from 'prop-types';

export default function VisiblePosts({ allPosts, query }) {
  const filterPosts = (posts, searchQuery) => {
    if (!searchQuery) {
      return posts;
    }

    return posts.filter(post => {
      const postName = post.name.toLowerCase();
      return postName.includes(searchQuery);
    });
  };
  const filteredPosts = filterPosts(allPosts, query);

  return (
    <div>
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}

VisiblePosts.propTypes = {
  query: PropTypes.string.isRequired,
  allPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
