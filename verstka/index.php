<!DOCTYPE html>
<html lang="ru">
<?php include 'blocks/head.php' ?>

<body class="page">
    <?php include 'blocks/header.php';?>
    <div class="modals">
        <?php include 'blocks/sidebar.php'?>
    </div>
    <?php include 'blocks/horizon.php';?>
    <div class="main-block middle scroll">
        <?php 
            include 'blocks/first-block.php';
            include 'blocks/portfolio.php';
            include 'blocks/article.php';
            include 'blocks/order.php';
        ?>
    </div>
    <?php include 'blocks/footer.php';?>
</body>

</html>