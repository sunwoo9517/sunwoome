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
      <a href="board.php">Go back</a>
    </header>
    <div id="wrapper">
      <!-- main -->
      <div id="main">
        <div class="middle">
          <!-- board -->
          <div class="content">
            <h2>POST</h2>
            <hr/>
            <form action="process.php" method="post">
              <div class="field">
                <label for="title">TITLE</label>
                <input type="text" id="title" name="title" placeholder="Title" required>
              </div>
              <div class="field half">
                <label for="name">NAME</label>
                <input type="text" id="name" name="name" placeholder="Name" required>
              </div>
              <div class="field half">
                <label for="password">PASSWORD</label>
                <input type="password" id="password" name="password" placeholder="Password" required>
              </div>
              <div class="field">
                <label for="desc">BOARD</label>
                <textarea name="desc" id="desc" rows="10" placeholder="Write..." required></textarea>
              </div>
              <div class="field">
                <input type="submit" name="submit" id="submit" value="POST">
              </div>
            </form>
          </div>
        </div>
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
