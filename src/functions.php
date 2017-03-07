<?php
/* ==================================================
  Set the slug for the template loader
================================================== */
$uri = explode("?", $_SERVER["REQUEST_URI"]);
$tokens = explode("/", $uri[0]);
$slug = $tokens[count($tokens) - 2];
if($slug !== ""){
	$site_title = " | " . ucwords(str_replace("-", " ", $slug));
} else {
	$site_title = "";
}
/* ==================================================
  Globals - Edit these when you need them
================================================== */
define("SITE_NAME", "Montauk Breakers");

$site_title = SITE_NAME . $site_title;

?>