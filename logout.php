<?php
session_start();
session_unset();
session_destroy();
header("locatiom:login.php")