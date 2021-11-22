import React, { useEffect, useState } from 'react';
import { search } from '../services/user.service';
import SearchResult from './SearchResult/SearchResult';

function Search() {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!query.trim().length) {
            return;
        }
        search(query)
            .then(usersFound => setResults(usersFound))
            .catch(e => console.log(e));
    }, [query]);

    return (
        <div>
            <h1>Search</h1>
            <form>
                <input value={query} onChange={e => setQuery(e.target.value)} />
            </form>
            <hr />
            <div>
                {results.map(result => <SearchResult user={result} key={result._id} />)}
            </div>
        </div>
    );
}

export default Search;