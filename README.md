<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>배경 이미지 테스트</title>

  <!-- GitHub Pages 필수 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      margin: 0;
    }

    .scene {
      position: relative;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    .bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hotspot {
      position: absolute;
      transform: translate(-50%, -50%);
      transition: transform 0.2s ease;
    }

    .hotspot:hover {
      transform: translate(-50%, -50%) scale(1.05);
    }

    .hotspot img {
      display: block;
      max-width: 100%;
    }
  </style>

  <!-- 외부 CSS 있으면 유지 -->
  <link rel="stylesheet" href="./style.css">
</head>

<body>
  <div class="scene">
    <img src="./background.jpg" alt="background" class="bg">

    <a href="https://example.com"
       class="hotspot"
       style="left:72%; top:56%;">
      <img src="./computer.jpg" alt="computer">
    </a>
  </div>

  <script src="./script.js"></script>
</body>
</html>
