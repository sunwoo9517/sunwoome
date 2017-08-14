<?php
  require("config.php");
  $conn = mysqli_connect($config["host"], $config["duser"], $config["dpw"]);
  mysqli_select_db($conn, $config["dname"]);

  $id = mysqli_real_escape_string($conn, $_POST["id"]);
  $sql = 'DELETE topic, user FROM topic LEFT JOIN user ON topic.author = user.id WHERE topic.id='.$id;
  if ($conn->query($sql) === TRUE) {
    echo "<script>alert('Record deleted successfully')</script>";
  } else {
    echo "<script>alert(Error deleting record: '".$conn->error."')</script>";
  }
  $conn->close();
  header('Location: board.php');
 ?>
