import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import './Home.css';

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="pages-home">
      Em breve!!!
      <br />
      <button type="button" onClick={() => setToken(null)}>
        Sair
      </button>
    </div>
  );
};

export default PagesHome;
