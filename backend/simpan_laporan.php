<?php
// Tampilkan error PHP (untuk debugging saat pengembangan)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// === Header CORS agar bisa diakses dari React (port 3000) ===
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// === Tangani Preflight (OPTIONS) ===
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// === Koneksi ke database 

$host = "dblaporlintas.cveca0kkk4bq.ap-southeast-2.rds.amazonaws.com";
$user = "admin";
$pass = "bariqazhar12"; 
$db   = "laporlintas";
$port = 3306;

$conn = new mysqli($host, $user, $pass, $db, $port);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Koneksi database gagal: " . $conn->connect_error
    ]);
    exit();
}

// === Ambil JSON dari body request ===
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

// === Validasi JSON ===
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Data JSON tidak valid."
    ]);
    exit();
}

// === Ambil dan validasi field ===
$nama = $conn->real_escape_string($data['nama'] ?? '');
$deskripsi = $conn->real_escape_string($data['deskripsi'] ?? '');
$lat = isset($data['lat']) ? (float)$data['lat'] : null;
$lng = isset($data['lng']) ? (float)$data['lng'] : null;

if (empty($nama) || empty($deskripsi)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Nama dan deskripsi wajib diisi."
    ]);
    exit();
}

// === Simpan kee database ===
$sql = "INSERT INTO laporan (nama, deskripsi, latitude, longitude)
        VALUES ('$nama', '$deskripsi', $lat, $lng)";

if ($conn->query($sql) === TRUE) {
    echo json_encode([
        "success" => true,
        "message" => "Laporan berhasil disimpan!"
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Gagal menyimpan: " . $conn->error
    ]);
}

$conn->close();
?>
