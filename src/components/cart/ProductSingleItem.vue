<template>
  <flex class="minicart-single-product">
    <div class="image-wrap">
      <img :src="item.imageUrl"></img>
      <span class="promotion-tip">仅剩5件</span>
    </div>
    <flex direction="column" class="minicart-product-info">
      <div class="minicart-product-name">{{item.skuName}}</div>
      <div v-if="item.tags.length">
        <span class="product-tag"
          v-for="tag in item.tags"
          :style="{background: `#${tag.colorCode}`}">
          {{tag.iconText}}
        </span>
      </div>
      <span class="product-price">¥{{item.price}}</span>
    </flex>
  </flex>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="scss">

  .minicart-single-product {

    .image-wrap {
      width: 53px;
      margin-top: 10px;
    }

    img {
      width: 100%;
      height: 53px;
    }

    .promotion-tip {
      font-size: 12px;
      line-height: 26px;
      color: #ff5757;
      white-space: nowrap;
    }

    .minicart-product-info {
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 60px;
    }

    .minicart-product-name {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
    }

    .product-tag {
      color: #fff;
      font-size: 10px;
      line-height: 12px;
      padding: 1px 2px;
      border-radius: 2px;
    }

    .product-price {
      color: #ff3434;
      font-size: 16px;
    }
  }
</style>
