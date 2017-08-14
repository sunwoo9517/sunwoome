<?php
  require("config.php");
  $conn = mysqli_connect($config["host"], $config["duser"], $config["dpw"]);
  mysqli_select_db($conn, $config["dname"]);

  $title = mysqli_real_escape_string($conn, $_POST["title"]);
  $name = mysqli_real_escape_string($conn, $_POST["name"]);
  $password = mysqli_real_escape_string($conn, $_POST["password"]);
  $desc = mysqli_real_escape_string($conn, $_POST["desc"]);

  $sql = "SELECT * FROM user WHERE name='".$name."'";
  $result = mysqli_query($conn, $sql);
  if($result->num_rows == 0){
    $sql = "INSERT INTO user (name, password) VALUES('".$name."', '".$password."')";
    mysqli_query($conn, $sql);
    $user_id = mysqli_insert_id($conn);
  } else {
    $row = mysqli_fetch_assoc($result);
    $user_id = $row["id"];
  }
  $sql = "INSERT INTO topic (title, description, author, created) VALUES ('".$title."','".$desc."','".$user_id."', now())";
  $result = mysqli_query($conn, $sql);
  header('Location: board.php');

  $conn->close();
 ?>
