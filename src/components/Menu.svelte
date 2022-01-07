<script>
    import { Router, Link } from "svelte-routing";
</script>

<!-- <ul class="menu">
    <li class="menu__item">
        <a href="../" class="menu__item__enlace">Inicio</a>
    </li>

    <li class="menu__item">
        <a href="/producto" class="menu__item__enlace">Producto</a>
    </li>

    <li class="menu__item">
        <a href="/historial" class="menu__item__enlace">Historial</a>
    </li>

    <li class="menu__item">
        <a href="/carrito" class="menu__item__enlace">Carrito</a>
    </li>

    <li class="menu__item">
        <a href="/favoritos" class="menu__item__enlace">Favoritos</a>
    </li>
</ul> -->

<!-- Estilos definidos en _nav.scss -->

<Router>
    <ul class="menu">
        <li class="menu__item">
            <Link to="../" replace={true} class="menu__item__enlace">Inicio</Link>
        </li>
        <li class="menu__item">
            <Link to="/producto" class="menu__item__enlace">Productos</Link>
        </li>
        <li class="menu__item">
            <Link to="/historial" class="menu__item__enlace">Historial</Link>
        </li>
        <li class="menu__item">
            <Link to="/carrito" class="menu__item__enlace">Carrito</Link>
        </li>
        <li class="menu__item">
            <Link to="/favoritos" class="menu__item__enlace">Favoritos</Link>
        </li>
    </ul>
</Router>
