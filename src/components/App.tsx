import React from 'react';
import useDebounce from '../hooks/useDebounce';
import { Notice } from '../models/notice';
import './App.css';

const endpoint = `https://ws-public.interpol.int/notices/v1/red?`;

function App() {
  const [notices, setNotices] = React.useState<Notice[]>([])
  const [search, setSearch] = React.useState<string>("")
  const [loading, setLoading] = React.useState<boolean>(false)

  const debouncedSearch = useDebounce(search, 500)

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const response = await fetch(endpoint + new URLSearchParams({
        forename: debouncedSearch
      }))

      const data = await response.json()
      setNotices(data._embedded.notices)
      setLoading(false)
    }

    if (debouncedSearch) { fetchData() }
    else setNotices([])
  }, [debouncedSearch])


  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <input type="search" onChange={handleSearch} placeholder="Search..." />

      {loading && <p>Loading...</p>}

      {!loading && notices.map((notice: Notice) =>
        <div key={notice.entity_id}>{notice.forename}</div>)}
    </div>
  );
}

export default App;
