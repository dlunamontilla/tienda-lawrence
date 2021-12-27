<script>
    /** @type { string } */
    export let title = "Título de la tarjeta";

    /** @type { string } */
    export let description = "Descripción del producto que se venderá y se muestra en la tarjeta";

    /** @type { string } */
    export let src = "images/images.svg";

    /** @type { string } */
    export let alt;
</script>

<div class="cards__item">
    <div class="cards__item__images">
        <img {src} {alt} />
    </div>

    <div class="cards__item__content">
        <div class="cards__item__content__title">{title}</div>
        <div class="cards__item__content__description">{description}</div>
        <div class="cards__item__content__icons">Iconos</div>
    </div>
</div>