import React from 'react';
import './Table.css';
import type { Comment } from '../types';

interface TableProps {
  data: Comment[];
  loading: boolean;
  error: string | null;
}

export const Table: React.FC<TableProps> = ({ data, loading, error }) => {
  if (loading && data.length === 0) {
    return (
      <div className="table-state-container">
        <div className="spinner"></div>
        <p>Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="table-state-container error">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!loading && data.length === 0) {
    return (
      <div className="table-state-container">
        <p>No results found.</p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th className="col-id">ID</th>
            <th className="col-name">Name</th>
            <th className="col-email">Email</th>
            <th className="col-body">Comment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="table-row">
              <td className="col-id" data-label="ID">{item.id}</td>
              <td className="col-name" data-label="Name">
                <div className="cell-content fw-600">{item.name}</div>
              </td>
              <td className="col-email" data-label="Email">
                <a href={`mailto:${item.email}`} className="email-link">{item.email}</a>
              </td>
              <td className="col-body" data-label="Comment">
                <div className="cell-content text-truncate">{item.body}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && (
        <div className="table-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};
