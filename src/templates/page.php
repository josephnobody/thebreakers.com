<?php
/* ==================================================
  This is a template loader for a static PHP site.
================================================== */
$root = getcwd();
$path = "/templates/";

// Get home page template name for root path
if($slug == ""){
	$file = "home.php";
} else {
	$file = $slug . ".php";
}

if(file_exists($root . $path . $file)){
	require($root . $path . "header.php");
	require($root . $path . $file);
	require($root . $path . "footer.php"); 
} else {
	// Send 404 Header
	header("HTTP/1.0 404 Not Found");
	$site_title = SITE_NAME . " | 404";
	require($root . $path . "header.php");
	require($root . $path . "404.php");
	require($root . $path . "footer.php"); 
}
?>