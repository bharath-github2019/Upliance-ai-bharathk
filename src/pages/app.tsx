import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateForm from './CreateForm';
import PreviewForm from './PreviewForm';
import MyForms from './MyForms';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/create">Create</Link> |{" "}
        <Link to="/preview">Preview</Link> |{" "}
        <Link to="/myforms">My Forms</Link>
      </nav>
      <Routes>
        <Route path="/create" element={<CreateForm />} />
        <Route path="/preview" element={<PreviewForm />} />
        <Route path="/myforms" element={<MyForms />} />
      </Routes>
    </div>
  );
}
