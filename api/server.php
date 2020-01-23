<?php
require_once('vendor/autoload.php');

use Stripe\Charge, Stripe\Stripe;

$request_method = $_SERVER["REQUEST_URI"];

Stripe::setApiKey('pk_test_ty0U4ZQg7NtgbvGNHb5TPYga00tifMogTU');


// TODO: API has to run credit card purchase first and if successful,
// submit order - adds order to database and notification sent to buyer and seller via email
// Create helper function to calculate order amount based on data in $order payload
function calculateOrder($order) {

}

var_dump($_POST);

switch($request_method) {
    case 'POST':
        if (!empty($_POST["order"])) {
            $order = $_POST["order"];
            var_dump($order);

            // Do strip charge actions
            /*
            $charge = Charge::create(
                array(
                    'amount' => 1,
                    'currency' => 'usd',
                    'source' => '$token'
                )
            );
            */
        }
        break;
}
