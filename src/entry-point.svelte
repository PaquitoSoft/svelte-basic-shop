<script lang="ts">
	import ProductsListView from './components/products-list-view/products-list-view.svelte';
	import ShopCartView from './components/shop-cart-view/shop-cart-view.svelte';
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';

  const routes = {
    // '/cart': ShopCartView,
    '/cart': wrap({ asyncComponent: () => import('./components/shop-cart-view/shop-cart-view.svelte') }),
    '*': ProductsListView,
  };
</script>

<main>
  <Router {routes} />
</main>
