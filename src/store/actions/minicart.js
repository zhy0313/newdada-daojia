import Vue from 'vue'
import * as MutationTypes from '@/store/mutation-types'

// store.commit(MutationTypes.LOADING, false) // loading false

// 查询购物车接口
// 要求传入参数 {storeId: this.storeId, orgCode: this.orgCode}
export const querySingleCart = ({ commit }, options) => {
  // 测试用假数据
  // commit(MutationTypes.QUERY_SINGLE_CART, miniCartInfo)
  Vue.getAPI({
    functionId: MutationTypes.QUERY_SINGLE_CART,
    body: {
      ...options,
      positionType: 2
    }
  }).then((response) => {
    if (response.body.code === '0') {
      commit(MutationTypes.QUERY_SINGLE_CART, response.result)
    } else {
      Vue.$toast({message: response.body.msg})
    }
  })
}

/* eslint-disable */
// 测试数据，假数据
//
var miniCartInfo = {
  authorize : false,
  buttonName : "去结算",
  buttonState : 0,
  discountName : "已减20元",
  itemList: [
    {
      buttonFlag : true,
      giftCanChooseNum : 0,
      singleGiftMap : {},
      skuList : [
        {
          basePrice : "118",
          cartNum : 3,
          checkType : 1,
          imageUrl : "https://img10.360buyimg.com/n7//jfs/t1372/105/952599465/159113/1dfcc527/55b4527eN811882ad.jpg",
          price : "106",
          promotePrice : {
            promotePrice: "106",
            promoteNum: 2,
            promoteTag: {iconText: "直降", type: "1", colorCode: "fecc32"},
            basicNum : 1,
            basicPrice : "118",
            basicTag : {iconText: "原价", type: "7", colorCode: "cacaca"}
          },
          // promotionTip : "直降价格限购2件",
          skuId : "2001709336",
          skuName : "冈本003白金超薄10只进口避孕套/盒",
          skuState : 1,
          tags : [{iconText: "直降", type: "1", colorCode: "fecc32"}]
      }],
      suitDescrip : ["已满129已减18", "已满129已减18"],
      suitName : "满减",
      suitType : "suit"
    },
    {
      buttonFlag : false,
      giftCanChooseNum : 0,
      suitDescrip : [],
      skuList: [
        {
          basePrice : "11.8",
          cartNum : 1,
          checkType : 1,
          imageUrl : "https://img10.360buyimg.com/n7//jfs/t3082/306/9404930591/16333/946b0cd/58d47f0dNb317f808.jpg",
          price : "11.8",
          skuId : "2006947714",
          skuName : "爱鲜蜂·进囗厄瓜多尔甜香蕉550-650g/袋",
          skuState : 1,
          tags : [{
            colorCode: "fecc32",
            iconText: "直降",
            type: "1"
          }]
        },
        {
          basePrice : "10",
          cartNum : 15,
          checkType : 0,
          imageUrl : "https://img10.360buyimg.com/n7//jfs/t2686/129/1178913568/131076/548b8113/5736c5d7Nd761b5ad.jpg",
          price : "6",
          promotePrice : {
            basicNum : 11,
            basicPrice : "10",
            basicTag: {iconText: "原价", type: "7", colorCode: "cacaca"},
            promoteNum : 4,
            promotePrice : "6",
            promoteTag : {iconText: "秒杀", type: "4", colorCode: "ff5c5d"},
            promotionTip : "秒杀商品仅剩4件",
            skuId : "2002355070",
            skuName : "益補健 维生素C含片（桔子味）20片/个",
            skuState : 1
          },
          promotionTip : "秒杀商品仅剩4件",
          skuId : "2002355070",
          skuName : "益補健 维生素C含片（桔子味）20片/个",
          skuState : 1,
          tags : [{iconText: "秒杀", type: "4", colorCode: "ff5c5d"}],
          weight : "4kg"
        },
        {
          basePrice : "14.9",
          cartNum : 1,
          checkType : 1,
          imageUrl : "https://img10.360buyimg.com/n7//jfs/t3061/255/5849730628/26027/9de53c5c/58804da5N05fbe78b.jpg",
          price : "14.9",
          skuId : "2006227040",
          skuName : "爱鲜蜂·泰国龙眼400g/盒",
          skuState : 1,
          skuStateName : "仅剩1件",
          tags : []
        }
      ],
      suitName : "单品",
      suitType : "single"
    },
    {
      buttonFlag : false,
      giftCanChooseNum : 0,
      skuList: [
        {
          basePrice : "25.8",
          cartNum : 1,
          checkType : 0,
          imageUrl : "https://img10.360buyimg.com/n7//jfs/t3199/62/5824551052/20328/7c3fb4e5/588421abN1874b740.jpg",
          price : "25.8",
          skuId : "2006281165",
          skuName : "爱鲜蜂·特小凤西瓜1.5-2.5kg/粒",
          skuState : 0,
          skuStateName : "无货",
          tags : []
        },
        {
          basePrice : "19.89",
          cartNum : 1,
          checkType : 0,
          imageUrl : "https://img10.360buyimg.com/n7//jfs/t3268/4/5715044768/30033/6478b4db/588421abNcc5145a9.jpg",
          price : "19.89",
          skuId : "2006281164",
          skuName : "爱鲜蜂·富平吊柿饼230-280g/盒",
          skuState : 0,
          skuStateName : "无货",
          tags : []
        }
      ],
      suitDescrip : [],
      suitName : "失效",
      suitType : "invalidate",
    }
  ],
  numWeightDesc : "(已选1件)",
  openJPIndustry : "6",
  orgCode : "73655",
  payMoneyPriceValue : "118",
  storeId : "10048047",
  storeName : "花里花外鲜花—北京店",
  totalNum : 1,
  wholeStore : false
}
// 假数据
