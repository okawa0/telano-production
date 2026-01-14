// シェアウィンドウの表示
function shareFacebook() {
  const url = encodeURIComponent(window.location.href); // 現在のページをシェア
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  
  window.open(
    shareUrl,
    'facebook-share-dialog',
    'width=626,height=436'
  );
}

function shareTwitter() {
  const url = encodeURIComponent(window.location.href); // 現在のページをシェア
  const text = encodeURIComponent(document.title); // ページタイトルをシェアテキストとして使用
  const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
  
  window.open(
    shareUrl,
    'twitter-share-dialog',
    'width=550,height=420'
  );
}