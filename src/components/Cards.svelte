<script>
    import Card from "./Card.svelte";

    /** @type { Array<Object<string, string|number>> } */
    const data = [
        {
            src: "images/images.svg",
            alt: "Texto Alternativo 1",
            title: "Producto 1",
            description:
                "Descripción del producto que se ofrece en la tarjeta 1",
        },
        {
            src: "images/images.svg",
            alt: "Texto Alternativo 2",
            title: "Producto 2",
            description:
                "Descripción del producto que se ofrece en la tarjeta 2",
        },
        {
            src: "images/images.svg",
            alt: "Texto Alternativo 3",
            title: "Producto 3",
            description:
                "Descripción del producto que se ofrece en la tarjeta 3",
        },
        {
            src: "images/images.svg",
            alt: "Texto Alternativo 4",
            title: "Producto 4",
            description:
                "Descripción del producto que se ofrece en la tarjeta 3",
        },
        {
            src: "images/images.svg",
            alt: "Texto Alternativo 5",
            title: "Producto 5",
            description:
                "Descripción del producto que se ofrece en la tarjeta 4",
        },
    ];
</script>

<div class="cards">
    {#each data as product}
        <Card {...product} />
    {/each}
</div>
