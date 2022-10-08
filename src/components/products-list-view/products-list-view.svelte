<script lang="ts">
  import fakeProducts from '../../../data/products.json';
  import ProductCard from '../shared/product-card/product-card.svelte';

  const products = [...fakeProducts];
</script>


<section class="bg-white">
  <div class="mx-auto mx-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Products list ({products.length})</h2>

    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {#each products as product}
        <ProductCard product={product} />
      {/each}
    </div>
  </div>
</section>
