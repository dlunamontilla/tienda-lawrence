<script>
    import { Router, Route } from "svelte-routing";
    import GraphicHeader from "./components/GraphicHeader.svelte";
    import Banner from "./components/Banner.svelte";
    import Cards from "./components/Cards.svelte";
    import Nav from "./components/Nav.svelte";
    import Footer from "./components/Footer.svelte";
</script>

<Router basepath="/">
    <header>
        <GraphicHeader />

        <Banner />

        <Nav />
    </header>

    <main>
        <section class="container">
            <Route path="/producto">
                <Cards />
            </Route>
        </section>
    </main>

    <footer class="footer">
        <Footer />
    </footer>
</Router>
