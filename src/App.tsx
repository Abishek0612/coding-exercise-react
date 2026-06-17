import { useState } from 'react';
import './App.css';
import { Table } from './components/Table';
import { Search } from './components/Search';
import { Pagination } from './components/Pagination';
import { ThemeToggle } from './components/ThemeToggle';
import { useFetchData } from './hooks/useFetchData';
import { useTheme } from './hooks/useTheme';
import type { Comment } from './types';

const API_URL = 'https://jsonplaceholder.typicode.com/comments';
const ITEMS_PER_PAGE = 10;

function App() {
  const { theme, toggleTheme } = useTheme();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const { data, totalCount, loading, error } = useFetchData<Comment>(API_URL, {
    page,
    limit: ITEMS_PER_PAGE,
    search,
  });

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const handleSearchChange = (newSearch: string) => {
    setSearch(newSearch);
    setPage(1); // Reset to first page on new search
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1 className="app-title">Comments Explorer</h1>
            <p className="app-subtitle">Discover and manage user comments effortlessly</p>
          </div>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>

      <main className="app-main">
        <div className="controls-section">
          <Search 
            value={search} 
            onChange={handleSearchChange} 
            placeholder="Search comments by name or email..." 
          />
        </div>

        <div className="content-section">
          <Table data={data} loading={loading} error={error} />
        </div>

        {!error && data.length > 0 && (
          <div className="pagination-section">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
