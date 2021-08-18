<?php
/*
 Template Name: about_us
 Template Post Type: page
 */

get_header();

?>

    <main>
        <section class="bbq">
            <h4><?= get_field('history__title') ?></h4>
            <p class="bbq__headerText">
                <?= get_field('history__content') ?>
            </p>

            <div class="bbq__cards">
                <div class="bbq__cards-item">
                    <img src="<?=get_field('card_item_1__img')['url']?>" alt="">
                    <h3>  <?= get_field('card_item_1__title') ?></h3>
                </div>
                <div class="bbq__cards-item">
                    <img src="<?=get_field('card_item_2__img')['url']?>" alt="">
                    <h3> <?= get_field('card_item_2__title') ?></h3>
                </div>
            </div>

            <p class="bbq__footerText"><?= get_field('history_under_card_items')?></p>
        </section>

        <section class="guests">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-12">
                        <div class="guests__box">



                            <img src="<?php bloginfo('template_directory'); ?>/assets/img/Slice_1.png" alt="">



                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="online-orders online-orders-about-us">
            <div class="container">
                <div class="online-orders__inform">
                    <h2 class="online-orders__title color-red">
                        <?=get_field('tagline__title')?>
                    </h2>
                    <p class="online-orders__description">
                        <?=get_field('tagline__description')?>
                    </p>
                    <ul class="d-flex online-orders__list">
                        <li class="online-orders__item online-orders__item-email"><a class="online-orders__link" href="#">
                                <?=get_field('tagline__email')?>
                            </a>
                        </li>
                        <li class="online-orders__item online-orders__item-whatsapp"><a class="online-orders__link"
                                                                                        href="#">
                                <?=get_field('tagline__phone')?>
                            </a></li>
                    </ul>
                </div>
            </div>
        </section>


    </main>


<?php

get_footer();
?>
