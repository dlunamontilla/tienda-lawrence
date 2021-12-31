<script>
    import SearchIcon from "./icons/SearchIcon.svelte";
</script>

<div class="search">
    <form action="./" method="get" class="search__form">
        <label for="search" class="search__form__label">
            <input
                type="search"
                name="q"
                id="search"
                placeholder="Búsqueda..."
                class="search__form__text"
            />
            <button class="search__form__button"><SearchIcon /></button>
        </label>
    </form>
</div>

<!-- Se utiliza el archivo _search.scss -->