<script>
    import GraphicHeader from "./components/GraphicHeader.svelte";
    import Banner from "./components/Banner.svelte";
    import Cards from "./components/Cards.svelte";
    import Nav from "./components/Nav.svelte";
    import Footer from "./components/Footer.svelte";
</script>

<header>
    <GraphicHeader />

    <Banner />

    <Nav />
</header>

<main>
    <section class="container">
        <Cards />
    </section>
</main>

<footer class="footer">
    <Footer />
</footer>
