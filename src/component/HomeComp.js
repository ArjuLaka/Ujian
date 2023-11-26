import React from 'react';
import { Link } from 'react-router-dom';

function HomeComp() {
  return (
    <React.Fragment>
      <div className="master-container">
        <div className="bab-container">
          <h1>Senin</h1>
          <h2>27 November 2023</h2>
          <Link to="/bindo">
            <p>Bahasa Indonesia</p>
          </Link>
          <Link to="/fiqih">
            <p>fiqih</p>
          </Link>
        </div>
        <div className="bab-container">
          <h1>Selasa</h1>
          <h2>28 November 2023</h2>
          <Link to="/ppkn">
            <p>PPKN</p>
          </Link>
          <Link to="/akidah">
            <p>Akidah Akhlak</p>
          </Link>
        </div>
        <div className="bab-container">
          <h1>Rabu</h1>
          <h2>29 November 2023</h2>
          <Link to="/bing">
            <p>Bahasa Inggris</p>
          </Link>
          <Link to="/penjaskes">
            <p>Penjaskes</p>
          </Link>
        </div>
        <div className="bab-container">
          <h1>Kamis</h1>
          <h2>30 November 2023</h2>
          <Link to="/barab">
            <p>Bahasa Arab</p>
          </Link>
          <Link to="/kimia">
            <p>Kimia</p>
          </Link>
        </div>
        <div className="bab-container">
          <h1>Jum'at</h1>
          <h2>01 Desember 2023</h2>
          <Link to="/sejarah">
            <p>Sejarah Indonesia</p>
          </Link>
          <Link to="/fisika">
            <p>Fisika</p>
          </Link>
        </div>
        <div className="bab-container">
          <h1>Senin</h1>
          <h2>04 Desember 2023</h2>
          <Link to="/mtkw">
            <p>Matematika Wajib</p>
          </Link>
          <Link to="/sasing">
            <p>Sastra Inggris</p>
          </Link>
        </div>
        <div className="bab-container">
          <h1>Selasa</h1>
          <h2>05 Desember 2023</h2>
          <Link to="/biologi">
            <p>Biologi</p>
          </Link>
          <Link to="/senbud">
            <p>Seni Budaya</p>
          </Link>
          <Link to="/ski">
            <p>Sejarah Kebudayaan Islam</p>
          </Link>
        </div>
        <div className="bab-container">
          <h1>Rabu</h1>
          <h2>06 Desember 2023</h2>
          <Link to="/mtkp">
            <p>Matematika Peminatan</p>
          </Link>
          <Link to="/qurdis">
            <p>Al Quran Hadist</p>
          </Link>
          <Link to="/pkwu">
            <p>PKWU</p>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeComp;