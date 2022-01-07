<script>
    import Card from "./Card.svelte";

    /** @type { Array<Object<string, string|number>> } */
    const data = [
        {
            src: "images/images.svg",
            alt: "Calamardo Squid Game",
            title: "Calamardo Squid Game",
            description:
                "Descripción del producto que se ofrece en la tarjeta 1",
        },
        {
            src: "images/images.svg",
            alt: "Squid Game",
            title: "Squid Game",
            description:
                "Descripción del producto que se ofrece en la tarjeta 2",
        },
        {
            src: "images/images.svg",
            alt: "Shiba Inu (NFT)",
            title: "Shiba Inu (NFT)",
            description:
                "Descripción del producto que se ofrece en la tarjeta 3",
        },
        {
            src: "images/images.svg",
            alt: "Bitcoin Game Token",
            title: "Bitcoin Game Token",
            description:
                "Descripción del producto que se ofrece en la tarjeta 3",
        },
        {
            src: "images/images.svg",
            alt: "Ethereum Squid Game",
            title: "Ethereum Squid Game",
            description:
                "Descripción del producto que se ofrece en la tarjeta 4",
        },
        {
            src: "https://cdn.pixabay.com/photo/2019/12/25/11/11/christmas-4718303_960_720.jpg",
            alt: "Una Imagen de PixaBay",
            title: "Una Imagen de PixaBay",
            description:
                "Descripción del producto que se ofrece en la tarjeta 5",
        },
        {
            src: "https://cdn.pixabay.com/photo/2019/12/25/11/11/christmas-4718303_960_720.jpg",
            alt: "Otra imagen de PixaBay",
            title: "Otra imagen de PixaBay",
            description:
                "Descripción del producto que se ofrece en la tarjeta 6",
        },
    ];
</script>

<div class="cards">
    {#each data as product}
        <Card {...product} />
    {/each}
</div>
