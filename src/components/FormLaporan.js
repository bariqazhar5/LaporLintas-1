import React, { useState } from 'react';
import MapSelector from './MapSelector';

function FormLaporan() {
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [koordinat, setKoordinat] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nama,
      deskripsi,
      lat: koordinat?.lat || null,
      lng: koordinat?.lng || null,
    };

    // Kirim data ke backend
    fetch('http://52.65.94.150/simpan_laporan.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result.message || 'Laporan berhasil dikirim!');
        // Reset form
        setNama('');
        setDeskripsi('');
        setKoordinat(null);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Gagal mengirim laporan.');
      });
  };

  return (
    <div className="container py-4">
      <h3>Form Pengaduan</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nama</label>
          <input
            type="text"
            className="form-control"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Deskripsi</label>
          <textarea
            className="form-control"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Pilih Lokasi di Peta:</label>
          <MapSelector onSelect={setKoordinat} />
          {koordinat && (
            <small className="text-muted d-block mt-2">
              Koordinat dipilih: {koordinat.lat.toFixed(5)}, {koordinat.lng.toFixed(5)}
            </small>
          )}
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Kirim Laporan
        </button>
      </form>
    </div>
  );
}

export default FormLaporan;
