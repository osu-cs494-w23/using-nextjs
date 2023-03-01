import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/*
 * This Search component always executes an API call on the client side, using
 * the useEffect() hook.
 */
export default function Search({ repos }) {
  const router = useRouter();
  const query = router.query.q;
  const [ inputQuery, setInputQuery ] = useState(query || "");

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        router.push(`${router.pathname}?q=${inputQuery}`);
      }}>
        <input
          value={inputQuery}
          onChange={e => setInputQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {!repos && <p>Loading...</p> }
      {repos && (
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.full_name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const query = context.query.q
  console.log("== Fetching search results for query:", query)

  let repos = []
  if (query) {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${query}&sort=stars`
    )
    const responseBody = await response.json()
    repos = responseBody.items || []
  }

  return {
    props: {
      repos: repos
    }
  }
}
