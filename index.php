<?php require("header.php")?>

<main>
  <section class="task-list">
  <div class = "task right">プログラミング</div>
  <div class="task left">読書</div>
  </section>
  <h2 class = "order">タスクを選んでください</h2>
  
  <!--フェードイン-->
  <section class="menu">
  <div class="menu-btn js-click-callender">
    <i class="fas fa-calendar-alt fa-5x menu-icon"></i>
  </div>
  <div class="menu-btn js-click-recording">
    <i class="far fa-bookmark fa-5x menu-icon"></i>
  </div>
  </section>
</main>

<i class="fas fa-plus-circle add-task fa-3x js-click-add-task"></i>



<section class="set-goal">
<h1>学習期間を選んでください</h1>
<form action="">
  <label for="1"><input name= "mouth" type="radio" value="1ヶ月" id="1">1ヶ月</label>
  <label for="3"><input name= "mouth" type="radio" value="3ヶ月" id="3">3ヶ月</label>
  <label for="6"><input name= "mouth" type="radio" value="6ヶ月" id="6">6ヶ月</label>

<h1>目標学習時間を設定してください</h1>
<div><input type="number" class = "set-time-goal"></div>
<div>時間</div>
<input type="submit" value="決定" class = "btn set-goal-btn">

<div class = "comment">※一分野に絞って学ぶ場合、社会人でもひと月に最低60時間は勉強しましょう。</div>
</form>
</section>
<div class="modal js-click-modal"></div>

<!--記録-->
<section class="recording-block">
 <form action="" class="record-form">
 <p>記録を入力してください</p>
  <input type="number"class = "form record-hour ">
  <div>時間</div>
  <input type="number" class = "form record-minute ">
  <div>分</div>
  <input type="submit" class="btn record-btn">
  </form>
</section>

<?php require("footer.php")?>
</body>
</html>