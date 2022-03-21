import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

export default function VisiblePosts({ allPosts, query }) {
  const posts = useMemo(() => {
    let filteredPosts = allPosts;
    if (query) {
      filteredPosts = allPosts.filter(post => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
      });
    }
    return filteredPosts.map(post => <li key={post.id}>{post.name}</li>);
  }, [allPosts, query]);

  return (
    <div>
      <ul>{posts}</ul>
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
