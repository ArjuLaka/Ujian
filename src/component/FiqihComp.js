import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../image/fiqih', false, /\.(png|jpe?g|svg)$/));

function FiqihComp() {
  return (
    <React.Fragment>
      <div className="master-container">
        <div className="bab-container" id="bab-01">
          <h1>Bab 01</h1>
          <div className="image-container">
            <img src={images['01-01.jpg']} alt="01-01" loading="lazy" />
            <img src={images['01-02.jpg']} alt="01-02" loading="lazy" />
            <img src={images['01-03.jpg']} alt="01-03" loading="lazy" />
          </div>
        </div>
        <div className="bab-container" id="bab-02">
          <h1>Bab 02</h1>
          <div className="image-container">
            <img src={images['02-01.jpg']} alt="02-01" loading="lazy" />
            <img src={images['02-02.jpg']} alt="02-02" loading="lazy" />
          </div>
        </div>
        <div className="bab-container" id="bab-03">
          <h1>Bab 03</h1>
          <div className="image-container">
            <img src={images['03-01.jpg']} alt="03-01" loading="lazy" />
            <img src={images['03-02.jpg']} alt="03-02" loading="lazy" />
            <img src={images['03-03.jpg']} alt="03-03" loading="lazy" />
          </div>
        </div>
        <div className="bab-container" id="bab-04">
          <h1>Bab 04</h1>
          <div className="image-container">
            <img src={images['04-01.jpg']} alt="04-01" loading="lazy" />
            <img src={images['04-02.jpg']} alt="04-02" loading="lazy" />
          </div>
        </div>
        <div className="bab-container" id="bab-05">
          <h1>Bab 05</h1>
          <div className="image-container">
            <img src={images['05-01.jpg']} alt="05-01" loading="lazy" />
            <img src={images['05-02.jpg']} alt="05-02" loading="lazy" />
            <img src={images['05-03.jpg']} alt="05-03" loading="lazy" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FiqihComp;