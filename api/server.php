<?php
require_once('vendor/autoload.php');

use Stripe\Charge, Stripe\Stripe;

// TODO: may not need
$request_method = $_SERVER["REQUEST_URI"];

Stripe::setApiKey('pk_test_ty0U4ZQg7NtgbvGNHb5TPYga00tifMogTU');

// TODO: API has to run credit card purchase first and if successful,
// submit order - adds order to database and notification sent to buyer and seller via email
// Create helper function to calculate order amount based on data in $order payload
function calculateOrderAmount($items) {
    $amount = 0;
    // Error check items
    if (!$items || !is_array($items)) {
        return $amount;
    }
    // Loop through items and calculate order amount
    foreach($items as $item) {
        $amount = $amount + ($item["qty"] * $item["price"]);
    }
    return $amount;
}

$_POST = json_decode(file_get_contents('php://input'), true);

if (!empty($_POST["order"])) {

    // Get the order payload
    $order = $_POST["order"];

    // Get the order amount
    $amount = calculateOrderAmount($order["items"]);

    $charge = Charge::create(
        array(
            'amount' => $amount,
            'currency' => 'usd',
            'source' => $order["token"]
        )
    );

    var_dump($charge);
}