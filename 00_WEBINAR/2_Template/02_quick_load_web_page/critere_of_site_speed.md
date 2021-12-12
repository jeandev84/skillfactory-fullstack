Советы
1. Optimal/Ideal speed site (1s)
2. Normal speed site (2-3 s)
3. Need to optimise speed (4-7s)
4. Bad speed (8-10s)
5. Very Bad speed site (more than 11 s) Must to stop site and send it  Problem technic!!!


1. Company Airbnb

рекомендируют НЕ СТОИТ ИСПОЛЬЗОВАТЬ БОЛЬШИЕ РАДИУСЫ ДЛЯ box-shadow (тень)

10px   box-shadow  blur-radius - 120mc
5px    box-shadow  blur-radius - 60mc
0px    box-shadow  blur-radius - 30mc
300px  box-shadow  blur-radius - 930c

Не масштабируйте изображения. width, height (Не задавать ширину и высоту картинку относительно окно браузера)
просто надо переобразовать картинку по каждому размеру экрану.



2.Рекомендации

используйте сжатие картинок https://tinypng.com или другой любой сервис.

используйте сокращенные формы CSS

Быстро
ul {
    margin: 20px 10px 10px 5x;
}

чем писать 

Медленно
ul {
    margin-top: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 5px
}


3. Универсальный селектор <<*>> следует использовать только в исключительных случаях

* {
    margin: 0;
    padding: 0;
}


4. Минимизируйте файлы CSS
   CSS Minifier    
   CSS Compressor (Compress CSS, find and remove unused class)

5. Используйте импорт <link href="/styles/default.css" rel="stylesheet">

вместо импорта в HTML
не грузить быстро полностью styles
<style>
    @import url("/styles/default.css");
</style>


6. Уменьшите количество HTTP-запросов


7. Использование CSS-спрайтов (icons)
все иконьки в одном 

8. Подключайте Javascript в конец страницы

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="/styles.css">
   <title>Document</title>
</head>
<body>
   
      <!-- СОДЕРЖИМОЕ HTML -->

      <script src="/script.js"></script>
</body>
</html>


9. Оптимизируйте изображения

10. Тяжелые анимации сильно тормозят страницу       