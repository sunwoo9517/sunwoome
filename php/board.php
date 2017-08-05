<?php
  require("config.php");
  $conn = mysqli_connect($config["host"], $config["duser"], $config["dpw"]);
  mysqli_select_db($conn, $config["dname"]);
  $result = mysqli_query($conn, "SELECT * FROM topic");
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="description" content="my homepage">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>SUNWOOme</title>
  <link rel="stylesheet" href="../css/reset.css">
  <link rel="stylesheet" href="../css/style.css">
</head>
  <body id="board">
    <!-- header -->
    <header id="header">
      <div id="logo"><a href="http://sunwoome.iptime.org/"><span>Hello world</span> by SUNWOOme</a></div>
      <a href="write.php">Write</a>
      <a href="gallery.php">Gallery</a>
      <a href="http://sunwoome.iptime.org/">Home</a>
    </header>
    <!-- nav -->
    <div id="wrapper">
      <!-- main -->
      <div id="main">
        <!-- board -->
        <nav>
          <ul>

            <?php
            while($row = mysqli_fetch_assoc($result)){
              echo '<a href="board.php?id='.$row['id'].'"><li>'.htmlspecialchars($row['title']).'</li></a>';
            }
            ?>

          </ul>
        </nav>
        <article class="content">
          <?php
              if(empty($_GET['id'])===false){
                $sql = "SELECT topic.id, title, author, name, created, description FROM topic LEFT JOIN user ON topic.author=user.id WHERE topic.id=".$_GET['id'];
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_assoc($result);
                echo '<h2 id="user_title">'.htmlspecialchars($row['title']).'</h2>';
                echo '<div id="user_name">작성자: '.htmlspecialchars($row['name']).'</div>';
                echo '<p id="user_desc">'.strip_tags($row['description'], '<a><h1><h2><h3><h4><h5><h6><ul><ol><li>').'</p>';
                echo '<div id="user_date">작성 일자: '.htmlspecialchars($row['created']).'</div>';
              } else {
                echo '<h2>여기는 게시판입니다.</h2>';
              }
          ?>
        </article>
      </div>
      <!-- footer -->
      <footer id="footer">
        <div><a href="#banner">SUNWOOME</a>  E-mail: sunwoojung517@gmail.com</div>
        <div>디자인 참고: <a href="https://templated.co">Templated</a>. 이미지: <a href="https://unsplash.com/">Unsplash</a>.</div>
      </footer>

    </div>
    <!-- Script -->
    <script type="text/javascript" src="../js/jquery-2.2.4.min.js"></script>
    <script type="text/javascript" src="../js/jquery.scrollex.min.js"></script>
    <script type="text/javascript" src="../js/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
    <script type="text/javascript" src="../js/jquery.poptrox.min.js"></script>
    <script type="text/javascript" src="../js/script.js"></script>
  </body>
</html>
