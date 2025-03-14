<?php
function generatePIN() {
    return substr(str_shuffle("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 8);
}
$pin = generatePIN();
echo "Generated PIN: " . $pin;
?>
