<script>
    // Importación de iconos:
    import Like from "./icons/Like.svelte";
    import Download from "./icons/Download.svelte";
    import Cars from "./icons/Cars.svelte";
    import ZoomIn from "./icons/ZoomIn.svelte";
    import Views from "./icons/Views.svelte";


    /** @type { string } */
    export let title;

    /** @type { string } */
    export let description;

    /** @type { string } */
    export let src;

    /** @type { string } */
    export let alt;

    /** @type { Array<string> } */
    export let formats = ["SVG", "CDR", "AI", "PSD"];
</script>

<div class="cards__item" {description}>
    <div class="cards__item__images">
        <img {src} {alt} />

        <div class="cards__item__images__caption">
            <p>{title}</p>
            <p><strong>Formatos: </strong> {formats.join(" - ")}</p>
        </div>
    </div>

    <div class="cards__item__content">
        <div class="cards__item__content__icons">
            <div class="cards__item__content__icons__views">
                <ul class="menu-icons">
                    <li class="menu-icons__item"><Views /> 20.150K</li>
                </ul>
            </div>

            <div class="cards__item__content__icons__options">
                <ul class="menu-icons">
                    <li class="menu-icons__item"><Cars /></li>
                    <li class="menu-icons__item"><ZoomIn /></li>
                    <li class="menu-icons__item"><Download /></li>
                    <li class="menu-icons__item"><Like /></li>
                </ul>
            </div>
        </div>
    </div>
</div>