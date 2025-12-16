
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title> </title>


  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      margin: 0;
      a {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  display: inline-block; /* 이미지가 아닌 텍스트 링크일 경우 필요 없을 수 있음 */
}
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
      style="display: block; vertical-align: bottom; margin: 0; padding: 0;"
    }

    .hotspot {
      position: absolute;
      transform: translate(-50%, -50%);
      transition: transform 0.2s ease;
      style="display: block; vertical-align: bottom; margin: 0; padding: 0;"
    }

    .hotspot:hover {
      transform: translate(-50%, -50%) scale(1.05);
    }

    .hotspot img {
      display: block;
      max-width: 100%;
      style="display: block; vertical-align: bottom; margin: 0; padding: 0;"
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
       style="left:72%; top:56%;"
       a {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  display: inline-block; /* 이미지가 아닌 텍스트 링크일 경우 필요 없을 수 있음 */
}>
      <img src="./computer.svg" alt="computer">
    </a>
  </div>

  <script src="./script.js"></script>
</body>
</html>
