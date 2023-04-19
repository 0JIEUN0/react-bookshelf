import React from 'react';
import './App.css';

export default function MemoModal(props) {
  const { open, close, header } = props;

  return (
    // generate openModal class when modal open
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="save" onClick={close}>
              save
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};
