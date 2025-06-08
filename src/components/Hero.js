import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Kolom kiri: Narasi */}
          <div className="col-md-6">
            <h1 className="fw-bold mb-4">
              LaporLintas – Solusi Mudah untuk Melaporkan Masalah Lalu Lintas di Sekitar Anda
            </h1>
            <p className="mb-3">
              LaporLintas adalah platform pelaporan lalu lintas berbasis web yang memudahkan masyarakat untuk menyampaikan informasi terkait kondisi jalan raya secara langsung.
              Anda dapat melaporkan kemacetan, kecelakaan, lampu lalu lintas yang tidak berfungsi, atau hambatan lain yang mengganggu kelancaran lalu lintas.
            </p>
            <p className="mb-3">
              Setiap laporan yang Anda kirimkan akan diteruskan kepada petugas atau pihak berwenang agar dapat ditindaklanjuti secara cepat dan tepat.
              Dengan partisipasi aktif Anda, kita bersama dapat menciptakan lalu lintas yang lebih tertib dan aman untuk semua pengguna jalan.
            </p>
            <p className="fw-semibold">
              📞 <strong>Hotline Darurat:</strong><br />
              Call Center Kepolisian: <strong>110</strong> (24 Jam, Bebas Pulsa)<br />
              Info Lalu Lintas Nasional: <a href="https://ntmcpolri.info" target="_blank" rel="noreferrer">ntmcpolri.info</a>
            </p>
          </div>

          {/* Kolom kanan: Gambar ilustrasi */}
          <div className="col-md-6 text-center">
            <img
              src="https://laporlintas-s3.s3.ap-southeast-1.amazonaws.com/assets/Ilustrasi.png"
              alt="Ilustrasi LaporLintas"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
