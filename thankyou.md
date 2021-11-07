---
layout: landingthankyou
title: お申し込みありがとうございます
description: "WithDOへのお申し込みが完了致しました！<br>info@interrupt.technologyから入金のご案内メールをお送り致します。<br>いましばらくお待ちください。"
image: assets/images/thankyou.jpg
nav-menu: false
show_tile: false
---

<!-- Main -->
<div id="main">

<!--  -->
<section id="two" class="spotlights">
    <section style="text-align:center;">
            <div class="caution" >
                <p style="color:#ff3369;font-size: 0.8em;">【ご注意】迷惑メール対策などで、「アドレス指定受信」・「ドメイン指定受信」・「メールフィルター」など、<br>
メールの拒否設定を行っていると「@interrupt.technology」のご案内を受信できない場合がございます。<br>
迷惑メール防止対策のためドメイン指定を行っている場合は「@interrupt.technology」を指定して下さい。<br>
指定受信の設定にしている場合には、設定の解除をお願いします。<br>
暫く経過してもご案内が届かない場合はお手数ですが、お問い合わせよりご連絡ください。</p>
<br>
                <ul  style="text-align: center;" class="actions">
                    <li><a href="/desc/04_withdo.html" class="button" style="text-transform:none !important;">WithDO TOPに戻る</a></li>
                </ul>
            </div>
    </section>

</section>

</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script><!-- jQuery の読み込み -->  
<script>
// History API が使えるブラウザかどうかをチェック
if( window.history && window.history.pushState ){
  //. ブラウザ履歴に１つ追加
  history.pushState( "nohb", null, "" );
  $(window).on( "popstate", function(event){
    //. このページで「戻る」を実行
    if( !event.originalEvent.state ){
      //. もう一度履歴を操作して終了
      history.pushState( "nohb", null, "" );
      return;
    }
  });
}
</script>