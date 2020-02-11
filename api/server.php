<?php

ini_set('display_errors',1);
error_reporting(E_ALL);

require_once('vendor/autoload.php');

use Stripe\Charge, Stripe\Stripe;

// TODO: may not need
$request_method = $_SERVER["REQUEST_URI"];

Stripe::setApiKey('sk_test_t8sEn97EZkk6fyWW9bTTmEoP00qIku3U5g');

// Calculate order amount based on data in $order payload
function calculateOrderAmount($items) {
    $dollarAmount = 0;
    // Error check items
    if (!$items || !is_array($items)) {
        return $dollarAmount;
    }
    // Loop through items and calculate order amount
    foreach($items as $item) {
        // Ensure amounts are calculated in proper dollar format (Account for improper quantity or price formats from client)
        $dollarAmount += (floor($item["qty"]) * round($item["price"], 2));
    }

    // Convert amount to cents
    return intval($dollarAmount * 100);
}

$_POST = json_decode(file_get_contents('php://input'), true);
$amount = 0;

if (!empty($_POST["order"])) {

    // Get the order payload
    $order = $_POST["order"];

    // Get the order amount
    $amount = calculateOrderAmount($order["items"]);

    $charge = Charge::create(
        [
            'amount' => $amount,
            'currency' => 'usd',
            'source' => $order["token"]
        ]
    );

    // TODO: Further work here to check the returned charge value.. Check what successful payload should be
    // On success, Add purchase to database - update inventory and purchase tables (remove item from inventory and increment "pending_shipments" amount column accordingly)
    // "pending_shipments" amount columns needs to be updated again after item is shipped)
    // generate email to buyer and seller (ACF) regarding transaction
    var_dump($charge);

} else {
    var_dump($amount);
}