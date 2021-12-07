<?
$id = $_REQUEST['id'];
$fio = $_REQUEST['fio'];
$sex = $_REQUEST['sex'];
$class = $_REQUEST['class'];
$pass = $_REQUEST['pass'];
$agree = $_REQUEST['agree'];

header("Content-type: text/html; charset=utf-8");

echo "<p>$id<p>$fio<p>$sex<p>$class<p>$pass<p>$agree";
?>