<?php
require_once 'managers/DBManager.php';
require_once 'managers/BIManager.php';
require_once 'jwt_utils.php';

header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: OPTIONS,GET,POST,DELETE,PUT');
header('Content-Type: application/json');

$http_method = $_SERVER['REQUEST_METHOD'];

if ($http_method == "OPTIONS") {
  http_response_code(200);
  exit;
}

$token = validateJWT();

$dbManager = new DBManager();
$connexion = $dbManager->connect();
$biManager = new BIManager($connexion);

$type = $_GET['type'];

if($type==="sales"){
    echo json_encode($biManager->getStats());
}else if($type==="customer"){
    echo json_encode($biManager->getTopCustomer());
}

