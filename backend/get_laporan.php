<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$host = "dblaporlintas.cveca0kkk4bq.ap-southeast-2.rds.amazonaws.com";
$user = "admin";
$pass = "bariqazhar12";
$db   = "laporlintas";
$port = 3306;

$conn = new mysqli($host, $user, $pass, $db, $port);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Koneksi gagal"]);
    exit();
}

$sql = "SELECT id, nama, latitude, longitude FROM laporan WHERE latitude IS NOT NULL AND longitude IS NOT NULL";
$result = $conn->query($sql);

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
$conn->close();
?>


