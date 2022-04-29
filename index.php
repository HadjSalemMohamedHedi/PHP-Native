<!DOCTYPE html>
<html>

<head>
    <title>Get a qoute</title>
    <link rel="icon" href="https://www.mistralshipping-int.com/wp-content/uploads/2022/03/cropped-icone-mistral-shipping-32x32.png" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">

    <link rel="stylesheet" href="./assets/bootstrap/css//bootstrap.min.css" />
    <link rel="stylesheet" href="./assets/css/GetAirport.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="./assets/css/Collapse.css" />
    <link rel="stylesheet" href="./assets/css/themes.css" />
    <link rel="stylesheet" href="./assets/css/font-awesome.min.css" />


</head>

<body>

    <?php include('./themes/header.php'); ?>


    <div class="container transx_page_content_container">
        <div class="containerCollapse">
            <div class="menuCollapse">
                <ul>
                    <li id="airBtn" class="active">AIR FREIGHT</li>
                    <li id="seaBtn" >SEA FREIGHT</li>
                    <li id="roadBtn" >ROAD FREIGHT</li>
                    <li id="consBtn" >CONSOLIDATION LTL/LCL</li>
                </ul>
            </div>
            <div class="bodyCollapse">
                <div class="airBody" id="airBody"> <?php  include_once('./Quote/airfreight.php'); ?></div>
                <div class="seaBody" id="seaBody"> <?php  include_once('./Quote/seafreight.php'); ?></div>
                <div class="roadBody" id="roadBody"> <?php include_once('./Quote/roadfreight.php'); ?></div>
                <div class="consBody" id="consBody"> <?php include_once('./Quote/consolidation.php'); ?></div>
            </div>
        </div>

    </div>


    <?php include('./themes/footer.php'); ?>



    <script src="./assets/bootstrap//js/bootstrap.min.js"></script>
    <script src="./assets/jquery/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="./assets/jquery/validate.js"></script>

    <script src="./assets/js/formair.js"></script>
    <script src="./assets/js/formsea.js"></script>
    <script src="./assets/js/formsroad.js"></script>
    <script src="./assets/js/formscons.js"></script>


    <script src="./assets/js/collapse.js"></script>
    <script src="./assets/js/theme.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-1b93190375e9ccc259df3a57c1abc0e64599724ae30d7ea4c6877eb615f89387.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.1/lodash.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
    <script src='https://unpkg.com/fuse.js@2.5.0/src/fuse.min.js'></script>
    <script src='https://screenfeedcontent.blob.core.windows.net/html/airports.js'></script>
    <script src="./assets/js/GetAirport.js"></script>
    <script src="./assets/js/GetAirportDest.js"></script>

    <script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js"></script>

</body>

</html>