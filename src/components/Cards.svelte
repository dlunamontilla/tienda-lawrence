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
            alt: "Texto Alternativo 5",
            title: "Ethereum Squid Game",
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
